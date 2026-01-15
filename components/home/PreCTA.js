"use client";

import Image from "next/image";

import { Button } from "../ui/button";
import Container from "../ui/container";

const PreCTA = () => {
  const handleLaunch = () => {
    window.open("https://app.deforge.io", "_blank");
  };

  const handleBrowse = () => {
    window.open("https://app.deforge.io/templates", "_blank");
  };

  return (
    <section
      id="pre-cta"
      className="bg-linear-to-t from-[#ebe4ff] to-background"
    >
      <Container
        className="flex flex-col gap-4 py-12 sm:py-20! px-4! items-center"
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
            variant="outline"
            className="w-40 py-4 gap-2 border border-black"
            onClick={handleBrowse}
          >
            Browse Agents
          </Button>

          <Button
            size="lg"
            onClick={handleLaunch}
            className="w-40 py-4 gap-2 text-background bg-black/80"
          >
            Launch App
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PreCTA;
