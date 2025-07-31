import { Check } from "lucide-react";
import VideoModal from "./VideoModal";
import Image from "next/image";

export default function Build() {
  return (
    <div className="container bg-background pt-24 relative z-50">
      <div className="rounded-lg border border-black/50 bg-background p-2 py-12 sm:p-6 sm:py-12 mb-12 md:p-8 md:py-16 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Built for Everyone
            </h3>
            <p className="text-muted-foreground">
              Whether you're a business owner, marketer, developer, or AI
              enthusiast, Deforge makes creating AI agents accessible to
              everyone.
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

          <div className="rounded-lg border-black p-4 aspect-video flex items-center justify-center relative overflow-hidden border">
            <Image
              src="/Thumbnail.png"
              alt="Thumbnail"
              fill
              className="absolute top-0 left-0 object-cover opacity-80"
            />
            <div className="text-center z-10">
              <VideoModal
                videoId="lDc1p_yoWmQ"
                title="Introducing Deforge - A Node Based AI Agent Builder"
              >
                <div className="w-16 h-16 rounded-full bg-white/70 flex items-center justify-center mx-auto cursor-pointer hover:bg-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </VideoModal>
              <div className="mt-4 p-1 px-2 rounded-full bg-black">
                <p className="text-white text-xs">Watch how it works</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
