"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { Button } from "../../ui/button";
import Container from "../../ui/container";

import NavButton from "./NavButton";

const navLinks = [
  {
    href: "/agents",
    label: "Agents",
    isExternal: false,
  },
  {
    href: "https://forum.deforge.io",
    label: "Forum",
    isExternal: true,
  },
  { href: "https://blogs.deforge.io", label: "Blog", isExternal: true },
  { href: "https://docs.deforge.io", label: "Docs", isExternal: true },
  { href: "/pricing", label: "Pricing", isExternal: false },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  const goToInternal = useCallback(
    (href) => {
      router.push(href);
      closeMenu();
    },
    [router, closeMenu],
  );

  const goToExternal = useCallback(
    (url) => {
      window.open(url, "_blank");
      closeMenu();
    },
    [closeMenu],
  );

  const handleClick = useCallback(
    (href, isExternal) => {
      isExternal ? goToExternal(href) : goToInternal(href);
    },
    [goToInternal, goToExternal],
  );

  return (
    <header className="sticky top-0 w-full border-b border-dashed border-black/50 bg-background z-99">
      <Container
        showGlow={false}
        visiblytl={false}
        visiblytr={false}
        className="flex h-16 items-center justify-between py-4"
      >
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

        <div className="flex items-center gap-4">
          <nav className="hidden gap-3 md:flex">
            {navLinks.map((link) => (
              <NavButton
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={(href) => handleClick(href, link.isExternal)}
                className="text-xs transition-colors bg-transparent text-black hover:bg-black/5 rounded-sm border-none"
              />
            ))}
          </nav>

          <div className="hidden md:flex h-4 w-px mr-2 bg-black/50"></div>

          <Button
            size="sm"
            onClick={() => goToExternal("https://app.deforge.io")}
            className="hidden md:flex text-xs rounded-sm p-2 px-3 shadow-md shadow-[#8754ff]"
          >
            Launch
          </Button>

          <Button
            size="sm"
            variant="icon"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden bg-transparent text-black hover:bg-secondary min-h-9 h-9"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden bg-background animate-in slide-in-from-top-4 duration-300 ease-out">
          <Container className="py-4 border-t">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  onClick={(href) => handleClick(href, link.isExternal)}
                  className="text-sm transition-colors bg-transparent text-black hover:bg-secondary justify-start rounded-sm p-2 px-3 border-black/50"
                />
              ))}

              <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                <Button
                  size="sm"
                  variant="icon"
                  aria-label="Deforge on X"
                  onClick={() => goToExternal("https://x.com/deforge_io")}
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
                  onClick={() => goToExternal("https://app.deforge.io")}
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
