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
  title: "Pedro Blaya Luz - AI/ML Solutions Architect",
  description:
    "AI/ML Solutions Architect with expertise in data science, machine learning, and software engineering",
  icons: {
    icon: "/mountains.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white overflow-x-hidden`}
      >
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
