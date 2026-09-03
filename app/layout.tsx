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
  metadataBase: new URL("https://murmurlog.com"),
  title: "MurMur Log",
  description:
    "Learning, writing, and building a system for human intention to emerge and become real.",
  alternates: { types: { "application/atom+xml": "/feed.xml" } },
  openGraph: {
    title: "MurMur Log",
    description:
      "Learning, writing, and building a system for human intention to emerge and become real.",
    images: [
      {
        url: "/murmur-log-social-v2.png",
        width: 1727,
        height: 911,
        alt: "MurMur Log — Learning, writing, and building a system for human intention to emerge and become real.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
