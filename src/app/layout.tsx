import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openclawai.club"),
  title: {
    default: "OpenClawAI.club｜OpenClaw 实战与 AI Agent 工作流",
    template: "%s｜OpenClawAI.club",
  },
  description:
    "OpenClaw 实战教程、AI Agent 自动化工作流与部署运维记录。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://openclawai.club/",
    siteName: "OpenClawAI.club",
    title: "OpenClawAI.club｜OpenClaw 实战与 AI Agent 工作流",
    description:
      "OpenClaw 实战教程、AI Agent 自动化工作流与部署运维记录。",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
