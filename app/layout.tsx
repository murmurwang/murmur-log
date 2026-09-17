import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
