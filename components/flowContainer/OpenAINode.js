"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextAreaField from "./TextAreaField";
import StandaloneField from "./StandaloneNode";
import SelectField from "./SelectField";

export default function OpenAINode() {
  return (
    <Card className={`w-64 border-black/50 bg-background relative rounded-md`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-3 border-b border-black/50 mb-5">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center">OpenAI Chat</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 space-y-4">
        {renderOutputs([
          {
            name: "Output",
            type: "text",
          },
        ])}

        <SelectField
          field={{
            name: "Model",
            value: "gpt-3.5-turbo",
            options: ["gpt-3.5-turbo", "gpt-4", "gpt-4o", "gpt-4o-mini"],
          }}
          currentValue={"gpt-4o-mini"}
        />

        <TextAreaField
          field={{ name: "Query", value: "Ask a question" }}
          currentValue={""}
        />
        <TextAreaField
          field={{ name: "System Prompt", value: "" }}
          currentValue={
            "You are a helpful assistant who answers questions based on the provided documentation."
          }
        />
        <StandaloneField
          input={{
            name: "Knowledge Base",
            type: "RAG",
          }}
        />
      </CardContent>
    </Card>
  );
}
