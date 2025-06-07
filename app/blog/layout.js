import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";

export default function BlogLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <CTA />
    </div>
  );
}
