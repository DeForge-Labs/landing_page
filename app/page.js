import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Header />
        <Features />
        <UseCases />
        <HowItWorks />
      </main>
    </div>
  );
}
