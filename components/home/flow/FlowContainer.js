"use client";

import { useEffect, useState } from "react";
import { ReactFlowProvider } from "reactflow";

import AnimatedFlow from "./AnimatedFlow";

export default function FlowContainer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="w-full h-full bg-background rounded-lg animate-pulse" />
    );

  return (
    <ReactFlowProvider>
      <AnimatedFlow />
    </ReactFlowProvider>
  );
}
