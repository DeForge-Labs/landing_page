"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./ui/container";
import { Button } from "./ui/button";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full border-b border-dashed border-black/50 bg-background z-[99]">
      <Container
        className="flex h-16 items-center justify-between py-4"
        visiblytl={false}
        visiblytr={false}
        showGlow={false}
      >
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
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-3 md:flex">
            <Button
              size="sm"
              className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              variant={"secondary"}
              onClick={() => router.push("/agents")}
            >
              Agents
            </Button>
            <Button
              size="sm"
              className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              variant={"secondary"}
              onClick={() => router.push("/blog")}
            >
              Blog
            </Button>
            <Button
              size="sm"
              className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              variant={"secondary"}
              onClick={() => {
                window.open("https://docs.deforge.io", "_blank");
              }}
            >
              Docs
            </Button>
            <Button
              size="sm"
              className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              variant={"secondary"}
              onClick={() => handleNavigation("pricing")}
            >
              Pricing
            </Button>
          </nav>

          <div className="hidden md:flex h-4 w-[1px] mr-2 bg-black/50"></div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              className="text-xs rounded-sm p-2 px-3 !shadow-md !shadow-[#8754ff]"
              onClick={() => {
                window.open("https://app.deforge.io", "_blank");
              }}
            >
              Launch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            size="sm"
            variant="icon"
            className="md:hidden bg-transparent text-black hover:bg-[var(--secondary)] min-h-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background">
          <Container className="py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start rounded-sm p-2 px-3 border-black/50"
                variant={"secondary"}
                onClick={() => handleNavigation("/agents")}
              >
                Agents
              </Button>

              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start rounded-sm p-2 px-3 border-black/50"
                variant={"secondary"}
                onClick={() => handleNavigation("/blog")}
              >
                Blog
              </Button>
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start rounded-sm p-2 px-3 border-black/50"
                variant={"secondary"}
                onClick={() => handleExternalLink("https://docs.deforge.io")}
              >
                Docs
              </Button>
              <Button
                size="sm"
                className="text-sm transition-colors bg-transparent text-black hover:bg-[var(--secondary)] justify-start rounded-sm p-2 px-3 border-black/50"
                variant={"secondary"}
                onClick={() => handleNavigation("pricing")}
              >
                Pricing
              </Button>

              {/* Mobile Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                <Button
                  size="sm"
                  variant="icon"
                  onClick={() => handleExternalLink("https://x.com/deforge_io")}
                  className="bg-background border-black border text-black min-w-5 rounded-sm p-2 px-3"
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
                  onClick={() => handleExternalLink("https://app.deforge.io")}
                  className="flex-1 rounded-sm p-2 px-3"
                >
                  Launch App
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
