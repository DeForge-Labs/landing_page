"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const StickyScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 75%"], // Changed offset to trigger at center
  });

  const items = [
    {
      title: "Design Your Flow",
      description:
        "Drag and drop nodes onto the canvas to create your agent's workflow. Connect inputs, processing steps, and outputs visually.",
    },
    {
      title: "Configure Components",
      description:
        "Customize each node with simple configuration options. Choose AI models, set parameters, and define logic without writing code.",
    },
    {
      title: "Deploy & Share",
      description:
        "Test your agent in real-time, then deploy with one click. Share via API, embed on your website, or integrate with your existing tools.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div ref={containerRef} className="relative min-h-screen w-full">
        <div className="flex lg:flex-row flex-col 2xl:gap-20">
          {/* Sticky section */}
          <div className="lg:sticky top-[250px] lg:h-[430px]">
            <div className="rounded-lg p-8 pl-0 h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-6">How it works</h2>
              <p className="text-gray-600 text-2xl">
                Build powerful AI agents in minutes, not months. Focus on what
                you do best.
              </p>
            </div>
          </div>
          {/* Scrolling section */}
          <div className="py-32 pt-0">
            {items.map((item, index) => {
              const padding = -0.3; // Padding to delay the start
              const itemStart = padding + index / items.length;
              const itemEnd = padding + (index + 1) / items.length;
              const opacity = useTransform(
                scrollYProgress,
                [itemStart, itemEnd],
                [0, 1]
              );
              return (
                <motion.div
                  key={index}
                  style={{ opacity }}
                  className="rounded-lg py-8 lg:pl-32"
                >
                  <div className="flex flex-col gap-y-4 border border-[var(--secondary)] hover:shadow-sm p-7 rounded-3xl">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary md:mx-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>

                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-xl">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
