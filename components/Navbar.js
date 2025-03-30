"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Use smooth scrolling behavior
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/logo-black.svg"
              alt="Logo"
              width={20}
              height={20}
            />
            <span className="font-bold inline-block text-xl">Deforge</span>
          </Link>
          <nav className="hidden gap-3 md:flex">
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => scrollToSection("use-cases")}
            >
              Use Cases
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              onPress={() => {
                window.open("https://app.youform.com/forms/dgj8cqyw", "_blank");
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
