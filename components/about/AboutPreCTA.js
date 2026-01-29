import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import Container from "../ui/container";

const AboutPreCTA = () => {
  return (
    <section className="bg-linear-to-t from-[#ebe4ff] to-background">
      <Container
        className="flex flex-col gap-8 py-12 sm:py-20! px-4! items-center text-center"
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

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Ready to Build Your AI Agent?
          </h2>

          <p className="text-muted-foreground text-sm max-w-2xl mx-auto mt-2">
            Join us to build powerful AI agents without writing a single line of
            code.
          </p>
        </div>

        <Link href="https://deforge.io">
          <Button
            size="lg"
            className="w-40 py-4 gap-2 text-background bg-black/80"
          >
            Get Started Today
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default AboutPreCTA;
