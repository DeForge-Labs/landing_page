"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import FlowContainer from "./FlowContainer";

export default function Header() {
  return (
    <section className="pt-12 md:pt-20 lg:pt-28  text-black">
      <div className="container flex flex-col items-center text-center gap-6 md:gap-8 mb-0">
        <div className="inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-sm">
          Introducing <span className="font-semibold">Deforge</span>
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
              window.open("https://app.youform.com/forms/dgj8cqyw", "_blank");
            }}
          >
            Join Waitlist
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
