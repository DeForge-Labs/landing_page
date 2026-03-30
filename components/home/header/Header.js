"use client";

import Container from "../../ui/container";

import HeaderTitle from "./HeaderTitle";
import ProductHuntBadge from "./ProductHuntBadge";

import { useRandomAnimation } from "@/hooks/useRandomAnimation";
import BagsBadge from "./BagsBadge";
import { Button } from "@/components/ui/button";
import NodeVisualizer from "@/components/NodeVisualizer";
import Link from "next/link";

const Header = () => {
  const clockAnimate = useRandomAnimation(500);
  const shockAnimate = useRandomAnimation(600);

  const goToExternal = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="border-b border-dashed border-black/50 text-black">
      <Container className="flex gap-10 pt-0 flex-col pb-12 sm:pb-20 justify-center px-0!">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#DFE0E8_1.2px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="mt-10 xl:mt-20 flex flex-col items-center text-center gap-6 md:gap-8">
          <Link
            href="https://affiliate.deforge.io"
            target="_blank"
            className="text-xs font-medium p-1 border border-black/30 shadow-md bg-secondary/70 rounded-full px-3 flex items-center gap-2"
            aria-hidden
          >
            <div className="w-2 h-2 rounded-full bg-green-500">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            Refer us and earn rewards.
          </Link>

          <div className="flex gap-4 items-center sm:flex-row flex-col">
            <ProductHuntBadge />
            <BagsBadge />
          </div>

          <HeaderTitle
            clockAnimate={clockAnimate}
            shockAnimate={shockAnimate}
          />

          <p className="text-sm text-gray-600 max-w-lg -mt-6 px-4">
            Build your own AI Agents and Automations without writing a single
            line of code. Simply chat to build your agent and deploy it in
            minutes.
          </p>

          <div className="flex gap-3 justify-center items-center w-full">
            <Button
              size="sm"
              variant="outline"
              onClick={() => goToExternal("https://cal.com/deforge/sales")}
              className="text-sm rounded-sm p-2 px-3 border border-black/50"
            >
              Book a Demo
            </Button>
            <Button
              size="sm"
              onClick={() => goToExternal("https://app.deforge.io")}
              className="text-sm font-normal rounded-sm p-2 px-3 shadow-lg shadow-[#8754ff]"
            >
              Get Started for Free
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] -my-8 overflow-hidden rounded-xl">
          <NodeVisualizer />
        </div>
      </Container>
    </section>
  );
};

export default Header;
