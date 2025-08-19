"use client";

import { Button } from "@heroui/react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Youtube } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-16 md:pt-20 bg-black text-primary-foreground">
      <div className="container text-center md:text-left flex md:flex-row flex-col items-center md:items-start justify-between relative pb-16 md:pb-56 md:gap-y-8 overflow-hidden gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Be Among the First to Experience Deforge
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mt-2">
            Deforge is now available for public beta. Try it out today and give
            us your feedback! Your feedback is invaluable to us as we continue
            to improve Deforge.
          </p>

          <Button
            size="lg"
            className=" bg-[var(--primary)] text-black w-fit mt-10 mb-5 md:mb-0"
            onPress={() => {
              window.open("https://app.deforge.io", "_blank");
            }}
          >
            Launch App
          </Button>
        </div>

        <div>
          <div className="flex sm:flex-row flex-col items-center gap-6">
            <div
              className="sf-root"
              data-id="3891961"
              data-badge="light-default"
              data-variant-id="sf"
              style={{ width: "125px" }}
            >
              <a
                href="https://sourceforge.net/software/product/Deforge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deforge Reviews
              </a>
            </div>
            <Script
              src="https://b.sf-syn.com/badge_js?sf_id=3891961&variant_id=sf"
              strategy="afterInteractive"
            />
          </div>
        </div>

        <div className="h-[20rem] md:flex items-center justify-center absolute -bottom-32 lg:-bottom-32 xl:-bottom-28 -left-[15rem] lg:-left-[10.5rem] xl:-left-[6.5rem] hidden">
          <TextHoverEffect text="Deforge" />
        </div>

        <div className="flex items-center gap-2 text-xs justify-center absolute bottom-4 md:right-4">
          <Link
            href="https://status.deforge.live/"
            className="underline"
            target="_blank"
          >
            Status
          </Link>
          <Link
            href="https://app.deforge.io/privacy"
            className="underline"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://app.deforge.io/ToS"
            className="underline"
            target="_blank"
          >
            Terms of Service
          </Link>

          <Link
            href="https://x.com/deforge_io"
            className=" h-6 w-6 bg-background rounded-full flex items-center justify-center"
            target="_blank"
          >
            <Image src="/logo/x-logo.png" alt="Logo" width={14} height={14} />
          </Link>
          <Link
            href="https://github.com/DeForge-Labs"
            className=" h-6 w-6 bg-background rounded-full flex items-center justify-center"
            target="_blank"
          >
            <Github className="h-4 text-black/50 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/deforgeio/"
            className=" h-6 w-6 bg-background rounded-full flex items-center justify-center"
            target="_blank"
          >
            <Linkedin className="h-4 text-black/50 w-4" />
          </Link>
          <Link
            href="https://www.youtube.com/@DeforgeIo"
            className=" h-6 w-6 bg-background rounded-full flex items-center justify-center"
            target="_blank"
          >
            <Youtube className="h-4 text-black/50 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
