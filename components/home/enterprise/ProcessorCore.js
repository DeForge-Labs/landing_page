"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProcessorCore = ({ isActive = true }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-[24rem] h-[24rem] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,var(--background)_70%,var(--background)_100%)] z-90"></div>

        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4">
          {[...Array(9)].map((_, i) =>
            i === 4 ? (
              <div key={i} />
            ) : (
              <SystemNode
                key={i}
                position={i % 2 === 0 ? "corner" : "edge"}
                isActive={isActive}
                delay={i * 0.1}
              />
            )
          )}
        </div>

        <div className="absolute z-20 flex items-center justify-center">
          <motion.div
            animate={{
              boxShadow: isActive
                ? [
                    "0 0 60px -5px rgba(135, 84, 255, 0.5)",
                    "0 0 100px -5px rgba(135, 84, 255, 0.8)",
                  ]
                : "0 0 0px rgba(0,0,0,0)",
            }}
            transition={{
              boxShadow: {
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="relative rounded-[1.5rem] flex items-center justify-center transition-colors"
          >
            <div className="relative w-44 h-44 rounded-[1.5rem] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-600 dark:to-slate-800 shadow-xl overflow-hidden flex items-center justify-center border border-white/50">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.4)_45%,transparent_48%)] opacity-60" />

              <div className="relative w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-2xl shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center border border-slate-300 dark:border-slate-600">
                <motion.div
                  animate={{
                    boxShadow: isActive
                      ? "0 0 20px rgba(135, 84, 255, 0.6)"
                      : "none",
                  }}
                  className="relative w-[5.7rem] h-[5.7rem] bg-slate-900 dark:bg-black rounded-2xl flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src="/logo/logo-white.svg"
                    alt="Deforge"
                    width={50}
                    height={50}
                    className="z-10"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SystemNode = ({ position, isActive, delay }) => {
  const isCorner = position === "corner";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isActive ? 1 : 0.3,

        scale: isActive ? 1 : 0.95,
      }}
      transition={{ delay, duration: 0.8 }}
      className="relative rounded-[1rem] border backdrop-blur-sm bg-zinc-500/5 flex items-center justify-center overflow-hidden border-zinc-500/20"
    >
      <div
        className={`rounded-lg border border-zinc-500/20 transition-all duration-700

${isCorner ? "w-16 h-16 bg-zinc-500/5" : "w-12 h-12 bg-zinc-500/5"}

`}
      >
        {isActive && isCorner && (
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2, delay }}
              className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
