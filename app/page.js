import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import Build from "@/components/Build";
import CTA from "@/components/CTA";
import CurvedLoop from "@/components/ui/curved-loop";
import Reviews from "@/components/Reviews";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        <Header />
        <CurvedLoop />
        <Editor />
        <Features />
        <UseCases />
        <Reviews />
        <Build />
        <CTA />
      </main>
    </div>
  );
}
