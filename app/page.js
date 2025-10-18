import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";
import Editor from "@/components/Editor";
import Template from "@/components/Template";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        <Header />
        <Editor />
        <Features />
        <Template />
        <Reviews />
        <CTA />
      </main>
    </div>
  );
}
