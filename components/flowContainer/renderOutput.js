"use client";

import getColorByType from "@/lib/node-colors";
import { Handle, Position } from "reactflow";

const renderOutputs = (outputs) => {
  return outputs.map((output, index) => {
    return (
      <div key={output.name} className="mb-2 relative">
        <div className="text-xs font-medium text-right capitalize">
          {output.name}
        </div>
        <div className="flex items-center relative">
          <Handle
            type="source"
            position={Position.Right}
            id={`output-${output.name}-${output.type}`}
            className=""
            style={{
              right: "-15.3px",
              top: "-8px",
              zIndex: 10,
              backgroundColor: "transparent",
              border: "none",
            }}
            data-type={output.type}
          ></Handle>

          <div
            className={`w-2 h-2 -right-[16.5px] -top-[12px] rounded-none rotate-45 absolute border-opacity-50`}
            style={{
              backgroundColor: getColorByType(output?.type.toLowerCase()),
              borderColor: "black",
              borderWidth: "1px",
            }}
          ></div>
        </div>
      </div>
    );
  });
};

export default renderOutputs;
