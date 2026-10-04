import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",   // Prevent FOIT — show fallback font while loading
  preload: true,
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",   // Prevent FOIT
  preload: true,
});

export const metadata: Metadata = {
  title: "Aviral Mishra | Portfolio",
  description:
    "AI Full-Stack Developer & MCA @ NIT Warangal. Crafting premium, performance-focused digital products and web architectures.",
  keywords: ["Aviral Mishra", "Portfolio", "Full Stack Developer", "NIT Warangal", "MCA", "React", "Next.js"],
  authors: [{ name: "Aviral Mishra" }],
  openGraph: {
    type: "website",
    title: "Aviral Mishra | Portfolio",
    description: "AI Full-Stack Developer & MCA @ NIT Warangal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
      className={`${inter.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
