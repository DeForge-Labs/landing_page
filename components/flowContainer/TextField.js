"use client";

import { Handle, Position } from "reactflow";
import getColorByType from "@/lib/node-colors";
import { Input } from "../ui/input";

export default function TextField({ field, currentValue }) {
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-xs font-medium capitalize ">{field.name}</div>
      <div className="flex items-center relative">
        <div className="relative">
          <Handle
            type="target"
            position={Position.Left}
            id={`input-${field.name}`}
            style={{
              zIndex: 10,
              border: "none",
              left: "-15.3px",
              backgroundColor: "transparent",
            }}
          />

          <div
            className={`w-2 h-2 -left-[16.5px] -top-[4.5px] rounded-full rotate-45 absolute border-opacity-50  `}
            style={{
              backgroundColor: getColorByType("text"),
              borderColor: "black",
              borderWidth: "1px",
            }}
          ></div>
        </div>

        <Input
          value={currentValue || ""}
          variant="outline"
          onChange={(e) => {}}
          placeholder={field.value}
          size="lg"
          style={{
            fontSize: "12px",
          }}
          className="mt-2 border border-black/50 light rounded-sm"
          key={`${field.name}-input`}
        />
      </div>
    </div>
  );
}
