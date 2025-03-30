import { Check } from "lucide-react";
import Image from "next/image";

export default function Build() {
  return (
    <div className="container rounded-lg border bg-background p-6 mb-12 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 items-center">
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold">
            Built for Everyone
          </h3>
          <p className="text-muted-foreground">
            Whether you're a business owner, marketer, developer, or AI
            enthusiast, Deforge makes creating AI agents accessible to everyone.
          </p>
          <ul className="space-y-2">
            {[
              "No coding experience required",
              "Intuitive visual interface",
              "Pre-built templates to get started quickly",
              "Detailed documentation and tutorials",
              "Active community support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-muted aspect-video items-center hidden md:flex justify-end">
          <Image src="/logo/Deforge.png" alt="Build" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
