"use client";

import Container from "../../ui/container";

import HeaderTitle from "./HeaderTitle";
import ProductHuntBadge from "./ProductHuntBadge";

import { useRandomAnimation } from "@/hooks/useRandomAnimation";
import BagsBadge from "./BagsBadge";
import { Button } from "@/components/ui/button";
import NodeVisualizer from "@/components/NodeVisualizer";

const Header = () => {
  const clockAnimate = useRandomAnimation(500);
  const shockAnimate = useRandomAnimation(600);

  const goToExternal = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="border-b border-dashed border-black/50 text-black">
      <Container className="flex gap-10 pt-12 flex-col pb-12 sm:pb-20 justify-center px-0!">
        <div className="mt-5 xl:mt-20 flex flex-col items-center text-center gap-6 md:gap-8">
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
