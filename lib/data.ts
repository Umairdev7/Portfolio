// All site content lives here. Personal details come from the resume.

export const profile = {
  name: "Umair Shafi",
  initials: "US",
  role: "PHP Laravel Developer",
  title: "Software Engineer",
  brand: "Laravel Backend Developer",
  email: "umairdev20@gmail.com",
  linkedin: "https://www.linkedin.com/in/umair-shafii/",
  linkedinHandle: "in/umair-shafii",
  location: "Lahore, Punjab, Pakistan",
  heroIntro:
    "I build secure and scalable web applications using PHP, Laravel and MySQL. I love clean MVC code, efficient queries and fast, reliable backends.",
  summary:
    "Laravel Developer with 1 year of experience in PHP, MySQL, and focused on building secure and scalable web applications.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type SkillKey =
  | "php"
  | "laravel"
  | "mysql"
  | "javascript"
  | "bootstrap"
  | "wordpress"
  | "html";

// Levels mirror the resume (7 of 10 dots for each skill).
export const skills: { key: SkillKey; name: string; level: number; description: string }[] = [
  {
    key: "laravel",
    name: "Laravel",
    level: 7,
    description:
      "MVC architecture, Eloquent ORM relationships, migrations, and built-in authentication & authorization.",
  },
  {
    key: "php",
    name: "PHP",
    level: 7,
    description:
      "Writing clean, secure and maintainable server-side code following modern best practices.",
  },
  {
    key: "mysql",
    name: "MySQL",
    level: 7,
    description:
      "Designing relational schemas and writing efficient, optimized queries for fast data access.",
  },
  {
    key: "javascript",
    name: "JavaScript / jQuery",
    level: 7,
    description:
      "Adding interactivity, AJAX requests and dynamic behaviour on top of Laravel views.",
  },
  {
    key: "bootstrap",
    name: "Bootstrap",
    level: 7,
    description:
      "Building responsive, mobile-friendly layouts quickly with a consistent component system.",
  },
  {
    key: "wordpress",
    name: "WordPress",
    level: 7,
    description:
      "Setting up, customizing and maintaining WordPress websites for business needs.",
  },
  {
    key: "html",
    name: "HTML & CSS",
    level: 7,
    description:
      "Semantic, accessible markup and clean styling for responsive user interfaces.",
  },
];

export type ServiceKey = "backend" | "api" | "database" | "auth" | "performance" | "wordpress";

export const services: { key: ServiceKey; title: string; description: string }[] = [
  {
    key: "backend",
    title: "Laravel Web Applications",
    description:
      "End-to-end web applications built on Laravel's MVC architecture with clean, maintainable code.",
  },
  {
    key: "database",
    title: "Database Design & Optimization",
    description:
      "MySQL schemas, migrations, Eloquent relationships and efficient queries that scale with your data.",
  },
  {
    key: "auth",
    title: "Authentication & Access Control",
    description:
      "Secure login, authorization and role-based access control using Laravel's built-in features.",
  },
  {
    key: "api",
    title: "Front-end Integration",
    description:
      "Working closely with front-end developers to deliver responsive, user-friendly web solutions.",
  },
  {
    key: "performance",
    title: "Security, Performance & Debugging",
    description:
      "Hardening applications, improving response times and tracking down complex issues.",
  },
  {
    key: "wordpress",
    title: "WordPress Websites",
    description:
      "Business websites on WordPress, customized and maintained to match your brand.",
  },
];

export const experience = [
  {
    role: "PHP Laravel Developer",
    company: "Himologics",
    location: "Gulberg II, Lahore, Punjab",
    period: "April 2024 — Present",
    points: [
      { strong: "Laravel", text: "Developed and maintained web applications using Laravel, following MVC architecture and best coding practices." },
      { strong: "MySQL databases", text: "Worked with MySQL databases, writing efficient queries, migrations, and Eloquent ORM relationships." },
      { strong: "Role-based access control", text: "Implemented authentication, authorization, and role-based access control using Laravel's built-in features." },
      { strong: "Collaboration", text: "Collaborated with front-end developers to deliver responsive and user-friendly web solutions." },
      { strong: "Security & performance", text: "Ensured application security, performance optimization, and debugging of complex issues." },
    ],
  },
];

export const education = {
  degree: "Master of Computer Science (MCS)",
  school: "University of Management and Technology, Lahore",
  date: "April 2024",
  gpa: "3.0 / 4.0",
};

// SAMPLE PROJECTS — replace with your real work.
// Leave `github` / `demo` empty ("") to hide that button; the card then shows a "Client project" badge.
export const projects = [
  {
    title: "Role-Based Admin Panel",
    description:
      "Multi-role admin dashboard with authentication, permissions and activity management built on Laravel.",
    tags: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    github: "",
    demo: "",
  },
  {
    title: "Inventory Management System",
    description:
      "Stock, purchase and sales tracking with Eloquent relationships, reports and optimized MySQL queries.",
    tags: ["PHP", "Laravel", "MySQL"],
    github: "",
    demo: "",
  },
  {
    title: "Business Website (WordPress)",
    description:
      "Responsive company website with custom theme tweaks, contact forms and SEO-friendly pages.",
    tags: ["WordPress", "HTML", "CSS"],
    github: "",
    demo: "",
  },
  {
    title: "Appointment Booking Portal",
    description:
      "Booking flow with user accounts, email notifications and an admin area to manage schedules.",
    tags: ["Laravel", "JavaScript", "MySQL"],
    github: "",
    demo: "",
  },
];
