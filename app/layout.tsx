import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthOven — AI-Powered Social Media Growth Agency",
  description:
    "We build what fuels your digital growth. AI-powered competitor intelligence, content automation, and social media strategy that delivers results.",
  keywords: [
    "social media growth",
    "viral content",
    "competitor intelligence",
    "content automation",
    "AI content strategy",
    "social media agency",
  ],
  openGraph: {
    title: "GrowthOven — AI-Powered Social Media Growth Agency",
    description:
      "We build what fuels your digital growth. AI-powered social media strategy that delivers results.",
    type: "website",
    siteName: "GrowthOven",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthOven — AI-Powered Social Media Growth Agency",
    description:
      "We build what fuels your digital growth. AI-powered social media strategy that delivers results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
