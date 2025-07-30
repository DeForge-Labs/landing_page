"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextField from "./TextField";

export default function KbNode() {
  return (
    <Card className={`w-64 border-black/50 bg-background relative rounded-md`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 border-b border-black/50 mb-5">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center">Knowledge Base</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-4">
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
  );
}
