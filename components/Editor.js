"use client";

import FlowContainer from "./FlowContainer";
import ChatbotNode from "./flowContainer/ChatbotNode";
import { Badge } from "./ui/badge";
import Container from "./ui/container";
import { motion } from "framer-motion";

export default function Editor() {
  return (
    <section
      id="use-cases"
      className="border-b border-dashed border-black/50 hidden sm:block"
    >
      <Container className="pt-20 pb-5 !px-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            top: "20%",
            left: "10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            bottom: "20%",
            right: "10%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            How it Works
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Save Time and Effort
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Simply type what capabilities you want your agent to have and let
            Deforge build it for you. Deployment is as simple as a click of a
            button.
          </p>
        </div>

        <div className="container !px-0">
          <div className="relative w-full lg:h-[600px] sm:h-[400px] h-[300px] rounded-lg xl:mt-0 lg:mt-4 md:mt-2 mt-4 p-2 sm:py-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-50"></div>
            <FlowContainer />
          </div>
        </div>
      </Container>
    </section>
  );
}
