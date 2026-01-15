"use client";

import { Handle, Position } from "reactflow";
import getColorByType from "@/lib/node-colors";
import { Textarea } from "../ui/textarea";

export default function TextAreaField({ field, currentValue }) {
  return (
    <div key={field.name} className="mb-2 relative">
      <div className="text-xs font-medium capitalize">{field.name}</div>
      <div className="flex items-center relative">
        <div className="relative">
          <Handle
            type="target"
            position={Position.Left}
            id={`input-${field.name}-text`}
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

        <Textarea
          value={currentValue || ""}
          variant="outline"
          onChange={(e) => {}}
          placeholder={field.value}
          className="mt-2 border border-black/50 rounded-sm"
          size="lg"
          rows={3}
          style={{
            resize: "none",
            fontSize: "12px",
          }}
          key={`${field.name}-input`}
        />
      </div>
    </div>
  );
}
