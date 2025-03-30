import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import HowItWorks from "@/components/HowItWorks";
import Build from "@/components/Build";
import PricingSection from "@/components/Pricing";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
