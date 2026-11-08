import type { Metadata } from "next";
import "./globals.css";
import "./footer.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "AI MCP Tools — Connect your tools to AI",
  description: "One secure workspace for connecting services and MCP tools to AI assistants.",
  icons: {
    icon: "https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png",
    shortcut: "https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png",
    apple: "https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
