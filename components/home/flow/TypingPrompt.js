"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TypingPrompt({ typedText, isComplete }) {
  const measureRef = useRef(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [typedText]);

  return (
    <motion.div
      className="w-full max-w-2xl mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label className="text-sm font-medium text-foreground mb-3 block">
        Describe your AI workflow:
      </label>

      <div className="relative">
        <input
          readOnly
          value={typedText}
          className="w-full px-4 py-3 border border-black/50 rounded-lg bg-card text-foreground shadow-sm"
          placeholder="Type your prompt..."
        />

        <span
          ref={measureRef}
          className="absolute top-0 left-0 invisible whitespace-pre px-4 py-3"
        >
          {typedText}
        </span>

        {!isComplete && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-500"
            style={{ left: `${width - 4}px` }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}
