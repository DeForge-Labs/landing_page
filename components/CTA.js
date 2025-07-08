"use client";

import { Button } from "@heroui/react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function CTA() {
  return (
    <section className="pt-16 md:pt-20 bg-black text-primary-foreground">
      <div className="container text-center flex flex-col justify-center items-center relative gap-y-6 pb-16 md:pb-56 md:gap-y-8 overflow-hidden">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Be Among the First to Experience Deforge
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
          Join our waitlist today and get early access when we launch. Plus,
          receive exclusive updates on our progress.
        </p>

        <div className="flex sm:flex-row flex-col items-center gap-6 mt-4">
          <a href="https://dang.ai/" target="_blank">
            <img
              src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
              alt="Dang.ai"
              style={{
                width: "150px",
                height: "56px",
              }}
              width="150"
              height="56"
            />
          </a>

          <a
            href="https://startupfa.me/s/deforge?utm_source=deforge.io"
            target="_blank"
          >
            <img
              src="https://startupfa.me/badges/featured-badge.webp"
              alt="Featured on Startup Fame"
              width="171"
              height="54"
            />
          </a>
        </div>

        <Button
          size="lg"
          className=" bg-[var(--primary)] text-black w-fit"
          onPress={() => {
            window.open("https://app.youform.com/forms/dgj8cqyw", "_blank");
          }}
        >
          Join the Waitlist
        </Button>

        <div className="h-[20rem] md:flex items-center justify-center absolute -bottom-28 hidden">
          <TextHoverEffect text="Deforge" />
        </div>
      </div>
    </section>
  );
}
