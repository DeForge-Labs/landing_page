"use client";

import { useState, useEffect } from "react";

export const useRandomAnimation = (duration = 600, min = 5000, max = 15000) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setActive(true);
      setTimeout(() => setActive(false), duration);

      const next = min + Math.random() * (max - min);
      setTimeout(trigger, next);
    };

    const initial = 1000 + Math.random() * 5000;
    const timeout = setTimeout(trigger, initial);

    return () => clearTimeout(timeout);
  }, [duration, min, max]);

  return active;
};
