export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "SpongeBob Tower Defense Wiki",
  shortName: "SpongeBob TD",
  logoText: "ST",
  tagline: "Working Codes, Unit Tier Lists, Best Teams & Guides",
  description: "Your ultimate SpongeBob Tower Defense wiki for Roblox — working codes, unit tier lists, best teams, upgrade paths and update notes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spongebob-tower-defense.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spongebob-tower-defense.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/16732694052/",
  heroVideoId: "z3EusKMbhXE", // SpongeBob Tower Defense gameplay / progression showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
