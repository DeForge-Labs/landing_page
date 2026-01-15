import CTA from "@/components/home/CTA";
import PreCTA from "@/components/home/PreCTA";
import Reviews from "@/components/Reviews";
import Features from "@/components/home/features/Features";
import Template from "@/components/home/templates/Template";
import Editor from "@/components/home/flow/Editor";
import Header from "@/components/home/header/Header";
import Navbar from "@/components/home/navbar/Navbar";
import Enterprise from "@/components/home/Enterprise";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 relative">
        <Header />
        <Features />
        <Editor />
        <Template />
        <Enterprise />
        <Reviews />
        <PreCTA />
        <CTA />
      </main>
    </div>
  );
}
