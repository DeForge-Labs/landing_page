"use client";

import Image from "next/image";
import Container from "./ui/container";
import { Button } from "./ui/button";

export default function PreCTA() {
  return (
    <section
      id="pre-cta"
      className="bg-gradient-to-t from-[#ebe4ff] to-background"
    >
      <Container
        className="flex flex-col gap-4 py-12 sm:!py-20 !px-4 items-center"
        showGlow={false}
      >
        <div className="p-4 bg-black shadow-lg shadow-[#8754ff] w-fit rounded-3xl opacity-80">
          <Image
            src="/logo/logo-white.svg"
            alt="Deforge"
            width={50}
            height={50}
          />
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Less Chaos, More Control
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Integrate Apps, automate workflows, and boost productivity with
            Deforge.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            size="lg"
            className="gap-2 border border-black w-40 py-4"
            variant="outline"
            onClick={() => {}}
          >
            Browse Agents
          </Button>

          <Button
            size="lg"
            className="gap-2 text-background bg-black/80 py-4 w-40"
            onClick={() => {
              window.open("https://app.deforge.io", "_blank");
            }}
          >
            Launch App
          </Button>
        </div>
      </Container>
    </section>
  );
}
