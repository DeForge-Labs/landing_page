"use client";
import Container from "./ui/container";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const placeholders = [
    "Create an AI Chatbot which teaches me to code",
    "Build an agent that summarizes my emails daily",
    "Make a bot that tracks competitor pricing",
    "Create an assistant that schedules meetings",
  ];

  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [clockAnimate, setClockAnimate] = useState(false);
  const [shockAnimate, setShockAnimate] = useState(false);

  useEffect(() => {
    const currentText = placeholders[placeholderIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCurrentPlaceholder(currentText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCurrentPlaceholder(currentText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
          }
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, placeholderIndex, placeholders]);

  useEffect(() => {
    const triggerClockAnimation = () => {
      setClockAnimate(true);
      setTimeout(() => setClockAnimate(false), 500);

      const nextDelay = 5000 + Math.random() * 10000;
      setTimeout(triggerClockAnimation, nextDelay);
    };

    const initialDelay = 1000 + Math.random() * 5000;
    const timeoutId = setTimeout(triggerClockAnimation, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const triggerShockAnimation = () => {
      setShockAnimate(true);
      setTimeout(() => setShockAnimate(false), 600);

      const nextDelay = 5000 + Math.random() * 10000;
      setTimeout(triggerShockAnimation, nextDelay);
    };

    const initialDelay = 1000 + Math.random() * 5000;
    const timeoutId = setTimeout(triggerShockAnimation, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="border-b border-dashed border-black/50 text-black">
      <Container className="flex gap-10 pt-12 flex-col pb-12 sm:pb-40 xl:flex-row justify-center !px-0">
        <div className="mt-5 xl:mt-20 flex flex-col items-center text-center gap-6 md:gap-8">
          <a
            href="https://www.producthunt.com/products/deforge-open-beta?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-deforge"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1007944&theme=dark&period=daily&t=1756041023938"
              alt="Deforge - Canva&#0032;for&#0032;AI&#0032;Agents | Product Hunt"
              style={{ width: "250px", height: "54px" }}
            />
          </a>
          <h1 className="text-2xl sm:text-5xl font-bold tracking-tighter max-w-3xl flex flex-col items-center">
            <span className="flex items-center">
              Automation in{" "}
              <Image
                src="/icons/stopwatch.png"
                alt="Logo"
                width={60}
                height={60}
                className="-mr-3 sm:-mr-1 -ml-2 sm:ml-1 scale-75 sm:scale-100"
                style={{
                  transform: clockAnimate ? "rotate(15deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              Minutes
            </span>{" "}
            <span className="flex items-center -mt-6 sm:-mt-1">
              Power
              <Image
                src="/icons/shock.png"
                alt="Logo"
                width={60}
                height={60}
                className="-mr-3 sm:-mr-1 -ml-2 sm:ml-0 scale-75 sm:scale-100"
                style={{
                  transform: shockAnimate
                    ? "translateY(-5px)"
                    : "translateY(0)",
                  transition:
                    "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                }}
              />
              without Limits
            </span>{" "}
          </h1>
          <p className="sm:text-base text-gray-600 max-w-xl -mt-6 text-sm">
            Build your own AI Agents without writing a single line of code.
            Simply chat to build your agent and deploy it in minutes.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <div className="relative sm:w-[600px] min-w-[360px]">
              <Textarea
                placeholder={currentPlaceholder}
                className="w-full border border-black/50 rounded-lg h-28 p-2 px-1"
                style={{ resize: "none", fontSize: "16px" }}
              />
              <Button
                className="absolute bottom-2 right-2 rounded-full p-4 !shadow-none before:!shadow-none"
                onClick={() => {}}
              >
                <ArrowUpRight />
              </Button>
            </div>

            <div className="flex sm:w-[600px] w-[360px] flex-col sm:flex-row  items-center gap-3">
              <Button
                className="flex-1 rounded-sm text-[10px] text-xs flex flex-col items-start whitespace-normal p-2 px-3"
                variant={"secondary"}
              >
                <div className="bg-background rounded-md shadow-sm">
                  <Image
                    src="/icons/Chat.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="-mr-1"
                  />
                </div>
                <div>Customer Support Agent</div>
                <div className="text-[10px] text-black/50 text-start -mt-1">
                  Spin up your own bot that can answer your customers about your
                  product
                </div>
              </Button>
              <Button
                className="flex-1 rounded-sm text-[10px] text-xs flex flex-col items-start  whitespace-normal p-2 px-3"
                variant={"secondary"}
              >
                <div className="bg-background rounded-md shadow-sm">
                  <Image
                    src="/icons/Suitcase.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="-mr-1"
                  />
                </div>
                <span>Automated Job Search</span>
                <span className="text-[10px] text-black/50 -mt-1 text-start">
                  Search for jobs based on your required job role and export
                  them to an excel sheet
                </span>
              </Button>
              <Button
                className="flex-1 rounded-sm text-[10px] text-xs flex flex-col items-start  whitespace-normal p-2 px-3"
                variant={"secondary"}
              >
                <div className="bg-background rounded-md shadow-sm">
                  <Image
                    src="/icons/Folder.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="-mr-1"
                  />
                </div>
                <span>Agent Library</span>
                <span className="text-[10px] text-black/50 -mt-1 text-start">
                  Use pre-built agents to get started and deploy simply by
                  filling a form
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
