import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import HowItWorks from "@/components/HowItWorks";
import Build from "@/components/Build";
import PricingSection from "@/components/Pricing";
import CTA from "@/components/CTA";
import { StickyBanner } from "@/components/ui/sticky-banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyBanner className="bg-dark min-h-10">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-sm text-center py-2">
          Introducing <span className="font-semibold">Deforge Forms</span>, a
          user-friendly interface for your AI agent.
        </p>
      </StickyBanner>
      <Navbar />
      <main className="flex-1">
        <Header />
        <Features />
        <UseCases />
        <HowItWorks />
        <Build />
        <PricingSection />
        <CTA />
      </main>
    </div>
  );
}
