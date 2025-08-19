"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Use smooth scrolling behavior
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for navbar height
        behavior: "smooth",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[99] w-full border-b border-black/50 bg-background">
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

          {/* Desktop Navigation */}
          <nav className="hidden gap-3 md:flex">
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  router.push("/");
                }
                scrollToSection("features");
              }}
            >
              Features
            </Button>

            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onPress={() => router.push("/agents")}
            >
              Agents
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onPress={() => router.push("/blog")}
            >
              Blog
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onPress={() => {
                window.open("https://docs.deforge.io", "_blank");
              }}
            >
              Docs
            </Button>
            <Button
              size="sm"
              className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)]"
              onClick={() => {
                if (window.location.pathname !== "/") {
                  router.push("/");
                }
                scrollToSection("pricing");
              }}
            >
              Pricing
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              variant="icon"
              onPress={() => {
                window.open("https://x.com/deforge_io", "_blank");
              }}
              className="bg-background border-black border text-black min-w-5 h-[2.07rem]"
            >
              <Image src="/logo/x-logo.png" alt="Logo" width={15} height={15} />
            </Button>
            <Button
              size="sm"
              className="min-h-9 h-9"
              onPress={() => {
                window.open("https://app.deforge.io", "_blank");
              }}
            >
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="sm"
            variant="icon"
            className="md:hidden bg-transparent text-black hover:bg-[var(--secondary)] min-h-9 h-9"
            onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4">
            <nav className="flex flex-col gap-2">
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    router.push("/");
                  }
                  scrollToSection("features");
                }}
              >
                Features
              </Button>
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start"
                onPress={() => handleNavigation("/agents")}
              >
                Agents
              </Button>

              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start"
                onPress={() => handleNavigation("/blog")}
              >
                Blog
              </Button>
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start"
                onPress={() => handleExternalLink("https://docs.deforge.io")}
              >
                Docs
              </Button>
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    router.push("/");
                  }
                  scrollToSection("pricing");
                }}
              >
                Pricing
              </Button>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/40">
                <Button
                  size="sm"
                  variant="icon"
                  onPress={() => handleExternalLink("https://x.com/deforge_io")}
                  className="bg-background border-black border text-black min-w-5"
                >
                  <Image
                    src="/logo/x-logo.png"
                    alt="Logo"
                    width={19}
                    height={19}
                  />
                </Button>
                <Button
                  size="sm"
                  onPress={() =>
                    handleExternalLink("https://app.youform.com/forms/dgj8cqyw")
                  }
                  className="flex-1"
                >
                  Join Waitlist
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
