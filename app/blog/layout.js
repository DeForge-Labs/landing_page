import Navbar from "@/components/home/Navbar";
import CTA from "@/components/home/CTA";

export default function BlogLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <CTA />
    </div>
  );
}
