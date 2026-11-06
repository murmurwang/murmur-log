import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://murmurlog.com"),
  title: "MurMur Log",
  description:
    "Agent 独立开发者，构建让人的意图逐渐清晰并成为现实的系统，也在首先让自己成为这个系统。",
  alternates: { types: { "application/atom+xml": "/feed.xml" } },
  openGraph: {
    title: "MurMur Log",
    description:
      "Agent 独立开发者，构建让人的意图逐渐清晰并成为现实的系统，也在首先让自己成为这个系统。",
    images: [
      {
        url: "/murmur-log-social-v2.png",
        width: 1727,
        height: 911,
        alt: "MurMur Log — Agent 独立开发者，构建让人的意图逐渐清晰并成为现实的系统，也在首先让自己成为这个系统。",
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
      <body>{children}</body>
    </html>
  );
}
