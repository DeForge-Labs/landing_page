export const getAnimationSteps = (nodes, edges) => [
  { nodes: [nodes[0]], edges: [] },
  { nodes: [nodes[0], nodes[1]], edges: [] },
  { nodes: [nodes[0], nodes[1], nodes[2]], edges: [edges[0], edges[1]] },
  { nodes, edges },
];
