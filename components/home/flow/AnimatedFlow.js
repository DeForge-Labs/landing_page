"use client";

import ReactFlow, { useReactFlow } from "reactflow";
import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "reactflow/dist/style.css";

import {
  BREAKPOINTS,
  PROMPT_TEXT,
  TYPING_SPEED,
  STEP_DURATION,
  COOLDOWN_DURATION,
} from "./constants";
import TypingPrompt from "./TypingPrompt";
import { getAnimationSteps } from "./getAnimationSteps";
import { getResponsiveNodePositions } from "./getNodePositions";

import KbNode from "../../flowContainer/KbNode";
import OpenAINode from "../../flowContainer/OpenAINode";
import ChatbotNode from "../../flowContainer/ChatbotNode";
import ChatbotResponse from "../../flowContainer/ChatbotResponse";

const nodeTypes = {
  chatbotNode: ChatbotNode,
  kbNode: KbNode,
  openaiNode: OpenAINode,
  chatbotResponse: ChatbotResponse,
};

export default function AnimatedFlow() {
  const flow = useReactFlow();

  const [width, setWidth] = useState(1024);
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [visibleEdges, setVisibleEdges] = useState([]);

  const [typedText, setTypedText] = useState("");
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("typing");

  const nodes = useMemo(() => getResponsiveNodePositions(width), [width]);

  const edges = useMemo(() => {
    const stroke = width < BREAKPOINTS.mobile ? 2 : 1;

    return [
      {
        id: "1-3",
        source: "1",
        sourceHandle: "output-Message-text",
        target: "3",
        targetHandle: "input-Query-text",
        animated: true,
        style: { stroke: "#1d1f26", strokeWidth: stroke },
        markerEnd: { type: "arrowclosed", color: "#1d1f26" },
      },

      {
        id: "2-3",
        source: "2",
        sourceHandle: "output-RAG-RAG",
        target: "3",
        targetHandle: "input-Knowledge Base-RAG",
        animated: true,
        style: { stroke: "#1d1f26", strokeWidth: stroke },
        markerEnd: { type: "arrowclosed", color: "#1d1f26" },
      },

      {
        id: "3-4",
        source: "3",
        sourceHandle: "output-Message-text",
        target: "4",
        animated: true,
        style: { stroke: "#1d1f26", strokeWidth: stroke },
        markerEnd: { type: "arrowclosed", color: "#1d1f26" },
      },
    ];
  }, [width]);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (typedText.length < PROMPT_TEXT.length) {
        timer = setTimeout(
          () => setTypedText((t) => t + PROMPT_TEXT[t.length]),
          TYPING_SPEED
        );
      } else {
        timer = setTimeout(() => setPhase("workflow"), 1000);
      }
    }

    if (phase === "workflow") {
      const steps = getAnimationSteps(nodes, edges);

      if (step < steps.length) {
        timer = setTimeout(() => {
          setVisibleNodes(steps[step].nodes);
          setVisibleEdges(steps[step].edges);
          setStep((s) => s + 1);
        }, STEP_DURATION);
      } else {
        timer = setTimeout(() => setPhase("cooldown"), 1000);
      }
    }

    if (phase === "cooldown") {
      timer = setTimeout(() => {
        setTypedText("");
        setVisibleNodes([]);
        setVisibleEdges([]);
        setStep(0);
        setPhase("typing");
      }, COOLDOWN_DURATION);
    }

    return () => clearTimeout(timer);
  }, [phase, typedText, step, nodes, edges]);

  useEffect(() => {
    if (visibleNodes.length > 0) {
      const t = setTimeout(
        () => flow.fitView({ padding: 0.2, duration: 800 }),
        150
      );

      return () => clearTimeout(t);
    }
  }, [visibleNodes, flow]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === "typing" ? (
          <TypingPrompt
            typedText={typedText}
            isComplete={typedText.length === PROMPT_TEXT.length}
          />
        ) : (
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ReactFlow
              nodes={visibleNodes}
              edges={visibleEdges}
              nodeTypes={nodeTypes}
              fitView
              proOptions={{ hideAttribution: true }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag={false}
              zoomOnScroll={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
