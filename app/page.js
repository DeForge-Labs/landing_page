import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import UseCases from "@/components/Usecase";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        <Header />
        <Editor />
        <Features />
        <Reviews />
        <CTA />
      </main>
    </div>
  );
}
