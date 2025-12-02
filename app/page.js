import CTA from "@/components/home/CTA";
// import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Editor from "@/components/Editor";
import PreCTA from "@/components/home/PreCTA";
import Reviews from "@/components/Reviews";
import Features from "@/components/home/features/Features";
import Template from "@/components/home/templates/Template";
import Editor from "@/components/home/flow/Editor";
import Header from "@/components/home/header/Header";
import Navbar from "@/components/home/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 relative">
        <Header />
        <Features />
        <Editor />
        <Template />
        <Reviews />
        <PreCTA />
        <CTA />
      </main>
    </div>
  );
}
