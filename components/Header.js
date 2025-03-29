"use client";

import { Button } from "@heroui/react";
import NodeVisualizer from "./NodeVisualizer";

export default function Header() {
  return (
    <section className="py-12 md:py-20 lg:py-28 text-black">
      <div className="container flex flex-col items-center text-center space-y-6 md:space-y-8">
        <div className="inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-sm">
          Introducing <span className="font-semibold">Deforge</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          Build AI Agents Visually,{" "}
          <span className="text-black">No Code Required</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
          Create, connect, and deploy powerful AI agents with our intuitive
          node-based interface. From simple automations to blockchain
          integrations, all without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
          <Button
            size="lg"
            className="gap-2 border border-[black]"
            variant="outline"
          >
            Coming Soon
          </Button>
        </div>
      </div>

      <div className="container ">
        <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg bg-background p-2 md:p-4 overflow-hidden">
          <NodeVisualizer />
        </div>
      </div>
    </section>
  );
}
