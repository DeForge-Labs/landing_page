"use client";
import { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import KbNode from "./flowContainer/KbNode";
import OpenAINode from "./flowContainer/OpenAINode";
import ChatbotResponse from "./flowContainer/ChatbotResponse";
import ChatbotNode from "./flowContainer/ChatbotNode";

// Define responsive breakpoints
const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  xl: 1280,
};

// Function to get responsive node positions based on screen width
const getResponsiveNodePositions = (screenWidth) => {
  if (screenWidth < BREAKPOINTS.mobile) {
    // Mobile layout - vertical stack with minimal spacing
    return [
      { id: "1", type: "chatbotNode", position: { x: 80, y: 150 } },
      { id: "2", type: "kbNode", position: { x: 80, y: 300 } },
      { id: "3", type: "openaiNode", position: { x: 400, y: 80 } },
      { id: "4", type: "chatbotResponse", position: { x: 725, y: 150 } },
    ];
  } else if (screenWidth < BREAKPOINTS.tablet) {
    // Small tablet layout - compact flow
    return [
      { id: "1", type: "chatbotNode", position: { x: 80, y: 150 } },
      { id: "2", type: "kbNode", position: { x: 80, y: 300 } },
      { id: "3", type: "openaiNode", position: { x: 400, y: 80 } },
      { id: "4", type: "chatbotResponse", position: { x: 725, y: 150 } },
    ];
  } else if (screenWidth < BREAKPOINTS.desktop) {
    // Tablet layout - medium spacing
    return [
      { id: "1", type: "chatbotNode", position: { x: 150, y: 100 } },
      { id: "2", type: "kbNode", position: { x: 150, y: 300 } },
      { id: "3", type: "openaiNode", position: { x: 500, y: 80 } },
      { id: "4", type: "chatbotResponse", position: { x: 850, y: 150 } },
    ];
  } else if (screenWidth < BREAKPOINTS.xl) {
    // Desktop layout - standard spacing
    return [
      { id: "1", type: "chatbotNode", position: { x: 250, y: 125 } },
      { id: "2", type: "kbNode", position: { x: 250, y: 375 } },
      { id: "3", type: "openaiNode", position: { x: 650, y: 100 } },
      { id: "4", type: "chatbotResponse", position: { x: 1050, y: 180 } },
    ];
  } else {
    // Large desktop layout - original spacing
    return [
      { id: "1", type: "chatbotNode", position: { x: 400, y: 50 } },
      { id: "2", type: "kbNode", position: { x: 400, y: 250 } },
      { id: "3", type: "openaiNode", position: { x: 800, y: 0 } },
      { id: "4", type: "chatbotResponse", position: { x: 1190, y: 120 } },
    ];
  }
};

const ResponsiveFlow = () => {
  const [screenWidth, setScreenWidth] = useState(1024);
  const [nodes, setNodes] = useState([]);
  const reactFlowInstance = useReactFlow();

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update nodes when screen width changes
  useEffect(() => {
    const newNodes = getResponsiveNodePositions(screenWidth);
    setNodes(newNodes);
  }, [screenWidth]);

  // Fit view when nodes update
  useEffect(() => {
    if (nodes.length > 0) {
      // Small delay to ensure nodes are rendered
      const timer = setTimeout(() => {
        reactFlowInstance.fitView({
          padding: screenWidth < BREAKPOINTS.mobile ? 0.1 : 0.2,
          duration: 300,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [nodes, reactFlowInstance, screenWidth]);

  const edges = [
    {
      id: "1-3",
      source: "1",
      sourceHandle: "output-Message-text",
      target: "3",
      targetHandle: "input-Query-text",
      animated: true,
      style: {
        stroke: "#1d1f26",
        strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#1d1f26",
      },
    },
    {
      id: "2-3",
      source: "2",
      sourceHandle: "output-Message-text",
      target: "3",
      targetHandle: "input-Query-text",
      animated: true,
      style: {
        stroke: "#1d1f26",
        strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#1d1f26",
      },
    },
    {
      id: "3-4",
      source: "3",
      sourceHandle: "output-Message-text",
      target: "4",
      animated: true,
      style: {
        stroke: "#1d1f26",
        strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
      },
      markerEnd: {
        type: "arrowclosed",
        color: "#1d1f26",
      },
    },
  ];

  const nodeTypes = {
    chatbotNode: ChatbotNode,
    kbNode: KbNode,
    openaiNode: OpenAINode,
    chatbotResponse: ChatbotResponse,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitViewOptions={{
        padding: screenWidth < BREAKPOINTS.mobile ? 0.1 : 0.2,
      }}
      fitView
      proOptions={{ hideAttribution: true }}
      edgeTypes="smoothstep"
      nodesDraggable={false} // Disable dragging for demo
      nodesConnectable={false} // Disable connecting for demo
      elementsSelectable={false} // Disable selection for demo
      panOnDrag={screenWidth >= BREAKPOINTS.tablet} // Disable pan on mobile
      zoomOnScroll={screenWidth >= BREAKPOINTS.tablet} // Disable zoom on mobile
      zoomOnPinch={true} // Keep pinch zoom for mobile
      preventScrolling={screenWidth < BREAKPOINTS.tablet} // Prevent scroll conflicts on mobile
      minZoom={0.5}
      maxZoom={1.5}
      defaultViewport={{
        x: 0,
        y: 0,
        zoom:
          screenWidth < BREAKPOINTS.mobile
            ? 0.6
            : screenWidth < BREAKPOINTS.tablet
            ? 0.8
            : 1,
      }}
    ></ReactFlow>
  );
};

export default function FlowContainer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent SSR hydration issues
  if (!isClient) {
    return (
      <div className="w-full h-full bg-background rounded-lg animate-pulse flex items-center justify-center"></div>
    );
  }

  return (
    <ReactFlowProvider>
      <ResponsiveFlow />
    </ReactFlowProvider>
  );
}
