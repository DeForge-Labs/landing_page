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
  description: "AI Agents in One Click",

  metadataBase: new URL("https://deforge.io"),

  openGraph: {
    title: "Deforge: AI Agents in One Click",
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
    title: "Deforge: AI Agents in One Click",
    description:
      "Build your own AI Agents without writing a single line of code. Simply chat to build your agent and deploy it in minutes.",
    images: ["/logo/Cover.jpg"],
    creator: "@Deforge_io",
  },

  other: {
    "application/ld+json": `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Deforge",
        "url": "https://deforge.io",
        "description": "AI Agents in One Click",
        "logo": "https://deforge.io/logo/logo-black.svg",
        "sameAs": [
          "https://x.com/Deforge_io",
          "https://twitter.com/Deforge_io",
        ]
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
