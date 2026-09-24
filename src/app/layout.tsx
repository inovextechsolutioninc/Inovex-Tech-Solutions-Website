import type { Metadata } from "next";
import { Inter, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const barlow = Barlow_Condensed({ 
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow" 
});
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  title: "Inovex Tech Solutions | AI-Native Systems That Do The Work",
  description: "Inovex Tech builds intelligent automation, custom AI models & scalable systems—then wires them into the CRM, website and operations you already run.",
  openGraph: {
    title: "Inovex Tech Solutions",
    description: "AI-Native Technology Solutions and Automation",
    url: "https://inovextech.com",
    siteName: "Inovex Tech Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://inovextech.com",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Inovex Tech Solutions",
  "url": "https://inovextech.com",
  "logo": "https://inovextech.com/logo.png",
  "description": "AI-native development and automation agency building intelligent systems for businesses that want to grow without adding headcount.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service"
  },
  "knowsAbout": [
    "AI Automation",
    "Large Language Models",
    "Retrieval Augmented Generation",
    "Custom AI Chatbots",
    "Next.js Development"
  ]
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${barlow.variable} ${jetbrains.variable} font-sans antialiased bg-brand-bg text-gray-200 flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow pt-20">
          {children}
        </div>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
