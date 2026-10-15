import type { LucideIcon } from "lucide-react";

export type NavItem = {
  /** Translation key inside the `nav` namespace. */
  key: string;
  /** Locale-less path of the section, e.g. `/guide`. */
  path: string;
  icon: LucideIcon;
  /** Whether the section is backed by MDX content in `content/<locale>/`. */
  isContentType: boolean;
};

/**
 * Navigation entries are rebuilt per project; the template ships with an empty list
 * so no stale sections (races/bosses/guides/…) leak into the header or sidebar.
 */
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
