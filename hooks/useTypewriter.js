"use client";

import { useState, useEffect } from "react";

export const useTypewriter = (
  texts,
  speed = 50,
  deleteSpeed = 30,
  delay = 2000
) => {
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < fullText.length) {
            setCurrentText(fullText.slice(0, charIndex + 1));
            setCharIndex((i) => i + 1);
          } else {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(fullText.slice(0, charIndex - 1));
            setCharIndex((i) => i - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  return currentText;
};
