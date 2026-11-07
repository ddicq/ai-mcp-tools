import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI MCP Tools — Connect your tools to AI",
  description: "One secure workspace for connecting services and MCP tools to AI assistants.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
