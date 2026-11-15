import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nitw.vercel.app"),
  title: "Aviral Mishra | Distributed Systems & Applied AI Engineer",
  description:
    "Portfolio of Aviral Mishra — MCA @ NIT Warangal. Architecting low-latency hybrid RAG, high-throughput distributed event streaming, and sub-4ms serverless vector inference.",
  keywords: [
    "Aviral Mishra",
    "NIT Warangal",
    "Distributed Systems",
    "RAG Architecture",
    "Vector Search",
    "Kafka",
    "Apache Spark",
    "Machine Learning",
    "Next.js",
    "Full Stack Engineer"
  ],
  authors: [{ name: "Aviral Mishra", url: "https://github.com/AviralNITW" }],
  creator: "Aviral Mishra",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-nitw.vercel.app",
    siteName: "Aviral Mishra Portfolio",
    title: "Aviral Mishra | Distributed Systems & Applied AI Engineer",
    description: "Architecting low-latency hybrid RAG, distributed event streaming, and sub-4ms vector inference.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviral Mishra | Distributed Systems & Applied AI Engineer",
    description: "Architecting low-latency hybrid RAG, distributed event streaming, and sub-4ms vector inference.",
    creator: "@AviralNITW",
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
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#050507] text-[#ededed] selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
