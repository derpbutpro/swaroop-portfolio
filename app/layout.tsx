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
  title: "Swaroop Bevinal | CS Student Portfolio | Bangalore Institute of Technology",
  description: "Personal portfolio of Swaroop Bevinal, Computer Science student at Bangalore Institute of Technology. Showcasing software engineering projects, technical skills, and academic growth.",
  keywords: ["Swaroop Bevinal", "Bangalore Institute of Technology", "BIT", "Computer Science", "Portfolio", "Software Engineering"],
  authors: [{ name: "Swaroop Bevinal" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        <div className="relative min-h-screen flex flex-col bg-grid-pattern">
          {children}
        </div>
      </body>
    </html>
  );
}
