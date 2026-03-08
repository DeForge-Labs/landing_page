"use client";

import Container from "../../ui/container";

import HeaderTitle from "./HeaderTitle";
import HeaderInput from "./HeaderInput";
import ProductHuntBadge from "./ProductHuntBadge";
import HeaderShowcaseButtons from "./HeaderShowcaseButtons";

import { useTypewriter } from "@/hooks/useTypewriter";
import { useRandomAnimation } from "@/hooks/useRandomAnimation";
import BagsBadge from "./BagsBadge";

const HEADER_PLACEHOLDERS = [
  "Create an AI Chatbot which teaches me to code",
  "Build an agent that summarizes my emails daily",
  "Make a bot that tracks competitor pricing",
  "Create an assistant that schedules meetings",
];

const Header = () => {
  const clockAnimate = useRandomAnimation(500);
  const shockAnimate = useRandomAnimation(600);

  const placeholder = useTypewriter(HEADER_PLACEHOLDERS);

  return (
    <section className="border-b border-dashed border-black/50 text-black">
      <Container className="flex gap-10 pt-12 flex-col pb-12 sm:pb-40 xl:flex-row justify-center px-4! sm:px-0!">
        <div className="mt-5 xl:mt-20 flex flex-col items-center text-center gap-6 md:gap-8">
          <div className="flex gap-4 items-center sm:flex-row flex-col">
            <ProductHuntBadge />
            <BagsBadge />
          </div>

          <HeaderTitle
            clockAnimate={clockAnimate}
            shockAnimate={shockAnimate}
          />

          <p className="text-sm text-gray-600 max-w-lg -mt-6">
            Build your own AI Agents without writing a single line of code.
            Simply chat to build your agent and deploy it in minutes.
          </p>

          <div className="flex flex-col gap-3 items-center w-full">
            <HeaderInput placeholder={placeholder} />

            <HeaderShowcaseButtons />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
