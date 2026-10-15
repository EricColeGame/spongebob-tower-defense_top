import type { LucideIcon } from "lucide-react";
import { ArrowLeftRight, BookOpen, Newspaper, Tag, TrendingUp, Users, Swords } from "lucide-react";

export type NavItem = {
  /** Translation key inside the `nav` namespace. */
  key: string;
  /** Locale-less path of the section, e.g. `/guide`. */
  path: `/${string}`;
  icon: LucideIcon;
  /** Whether the section is backed by MDX content in `content/<locale>/`. */
  isContentType: boolean;
};

/**
 * Navigation entries mirror the category folders produced under
 * `content/<locale>/` (see 关键词.json → categories). Every entry must keep
 * `key` (translation key), `path` (URL) and `isContentType` in sync with
 * `en.json` `nav`, `content.ts` `GROUP_TITLES` / `GROUP_ORDER` and `sitemap.ts`.
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Tag, isContentType: true },
  { key: "units", path: "/units", icon: Users, isContentType: true },
  { key: "trading", path: "/trading", icon: ArrowLeftRight, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "updates", path: "/updates", icon: Newspaper, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
