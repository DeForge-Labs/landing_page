"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextField from "./TextField";

export default function KbNode() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full border-black/50 relative rounded-lg before:rounded-lg py-4 pb-2 bg-white border-black/15 border`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/15 border-dashed px-4 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              Knowledge Base
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 py-0 space-y-4 -mt-2">
          {renderOutputs([
            {
              name: "RAG",
              type: "RAG",
            },
          ])}

          <TextField
            field={{ name: "Link to the web page", value: "" }}
            currentValue={"https://docs.deforge.io"}
          />
        </CardContent>
      </Card>
    </div>
  );
}
