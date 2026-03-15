import Teams from "@/components/about/Teams";
import OurVision from "@/components/about/OurVision";
import AboutHeader from "@/components/about/AboutHeader";
import AboutPreCTA from "@/components/about/AboutPreCTA";
import MediaSection from "@/components/about/MediaSection";

export const metadata = {
  title: "About Deforge | The Team Behind AI Agent Automation",
  description:
    "AI Agents and the mission of Deforge. Meet the team building the future of no-code automation and learn about our vision for decentralized workflows.",
  keywords: [
    "About Deforge",
    "AI Agents Founders",
    "No-code AI Vision",
    "Deforge Team",
    "Anoy Roy Chowdhury",
    "Shamba Chowdhury",
    "Gautam Raj",
  ],
  alternates: {
    canonical: "https://deforge.io/about",
  },
  openGraph: {
    title: "About Deforge | The Team Behind AI Agent Automation",
    description:
      "Meet the team building the future of no-code AI Agents and automations.",
    url: "https://deforge.io/about",
    siteName: "Deforge",
    images: [
      {
        url: "/logo/Cover.jpg",
        width: 1200,
        height: 675,
        alt: "About Deforge Team",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Deforge | AI Agent Automation",
    description: "Meet the founders and team behind Deforge.",
    images: ["/logo/Cover.jpg"],
  },
};

const AboutUsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Deforge",
      url: "https://deforge.io",
      logo: "https://deforge.io/logo/logo-black.svg",
      founder: [
        {
          "@type": "Person",
          name: "Anoy Roy Chowdhury",
          jobTitle: "Co-founder & CEO",
        },
        {
          "@type": "Person",
          name: "Shamba Chowdhury",
          jobTitle: "Co-founder & CTO",
        },
        {
          "@type": "Person",
          name: "Gautam Raj",
          jobTitle: "Founding Engineer",
        },
      ],
      description:
        "Deforge is a leading no-code platform for building and deploying AI Agents and automations.",
    },
  };

  return (
    <main className="min-h-screen text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutHeader />
      <OurVision />
      <MediaSection />
      <Teams />
      <AboutPreCTA />
    </main>
  );
};

export default AboutUsPage;
