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
  metadataBase: new URL("https://fbuljan.vercel.app"),
  title: "Filip Buljan | Software Engineer",
  description:
    "Software Engineer building AI products, full-stack apps, and computer vision systems. CS Master's student at FER Zagreb.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Filip Buljan | Software Engineer",
    description:
      "Software Engineer building AI products, full-stack apps, and computer vision systems. CS Master's student at FER Zagreb.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
