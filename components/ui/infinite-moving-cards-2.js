"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards2 = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef();
  const scrollerRef = React.useRef();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl px-4 py-6 md:w-[450px]"
          >
            <blockquote className="h-full">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="rounded-lg border border-black/50 bg-background  flex flex-col justify-between h-full gap-4  p-6 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground italic">
                    "{item.description}"
                  </p>
                </div>

                <div className="flex text-black items-center gap-2">
                  {item.platform === "Product Hunt" && (
                    <>
                      <Image
                        src="/testimonials/ProductHunt.svg"
                        alt="Product Hunt"
                        width={20}
                        height={20}
                      />
                      <h3 className="font-medium text-sm">Product Hunt</h3>
                    </>
                  )}

                  {item.platform === "Reddit" && (
                    <>
                      <Image
                        src="/testimonials/reddit.png"
                        alt="Reddit"
                        width={20}
                        height={20}
                      />
                      <h3 className="font-medium text-sm">Reddit</h3>
                    </>
                  )}

                  {item.platform === "Twitter" && (
                    <>
                      <Image
                        src="/testimonials/x-logo.png"
                        alt="Twitter"
                        width={20}
                        height={20}
                      />
                      <h3 className="font-medium text-sm">X/Twitter</h3>
                    </>
                  )}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
