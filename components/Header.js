"use client";

import { Button } from "@heroui/react";
import FlowContainer from "./FlowContainer";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <section className="pt-12 md:pt-20 lg:pt-20 text-black">
      <div className="container flex flex-col items-center text-center gap-6 md:gap-8 mb-0">
        <a
          href="https://www.producthunt.com/products/deforge-open-beta?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-deforge&#0045;open&#0045;beta"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1007944&theme=dark&t=1755895465760"
            alt="Deforge&#0032;&#0045;&#0032;Open&#0032;Beta - Canva&#0032;for&#0032;AI&#0032;Agents | Product Hunt"
            style={{ width: "250px", height: "54px" }}
          />
        </a>
        <div className="inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-sm">
          Deforge is now available in{" "}
          <span className="font-semibold">Open beta</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          Build AI Agents Visually,{" "}
          <span className="text-black">No Code Required</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl -mt-3">
          Create, connect, and deploy powerful AI agents with our intuitive
          node-based interface. From simple automations to blockchain
          integrations, all without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="gap-2 border border-[black]"
            variant="outline"
            onPress={() => {
              router.push("/agents");
            }}
          >
            Browse Agents
          </Button>

          <Button
            size="lg"
            className="gap-2 text-background bg-black/80 px-7"
            onPress={() => {
              window.open("https://app.deforge.io", "_blank");
            }}
          >
            Launch App
          </Button>
        </div>
      </div>

      <div className="container sm:px-[32px] px-0">
        <div className="relative w-full xl:h-[700px] lg:h-[600px] sm:h-[400px] h-[300px] rounded-lg xl:mt-0 lg:mt-4 md:mt-2 mt-4 p-2 md:p-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-50"></div>
          <FlowContainer />
        </div>
      </div>
    </section>
  );
}
