"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { Button } from "../ui/button";
import Container from "../ui/container";

const navLinks = [
  { href: "/agents", label: "Agents", isExternal: false },
  { href: "https://blogs.deforge.io", label: "Blog", isExternal: true },
  { href: "https://docs.deforge.io", label: "Docs", isExternal: true },
  { href: "/pricing", label: "Pricing", isExternal: false },
];

const NavButton = ({
  href,
  label,
  onClick,
  className,
  isExternal,
  ...props
}) => {
  const isInternal = !isExternal && href.startsWith("/");

  if (isInternal) {
    return (
      <Button
        size="sm"
        variant={"secondary"}
        className={className}
        onClick={() => onClick(href)}
        {...props}
      >
        {label}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      variant={"secondary"}
      className={className}
      onClick={() => onClick(href)}
      {...props}
    >
      {label}
    </Button>
  );
};

const Navbar = () => {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = useCallback(
    (path) => {
      router.push(path);
      setIsMobileMenuOpen(false);
    },

    [router]
  );

  const handleExternalLink = useCallback((url) => {
    window.open(url, "_blank");
    setIsMobileMenuOpen(false);
  }, []);

  const handleLinkClick = useCallback(
    (href, isExternal) => {
      if (isExternal) {
        handleExternalLink(href);
      } else {
        handleNavigation(href);
      }
    },

    [handleExternalLink, handleNavigation]
  );

  return (
    <header className="sticky top-0 w-full border-b border-dashed border-black/50 bg-background z-20">
      <Container
        showGlow={false}
        visiblytl={false}
        visiblytr={false}
        className="flex h-16 items-center justify-between py-4"
      >
        <div className="flex gap-6 md:gap-10 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              priority
              width={20}
              height={20}
              alt="Deforge Logo"
              src="/logo/logo-black.svg"
            />

            <span className="font-bold inline-block text-xl">Deforge</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-3 md:flex">
            {navLinks.map((link) => (
              <NavButton
                key={link.label}
                href={link.href}
                label={link.label}
                variant={"secondary"}
                isExternal={link.isExternal}
                onClick={(href) => handleLinkClick(href, link.isExternal)}
                className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              />
            ))}
          </nav>

          <div className="hidden md:flex h-4 w-px mr-2 bg-black/50"></div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              size="sm"
              onClick={() => handleExternalLink("https://app.deforge.io")}
              className="text-xs rounded-sm p-2 px-3 shadow-md shadow-[#8754ff]"
            >
              Launch
            </Button>
          </div>

          <Button
            size="sm"
            variant="icon"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden bg-transparent text-black hover:bg-secondary min-h-9 h-9"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Container>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background animate-in slide-in-from-top-4 duration-300 ease-out">
          <Container className="py-4 border-t">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavButton
                  href={link.href}
                  label={link.label}
                  variant={"secondary"}
                  key={`mobile-${link.label}`}
                  isExternal={link.isExternal}
                  onClick={(href) => handleLinkClick(href, link.isExternal)}
                  className="text-sm transition-colors bg-transparent text-black hover:bg-secondary justify-start rounded-sm p-2 px-3 border-black/50"
                />
              ))}

              <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                <Button
                  size="sm"
                  variant="icon"
                  aria-label="Deforge on X (formerly Twitter)"
                  onClick={() => handleExternalLink("https://x.com/deforge_io")}
                  className="bg-background border-black border text-black min-w-5 rounded-sm p-2 px-3"
                >
                  <Image
                    src="/logo/x-logo.png"
                    alt="X Logo"
                    width={19}
                    height={19}
                  />
                </Button>

                <Button
                  size="sm"
                  className="flex-1 rounded-sm p-2 px-3"
                  onClick={() => handleExternalLink("https://app.deforge.io")}
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
};

export default Navbar;
