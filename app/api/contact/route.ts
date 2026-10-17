import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Simple in-memory rate limit: max 5 messages per IP per 10 minutes (per server instance)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "").trim();

  // Bots fill the hidden "website" field — pretend success and drop it
  if (honeypot) return NextResponse.json({ ok: true });

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Please enter a valid email address.";
  if (message.length < 10 || message.length > 5000) errors.message = "Message should be between 10 and 5000 characters.";
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please fix the highlighted fields.", errors }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `${message}\n\n—\nName: ${name}\nEmail: ${email}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937">
        <h2 style="margin:0 0 12px">New message from your portfolio</h2>
        <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <div style="white-space:pre-wrap;padding:16px;background:#f3f4f6;border-radius:8px">${escapeHtml(message)}</div>
        <p style="color:#6b7280;font-size:12px;margin-top:16px">Reply to this email to respond directly to ${escapeHtml(name)}.</p>
      </div>`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
