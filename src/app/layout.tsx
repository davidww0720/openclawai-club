import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openclawai.club"),
  title: {
    default: "OpenClawAI.club | OpenClaw Tutorials & AI Agent Workflows",
    template: "%s | OpenClawAI.club",
  },
  description:
    "OpenClaw practical tutorials, AI agent automation workflows, and deployment operations. Build real AI assistants with Telegram control, model routing, and fallbacks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://openclawai.club/",
    siteName: "OpenClawAI.club",
    title: "OpenClawAI.club | OpenClaw Tutorials & AI Agent Workflows",
    description:
      "OpenClaw practical tutorials, AI agent automation workflows, and deployment operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-grid`}
      >
        {children}
      </body>
    </html>
  );
}
