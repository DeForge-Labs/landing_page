import { Lexend_Deca } from "next/font/google";

import "./globals.css";

import Script from "next/script";

import CTA from "@/components/home/CTA";
import Navbar from "@/components/home/navbar/Navbar";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "Deforge",
  description: "Build and Deploy AI Agents in Minutes",
  keywords: [
    "AI Agents",
    "No-Code AI",
    "Build AI Assistant",
    "AI Workflows",
    "Automation",
    "Deforge",
    "Deploy AI",
  ],
  authors: [{ name: "Deforge Team" }],
  creator: "Deforge",

  metadataBase: new URL("https://deforge.io"),
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Deforge: Build and Deploy AI Agents in Minutes",
    description:
      "Build your own AI Agents without writing a single line of code. Simply chat to build your agent and deploy it in minutes.",
    url: "https://deforge.io",
    siteName: "Deforge",
    type: "website",
    images: [
      {
        url: "/logo/Cover.jpg",
        width: 1200,
        height: 675,
        alt: "Deforge Social Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deforge: Build and Deploy AI Agents in Minutes",
    description:
      "Build your own AI Agents without writing a single line of code. Simply chat to build your agent and deploy it in minutes.",
    images: ["/logo/Cover.jpg"],
    creator: "@Deforge_io",
  },

  other: {
    "application/ld+json": `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Deforge",
        "url": "https://deforge.io",
        "description": "Build and Deploy AI Agents in Minutes without writing a single line of code.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Deforge",
          "url": "https://deforge.io",
          "logo": "https://deforge.io/logo/logo-black.svg",
          "sameAs": [
            "https://x.com/Deforge_io",
            "https://twitter.com/Deforge_io"
          ]
        }
      }
    </script>`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>

      <body
        className={`${lexendDeca.className} antialiased overflow-x-hidden light`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <CTA />
      </body>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
