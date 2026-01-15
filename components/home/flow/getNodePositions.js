import { BREAKPOINTS } from "./constants";

export const getResponsiveNodePositions = (width) => {
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
