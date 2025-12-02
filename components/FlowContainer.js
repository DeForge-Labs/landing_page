// "use client";
// import { useEffect, useState, useRef } from "react";
// import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
// import { motion, AnimatePresence } from "framer-motion";
// import "reactflow/dist/style.css";

// // Import your custom nodes
// import KbNode from "./flowContainer/KbNode";
// import OpenAINode from "./flowContainer/OpenAINode";
// import ChatbotResponse from "./flowContainer/ChatbotResponse";
// import ChatbotNode from "./flowContainer/ChatbotNode";

// // --- CONSTANTS ---
// const BREAKPOINTS = {
//   mobile: 640,
//   tablet: 768,
//   desktop: 1024,
//   xl: 1280,
// };
// const PROMPT_TEXT = "Create an AI Chatbot with RAG capabilities";
// const TYPING_SPEED = 75;
// const STEP_DURATION = 1200;
// const COOLDOWN_DURATION = 5000;

// // --- RESPONSIVE NODE POSITIONS ---
// const getResponsiveNodePositions = (screenWidth) => {
//   const scale =
//     screenWidth < BREAKPOINTS.mobile
//       ? 0.6
//       : screenWidth < BREAKPOINTS.desktop
//       ? 0.8
//       : 1;
//   return [
//     {
//       id: "1",
//       type: "chatbotNode",
//       position: { x: 250 * scale, y: 150 * scale },
//     },
//     { id: "2", type: "kbNode", position: { x: 250 * scale, y: 400 * scale } },
//     {
//       id: "3",
//       type: "openaiNode",
//       position: { x: 650 * scale, y: 125 * scale },
//     },
//     {
//       id: "4",
//       type: "chatbotResponse",
//       position: { x: 1050 * scale, y: 180 * scale },
//     },
//   ];
// };

// // --- ANIMATION STEPS ---
// const getAnimationSteps = (allNodes, allEdges) => [
//   { nodes: [allNodes[0]], edges: [] },
//   { nodes: [allNodes[0], allNodes[1]], edges: [] },
//   {
//     nodes: [allNodes[0], allNodes[1], allNodes[2]],
//     edges: [allEdges[0], allEdges[1]],
//   },
//   { nodes: allNodes, edges: allEdges },
// ];

// // --- TYPING PROMPT COMPONENT ---
// const TypingPrompt = ({ typedText, isComplete }) => {
//   const textMeasureRef = useRef(null);
//   const [textWidth, setTextWidth] = useState(0);

//   useEffect(() => {
//     if (textMeasureRef.current) {
//       setTextWidth(textMeasureRef.current.offsetWidth);
//     }
//   }, [typedText]);

//   return (
//     <motion.div
//       className="w-full max-w-2xl mb-6"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex flex-col gap-3">
//         <label className="text-sm font-medium text-foreground">
//           Describe your AI workflow:
//         </label>
//         <div className="relative">
//           <input
//             type="text"
//             value={typedText}
//             readOnly
//             className="w-full px-4 py-3 border border-black/50 rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//             placeholder="Type your prompt..."
//           />
//           <span
//             ref={textMeasureRef}
//             className="absolute top-0 left-0 invisible whitespace-pre px-4 py-3"
//             style={{ fontFamily: "inherit", fontSize: "inherit" }}
//           >
//             {typedText}
//           </span>
//           {!isComplete && (
//             <motion.div
//               className="absolute top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-500"
//               style={{ left: `${textWidth - 4}px` }} // 16px for padding
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ duration: 1.0, repeat: Infinity }}
//             />
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- MAIN ANIMATED FLOW COMPONENT ---
// const AnimatedFlow = () => {
//   const [screenWidth, setScreenWidth] = useState(1024);
//   const [allNodes, setAllNodes] = useState([]);
//   const [allEdges, setAllEdges] = useState([]);
//   const [visibleNodes, setVisibleNodes] = useState([]);
//   const [visibleEdges, setVisibleEdges] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [phase, setPhase] = useState("typing");
//   const [typedText, setTypedText] = useState("");
//   const reactFlowInstance = useReactFlow();

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const nodePositions = getResponsiveNodePositions(screenWidth);
//     setAllNodes(nodePositions);

//     // REVERTED: Using your original edge definitions
//     const edges = [
//       {
//         id: "1-3",
//         source: "1",
//         sourceHandle: "output-Message-text",
//         target: "3",
//         targetHandle: "input-Query-text",
//         animated: true,
//         style: {
//           stroke: "#1d1f26",
//           strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
//         },
//         markerEnd: { type: "arrowclosed", color: "#1d1f26" },
//       },
//       {
//         id: "2-3",
//         source: "2",
//         sourceHandle: "output-RAG-RAG",
//         target: "3",
//         targetHandle: "input-Knowledge Base-RAG",
//         animated: true,
//         style: {
//           stroke: "#1d1f26",
//           strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
//         },
//         markerEnd: { type: "arrowclosed", color: "#1d1f26" },
//       },
//       {
//         id: "3-4",
//         source: "3",
//         sourceHandle: "output-Message-text",
//         target: "4",
//         animated: true,
//         style: {
//           stroke: "#1d1f26",
//           strokeWidth: screenWidth < BREAKPOINTS.mobile ? 2 : 1,
//         },
//         markerEnd: { type: "arrowclosed", color: "#1d1f26" },
//       },
//     ];
//     setAllEdges(edges);
//   }, [screenWidth]);

//   // Animation Lifecycle Logic
//   useEffect(() => {
//     let timer;
//     if (phase === "typing") {
//       if (typedText.length < PROMPT_TEXT.length) {
//         timer = setTimeout(() => {
//           setTypedText((prev) => prev + PROMPT_TEXT[prev.length]);
//         }, TYPING_SPEED);
//       } else {
//         timer = setTimeout(() => setPhase("workflow"), 1000);
//       }
//     } else if (phase === "workflow") {
//       const animationSteps = getAnimationSteps(allNodes, allEdges);
//       if (currentStep < animationSteps.length) {
//         timer = setTimeout(() => {
//           const step = animationSteps[currentStep];
//           setVisibleNodes(step.nodes);
//           setVisibleEdges(step.edges);
//           setCurrentStep((prev) => prev + 1);
//         }, STEP_DURATION);
//       } else {
//         timer = setTimeout(() => setPhase("cooldown"), 1000);
//       }
//     } else if (phase === "cooldown") {
//       timer = setTimeout(() => {
//         setTypedText("");
//         setCurrentStep(0);
//         setVisibleNodes([]);
//         setVisibleEdges([]);
//         setPhase("typing");
//       }, COOLDOWN_DURATION);
//     }
//     return () => clearTimeout(timer);
//   }, [phase, typedText, currentStep, allNodes, allEdges]);

//   // Fit view effect
//   useEffect(() => {
//     if (visibleNodes.length > 0) {
//       const timer = setTimeout(() => {
//         reactFlowInstance.fitView({ padding: 0.2, duration: 800 });
//       }, 150);
//       return () => clearTimeout(timer);
//     }
//   }, [visibleNodes, reactFlowInstance]);

//   const nodeTypes = {
//     chatbotNode: ChatbotNode,
//     kbNode: KbNode,
//     openaiNode: OpenAINode,
//     chatbotResponse: ChatbotResponse,
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
//       <AnimatePresence mode="wait">
//         {phase === "typing" ? (
//           <TypingPrompt
//             key="prompt"
//             typedText={typedText}
//             isComplete={typedText.length === PROMPT_TEXT.length}
//           />
//         ) : (
//           <motion.div
//             key="flow"
//             className="w-full h-full"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <ReactFlow
//               nodes={visibleNodes}
//               edges={visibleEdges}
//               nodeTypes={nodeTypes}
//               // REVERTED: Using your original edge type prop
//               edgeTypes="smoothstep"
//               fitView
//               proOptions={{ hideAttribution: true }}
//               nodesDraggable={false}
//               nodesConnectable={false}
//               elementsSelectable={false}
//               panOnDrag={false}
//               zoomOnScroll={false}
//               preventScrolling={true}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // --- EXPORTED PROVIDER COMPONENT ---
// export default function AnimatedFlowContainer() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return (
//       <div className="w-full h-full bg-background rounded-lg animate-pulse" />
//     );
//   }

//   return (
//     <ReactFlowProvider>
//       <AnimatedFlow />
//     </ReactFlowProvider>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import { motion, AnimatePresence } from "framer-motion";
import "reactflow/dist/style.css";

import KbNode from "./flowContainer/KbNode";
import OpenAINode from "./flowContainer/OpenAINode";
import ChatbotResponse from "./flowContainer/ChatbotResponse";
import ChatbotNode from "./flowContainer/ChatbotNode";

// --- CONSTANTS ---
const BREAKPOINTS = { mobile: 640, desktop: 1024 };
const PROMPT_TEXT = "Create an AI Chatbot with RAG capabilities";
const TYPING_SPEED = 75;
const STEP_DURATION = 1200;
const COOLDOWN_DURATION = 5000;

// --- RESPONSIVE NODE POSITIONS ---
const getResponsiveNodePositions = (width) => {
  const scale =
    width < BREAKPOINTS.mobile ? 0.6 : width < BREAKPOINTS.desktop ? 0.8 : 1;

  return [
    {
      id: "1",
      type: "chatbotNode",
      position: { x: 250 * scale, y: 150 * scale },
    },
    { id: "2", type: "kbNode", position: { x: 250 * scale, y: 400 * scale } },
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

// --- ANIMATION STEPS ---
const getAnimationSteps = (nodes, edges) => [
  { nodes: [nodes[0]], edges: [] },
  { nodes: [nodes[0], nodes[1]], edges: [] },
  { nodes: [nodes[0], nodes[1], nodes[2]], edges: [edges[0], edges[1]] },
  { nodes, edges },
];

// --- TYPING PROMPT ---
const TypingPrompt = ({ typedText, isComplete }) => {
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
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium text-foreground">
          Describe your AI workflow:
        </label>

        <div className="relative">
          <input
            type="text"
            readOnly
            value={typedText}
            className="w-full px-4 py-3 border border-black/50 rounded-lg bg-card text-foreground shadow-sm focus:outline-none"
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
      </div>
    </motion.div>
  );
};

// --- ANIMATED FLOW ---
const AnimatedFlow = () => {
  const [width, setWidth] = useState(1024);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [visibleEdges, setVisibleEdges] = useState([]);

  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [typedText, setTypedText] = useState("");

  const flow = useReactFlow();

  // Screen width listener
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Rebuild nodes & edges on width change
  useEffect(() => {
    const n = getResponsiveNodePositions(width);
    setNodes(n);

    const stroke = width < BREAKPOINTS.mobile ? 2 : 1;

    setEdges([
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
    ]);
  }, [width]);

  // Animation cycle
  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (typedText.length < PROMPT_TEXT.length) {
        timer = setTimeout(() => {
          setTypedText((t) => t + PROMPT_TEXT[t.length]);
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => setPhase("workflow"), 1000);
      }
    } else if (phase === "workflow") {
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
    } else if (phase === "cooldown") {
      timer = setTimeout(() => {
        setTypedText("");
        setStep(0);
        setVisibleNodes([]);
        setVisibleEdges([]);
        setPhase("typing");
      }, COOLDOWN_DURATION);
    }

    return () => clearTimeout(timer);
  }, [phase, typedText, step, nodes, edges]);

  // Fit view
  useEffect(() => {
    if (visibleNodes.length > 0) {
      const t = setTimeout(() => {
        flow.fitView({ padding: 0.2, duration: 800 });
      }, 150);
      return () => clearTimeout(t);
    }
  }, [visibleNodes, flow]);

  const nodeTypes = {
    chatbotNode: ChatbotNode,
    kbNode: KbNode,
    openaiNode: OpenAINode,
    chatbotResponse: ChatbotResponse,
  };

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
              edgeTypes="smoothstep"
              fitView
              proOptions={{ hideAttribution: true }}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              panOnDrag={false}
              zoomOnScroll={false}
              preventScrolling
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AnimatedFlowContainer() {
  const [client, setClient] = useState(false);

  useEffect(() => setClient(true), []);

  if (!client) {
    return (
      <div className="w-full h-full bg-background rounded-lg animate-pulse" />
    );
  }

  return (
    <ReactFlowProvider>
      <AnimatedFlow />
    </ReactFlowProvider>
  );
}
