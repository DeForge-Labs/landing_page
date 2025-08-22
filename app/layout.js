import { Lexend_Deca } from "next/font/google";

import "./globals.css";

import UiProvider from "@/providers/UiProvider";

import Script from "next/script";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "Deforge.io",
  description: "Build AI Agents Visually, No Code Required",

  metadataBase: new URL("https://deforge.io"),

  openGraph: {
    title: "Deforge.io: Build AI Agents Visually, No Code Required",
    description:
      "Create, connect, and deploy powerful AI agents with our intuitive node-based interface. From simple automations to blockchain integrations, all without writing a single line of code.",
    url: "https://deforge.io",
    siteName: "Deforge.io",
    type: "website",
    images: [
      {
        url: "/logo/Cover.png",
        width: 1200,
        height: 675,
        alt: "Deforge.io Social Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deforge.io: Build AI Agents Visually, No Code Required",
    description:
      "Create, connect, and deploy powerful AI agents with our intuitive node-based interface. From simple automations to blockchain integrations, all without writing a single line of code.",
    images: ["/logo/Cover.png"],
    creator: "@Deforge_io",
  },

  other: {
    "application/ld+json": `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Deforge",
        "url": "https://deforge.io",
        "description": "Build AI Agents Visually, No Code Required",
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
        className={`${lexendDeca.className} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <UiProvider>{children}</UiProvider>
      </body>

      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
