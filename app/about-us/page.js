"use client";

import Teams from "@/components/about/Teams";
import Pricing from "@/components/about/Pricing";
import OurVision from "@/components/about/OurVision";
import GrowthCard from "@/components/about/GrowthCard";
import AboutHeader from "@/components/about/AboutHeader";
import AboutPreCTA from "@/components/about/AboutPreCTA";
import MediaSection from "@/components/about/MediaSection";

const AboutUsPage = () => {
  return (
    <main className="min-h-screen text-black font-sans">
      <AboutHeader />
      <OurVision />
      <MediaSection />
      <GrowthCard />
      <Teams />
      <Pricing />
      <AboutPreCTA />
    </main>
  );
};

export default AboutUsPage;
