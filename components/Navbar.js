"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function Navbar() {
  return (
    <header className="container z-40 bg-background text-black">
      <div className="flex h-20 items-center justify-between py-6">
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
              href="#features"
              size="sm"
              className="text-sm  transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
            >
              Features
            </Button>
            <Button
              href="#use-cases"
              size="sm"
              className="text-sm  transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
            >
              Use Cases
            </Button>
            <Button
              href="#how-it-works"
              size="sm"
              className="text-sm  transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
            >
              How It Works
            </Button>
            <Button
              href="#pricing"
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
            >
              Pricing
            </Button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm">Coming Soon</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
