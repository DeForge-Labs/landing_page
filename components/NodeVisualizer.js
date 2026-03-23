"use client";

import { useEffect, useState } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";

import KbNode from "./flowContainer/KbNode";
import OpenAINode from "./flowContainer/OpenAINode";
import ChatbotResponse from "./flowContainer/ChatbotResponse";
import ChatbotNode from "./flowContainer/ChatbotNode";

const BREAKPOINTS = { mobile: 640, desktop: 1024 };

const getResponsiveNodePositions = (width) => {
  const isMobile = width < BREAKPOINTS.mobile;
  const scale = isMobile ? 0.6 : width < BREAKPOINTS.desktop ? 0.8 : 1;

  if (isMobile) {
    return [
      {
        id: "1",
        type: "chatbotNode",
        position: { x: 150 * scale, y: 150 * scale },
      },
      { id: "2", type: "kbNode", position: { x: 150 * scale, y: 380 * scale } },
      {
        id: "3",
        type: "openaiNode",
        position: { x: 650 * scale, y: 125 * scale },
      },
      {
        id: "4",
        type: "chatbotResponse",
        position: { x: 1150 * scale, y: 180 * scale },
      },
    ];
  }

  return [
    {
      id: "1",
      type: "chatbotNode",
      position: { x: 250 * scale, y: 150 * scale },
    },
    { id: "2", type: "kbNode", position: { x: 250 * scale, y: 380 * scale } },
    {
      id: "3",
      type: "openaiNode",
      position: { x: 650 * scale, y: 125 * scale },
    },
    {
      id: "4",
      type: "chatbotResponse",
      position: { x: 1050 * scale, y: 180 * scale },
    },
  ];
};

const nodeTypes = {
  chatbotNode: ChatbotNode,
  kbNode: KbNode,
  openaiNode: OpenAINode,
  chatbotResponse: ChatbotResponse,
};

function Flow() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const flow = useReactFlow();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width) {
      const newNodes = getResponsiveNodePositions(width);
      setNodes(newNodes);

      const stroke = width < BREAKPOINTS.mobile ? 2 : 1.5;
      const edgeColor = "#8754ff";

      setEdges([
        {
          id: "1-3",
          source: "1",
          sourceHandle: "output-Message-text",
          target: "3",
          targetHandle: "input-Query-text",
          type: "smoothstep", // Cleaner right-angle routing
          animated: true,
          style: { stroke: edgeColor, strokeWidth: stroke },
          markerEnd: { type: "arrowclosed", color: edgeColor },
        },
        {
          id: "2-3",
          source: "2",
          sourceHandle: "output-RAG-RAG",
          target: "3",
          targetHandle: "input-Knowledge Base-RAG",
          type: "smoothstep",
          animated: true,
          style: { stroke: edgeColor, strokeWidth: stroke },
          markerEnd: { type: "arrowclosed", color: edgeColor },
        },
        {
          id: "3-4",
          source: "3",
          sourceHandle: "output-Message-text",
          target: "4",
          type: "smoothstep",
          animated: true,
          style: { stroke: edgeColor, strokeWidth: stroke },
          markerEnd: { type: "arrowclosed", color: edgeColor },
        },
      ]);

      const timer = setTimeout(() => {
        flow.fitView({ padding: 0.2, duration: 800 });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [width, flow]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        panOnDrag={false}
        zoomOnScroll={false}
        preventScrolling={false}
      ></ReactFlow>
    </div>
  );
}

export default function NodeVisualizer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return <div className="w-full h-full min-h-[400px] bg-transparent" />;
  }

  return (
    <div className="w-full h-full min-h-[400px] relative bg-transparent">
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
