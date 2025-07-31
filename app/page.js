import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import Build from "@/components/Build";
import PricingSection from "@/components/Pricing";
import CTA from "@/components/CTA";
import Forms from "@/components/Forms";
import CurvedLoop from "@/components/ui/curved-loop";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <main className="flex-1 relative">
        <Header />
        <Features />
        <UseCases />
        <Forms />
        <CurvedLoop />
        <Build />
        <PricingSection />
        <CTA />
      </main>
    </div>
  );
}
