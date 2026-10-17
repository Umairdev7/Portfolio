import { SiLaravel, SiPhp, SiMysql, SiJavascript, SiBootstrap, SiWordpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FiServer, FiDatabase, FiLock, FiLayout, FiShield, FiGlobe } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ServiceKey, SkillKey } from "@/lib/data";

export const skillIcons: Record<SkillKey, IconType> = {
  laravel: SiLaravel,
  php: SiPhp,
  mysql: SiMysql,
  javascript: SiJavascript,
  bootstrap: SiBootstrap,
  wordpress: SiWordpress,
  html: FaHtml5,
};

export const serviceIcons: Record<ServiceKey, IconType> = {
  backend: FiServer,
  database: FiDatabase,
  auth: FiLock,
  api: FiLayout,
  performance: FiShield,
  wordpress: FiGlobe,
};
