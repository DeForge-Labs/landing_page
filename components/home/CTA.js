"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

import Container from "../ui/container";

const SOCIAL_LINKS = [
  {
    href: "mailto:contact@deforge.io",
    icon: <Mail className="h-4 w-4 text-black/50" />,
  },
  {
    href: "https://x.com/deforge_io",
    icon: (
      <Image
        src="/logo/x-logo.png"
        alt="X (formerly Twitter) Logo"
        width={14}
        height={14}
      />
    ),
  },
  {
    href: "https://github.com/DeForge-Labs",
    icon: <Github className="h-4 w-4 text-black/50" />,
  },
  {
    href: "https://www.linkedin.com/company/deforgeio/",
    icon: <Linkedin className="h-4 w-4 text-black/50" />,
  },
  {
    href: "https://www.youtube.com/@DeforgeIo",
    icon: <Youtube className="h-4 w-4 text-black/50" />,
  },
];

const CTA = () => {
  return (
    <footer className="bg-black text-primary-foreground relative overflow-hidden">
      <Container
        className="text-center md:text-left flex py-20! sm:px-20! px-4! flex-col items-center md:items-start justify-between relative pb-36 md:pb-56 md:gap-y-8 gap-6 border-white!"
        visiblytl={false}
        visiblytr={false}
        visiblybl={false}
        visiblybr={false}
        showGlow={false}
      >
        <div className="w-2 h-2 bg-white absolute -top-1 -left-[4.5px] rotate-45"></div>
        <div className="w-2 h-2 bg-white absolute -top-1 -right-[4.5px] rotate-45"></div>

        <Image
          alt="Deforge White Logo"
          width={400}
          height={400}
          src="/logo/logo-white.svg"
          className="absolute -bottom-1/2 right-1/2 translate-x-1/2 z-10 opacity-10"
        />

        <div className="w-full">
          <h2 className="text-2xl font-bold">AI Agents in One Click</h2>

          <p className="text-primary-foreground/80 text-xs mt-2">
            Deploy AI Agents using Forms in just a few clicks.
            <br /> No coding required.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-end gap-10 md:gap-0 mt-10 md:mt-0 z-50">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="h-6 w-6 bg-background rounded-sm flex items-center justify-center hover:underline"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            <p className="text-xs">
              © 2026 Deforge Corp. <br /> All rights reserved
            </p>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-2 items-start">
              <p className="text-xs font-bold">Company</p>

              <Link href="/about-us" className="text-xs hover:underline">
                About Us
              </Link>

              <Link href="/privacy" className="text-xs hover:underline">
                Privacy Policy
              </Link>

              <Link href="/ToS" className="text-xs hover:underline">
                Terms of Service
              </Link>

              <Link
                href="mailto:contact@deforge.io"
                className="text-xs hover:underline"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <p className="text-xs font-bold">Resources</p>

              <Link href="/pricing" className="text-xs hover:underline">
                Pricing
              </Link>

              <Link
                href="https://blogs.deforge.io"
                target="_blank"
                className="text-xs hover:underline"
              >
                Blog
              </Link>

              <Link
                href="https://docs.deforge.io"
                target="_blank"
                className="text-xs hover:underline"
              >
                Documentation
              </Link>

              <Link
                href="https://status.deforge.io"
                target="_blank"
                className="text-xs hover:underline"
              >
                Status
              </Link>

              <Link
                href="https://app.deforge.io/templates"
                target="_blank"
                className="text-xs hover:underline"
              >
                Agent Gallery
              </Link>
            </div>

            <div className="flex flex-col gap-2 items-start">
              <p className="text-xs font-bold">Social</p>
              <Link
                href="https://x.com/deforge_io"
                className="text-xs hover:underline"
                target="_blank"
              >
                X/Twitter
              </Link>

              <Link
                href="https://www.linkedin.com/company/deforgeio/"
                className="text-xs hover:underline"
                target="_blank"
              >
                LinkedIn
              </Link>

              <Link
                href="https://forum.deforge.io"
                className="text-xs hover:underline"
                target="_blank"
              >
                Forum
              </Link>

              <Link
                href="https://github.com/DeForge-Labs"
                className="text-xs hover:underline"
                target="_blank"
              >
                GitHub
              </Link>

              <Link
                href="https://www.youtube.com/@DeforgeIo"
                className="text-xs hover:underline"
                target="_blank"
              >
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default CTA;
