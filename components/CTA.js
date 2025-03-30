import { Button } from "@heroui/react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function CTA() {
  return (
    <section className="pt-16 md:pt-20 bg-black text-primary-foreground">
      <div className="container text-center flex flex-col justify-center items-center relative gap-y-6 pb-56 md:gap-y-8 overflow-hidden">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Be Among the First to Experience Deforge
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
          Join our waitlist today and get early access when we launch. Plus,
          receive exclusive updates on our progress.
        </p>
        <Button size="lg" className="mt-4 bg-[var(--primary)] text-black w-fit">
          Join the Waitlist
        </Button>

        <div className="h-[20rem] flex items-center justify-center absolute -bottom-28">
          <TextHoverEffect text="Deforge" />
        </div>
      </div>
    </section>
  );
}
