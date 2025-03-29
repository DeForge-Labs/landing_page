"use client";

import { useEffect, useState } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Handle,
  Position,
  MarkerType,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Cpu,
  Database,
  MessageSquare,
  Workflow,
  Zap,
  LinkIcon,
} from "lucide-react";
import { useWindowSize } from "@/hooks/useWindowSize";

// Custom node components
const InputNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md w-40 -translate-x-5 rounded-md bg-blue-50 border-2 border-blue-200">
    <div className="flex items-center">
      <MessageSquare className="h-4 w-4 sm:h-6 sm:w-6 text-blue-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-blue-700">
          User Input
        </div>
        <div className="text-xs text-blue-500 hidden sm:block whitespace-nowrap">
          {data.label}
        </div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400"
    />
  </div>
);

const LLMNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md bg-purple-50 border-2 border-purple-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400"
    />
    <div className="flex items-center">
      <Cpu className="h-4 w-4 sm:h-6 sm:w-6 text-purple-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-purple-700">
          LLM Processor
        </div>
        <div className="text-xs text-purple-500 hidden sm:block">
          {data.label}
        </div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400"
    />
  </div>
);

const MemoryNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md bg-green-50 border-2 border-green-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400"
    />
    <div className="flex items-center">
      <Database className="h-4 w-4 sm:h-6 sm:w-6 text-green-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-green-700">
          Memory Store
        </div>
        <div className="text-xs text-green-500 hidden sm:block">
          {data.label}
        </div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400"
    />
  </div>
);

const DecisionNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md bg-amber-50 border-2 border-amber-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400"
    />
    <div className="flex items-center">
      <Workflow className="h-4 w-4 sm:h-6 sm:w-6 text-amber-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-amber-700">
          Decision Node
        </div>
        <div className="text-xs text-amber-500 hidden sm:block">
          {data.label}
        </div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400"
    />
  </div>
);

const APINode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md bg-red-50 border-2 border-red-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400"
    />
    <div className="flex items-center">
      <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-red-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-red-700">
          API Connector
        </div>
        <div className="text-xs text-red-500 hidden sm:block">{data.label}</div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400"
    />
  </div>
);

const BlockchainNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md rounded-md bg-indigo-50 border-2 border-indigo-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400"
    />
    <div className="flex items-center">
      <LinkIcon className="h-4 w-4 sm:h-6 sm:w-6 text-indigo-500 mr-1 sm:mr-2" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-indigo-700">
          Blockchain
        </div>
        <div className="text-xs text-indigo-500 hidden sm:block">
          {data.label}
        </div>
      </div>
    </div>
    <Handle
      type="source"
      position={Position.Right}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400"
    />
  </div>
);

const OutputNode = ({ data }) => (
  <div className="px-2 py-1 sm:px-4 sm:py-2 shadow-md w-36 rounded-md bg-teal-50 border-2 border-teal-200">
    <Handle
      type="target"
      position={Position.Left}
      className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400"
    />
    <div className="flex items-center gap-2">
      <MessageSquare className="h-4 w-4 sm:h-6 sm:w-6 text-teal-500" />
      <div className="ml-1 sm:ml-2">
        <div className="text-xs sm:text-sm font-bold text-teal-700">
          Response
        </div>
        <div className="text-xs text-teal-500 hidden sm:block whitespace-nowrap">
          {data.label}
        </div>
      </div>
    </div>
  </div>
);
// Define the node types
const nodeTypes = {
  input: InputNode,
  llm: LLMNode,
  memory: MemoryNode,
  decision: DecisionNode,
  api: APINode,
  blockchain: BlockchainNode,
  output: OutputNode,
};

// Create responsive node layouts based on screen width
const getNodesAndEdges = (width) => {
  // Scale factor based on screen width
  const scale = width < 640 ? 0.5 : width < 768 ? 0.7 : width < 1024 ? 0.85 : 1;

  // Base positions
  const basePositions = {
    input: { x: 40, y: 150 },
    llm: { x: 225, y: 100 },
    memory: { x: 500, y: 50 },
    decision: { x: 450, y: 200 },
    blockchain: { x: 700, y: 250 },
    api: { x: 700, y: 150 },
    output: { x: 950, y: 200 },
  };

  // For very small screens, use a more vertical layout
  const positions =
    width < 480
      ? {
          input: { x: 50, y: 50 },
          llm: { x: 50, y: 150 },
          memory: { x: 200, y: 50 },
          decision: { x: 200, y: 150 },
          blockchain: { x: 350, y: 200 },
          api: { x: 350, y: 100 },
          output: { x: 350, y: 300 },
        }
      : basePositions;

  // Apply scaling to positions
  const scaledPositions = Object.entries(positions).reduce(
    (acc, [key, pos]) => {
      acc[key] = { x: pos.x * scale, y: pos.y * scale };
      return acc;
    },
    {}
  );

  // Create nodes with scaled positions
  const nodes = [
    {
      id: "input-1",
      type: "input",
      data: { label: "User Query" },
      position: scaledPositions.input,
    },
    {
      id: "llm-1",
      type: "llm",
      data: { label: "GPT-4o" },
      position: scaledPositions.llm,
    },
    {
      id: "memory-1",
      type: "memory",
      data: { label: "Conversation History" },
      position: scaledPositions.memory,
    },
    {
      id: "decision-1",
      type: "decision",
      data: { label: "Intent Classification" },
      position: scaledPositions.decision,
    },
    {
      id: "blockchain-1",
      type: "blockchain",
      data: { label: "Smart Contract" },
      position: scaledPositions.blockchain,
    },
    {
      id: "api-1",
      type: "api",
      data: { label: "External API" },
      position: scaledPositions.api,
    },
    {
      id: "output-1",
      type: "output",
      data: { label: "AI Response" },
      position: scaledPositions.output,
    },
  ];

  // Create edges
  const edges = [
    {
      id: "e1-2",
      source: "input-1",
      target: "llm-1",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15 * scale,
        height: 15 * scale,
        color: "#6366f1",
      },
    },
    {
      id: "e2-3",
      source: "llm-1",
      target: "memory-1",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15 * scale,
        height: 15 * scale,
        color: "#6366f1",
      },
    },
    {
      id: "e2-4",
      source: "llm-1",
      target: "decision-1",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15 * scale,
        height: 15 * scale,
        color: "#6366f1",
      },
    },
    {
      id: "e4-5",
      source: "decision-1",
      target: "blockchain-1",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15 * scale,
        height: 15 * scale,
        color: "#6366f1",
      },
    },
    {
      id: "e4-6",
      source: "decision-1",
      target: "api-1",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 15 * scale,
        height: 15 * scale,
        color: "#6366f1",
      },
    },
  ];

  // For small screens, simplify the connections to avoid clutter
  if (width < 480) {
    edges.push(
      {
        id: "e3-7",
        source: "memory-1",
        target: "output-1",
        animated: true,
        style: { stroke: "#6366f1" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15 * scale,
          height: 15 * scale,
          color: "#6366f1",
        },
      },
      {
        id: "e5-7",
        source: "blockchain-1",
        target: "output-1",
        animated: true,
        style: { stroke: "#6366f1" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15 * scale,
          height: 15 * scale,
          color: "#6366f1",
        },
      }
    );
  } else {
    edges.push(
      {
        id: "e3-7",
        source: "memory-1",
        target: "output-1",
        animated: true,
        style: { stroke: "#6366f1" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15 * scale,
          height: 15 * scale,
          color: "#6366f1",
        },
      },
      {
        id: "e5-7",
        source: "blockchain-1",
        target: "output-1",
        animated: true,
        style: { stroke: "#6366f1" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15 * scale,
          height: 15 * scale,
          color: "#6366f1",
        },
      },
      {
        id: "e6-7",
        source: "api-1",
        target: "output-1",
        animated: true,
        style: { stroke: "#6366f1" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 15 * scale,
          height: 15 * scale,
          color: "#6366f1",
        },
      }
    );
  }

  return { nodes, edges };
};

// Flow component that uses the useReactFlow hook
function Flow() {
  const { width = 1024 } = useWindowSize();
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const reactFlowInstance = useReactFlow();

  // Update nodes and edges when screen size changes
  useEffect(() => {
    if (width) {
      const { nodes: newNodes, edges: newEdges } = getNodesAndEdges(width);
      setNodes(newNodes);
      setEdges(newEdges);

      // Small delay to ensure nodes are rendered before fitting view
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2 });
      }, 100);
    }
  }, [width, reactFlowInstance]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      zoomOnScroll={false}
      panOnScroll={false}
      panOnDrag={false}
      preventScrolling={false}
      proOptions={{ hideAttribution: true }}
    ></ReactFlow>
  );
}

// Main component that wraps Flow with ReactFlowProvider
export default function NodeVisualizer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full bg-[var(--background)] rounded-md flex items-center justify-center">
        Loading visualizer...
      </div>
    );
  }

  return (
    <div
      className="w-full h-full bg-[var(--background)] rounded-md"
      style={{ pointerEvents: "auto" }}
    >
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}
