"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextAreaField from "./TextAreaField";

export default function ChatbotResponse() {
  return (
    <div className="w-64 border border-black/20 bg-secondary rounded-md p-1">
      <Card
        className={`w-full border-black/50 relative rounded-sm before:rounded-sm py-4 pb-2 bg-background`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/50 border-dashed px-4 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              Chatbot Response
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 py-0 space-y-4 -mt-2">
          <TextAreaField
            field={{ name: "Response", value: "Your response to the user" }}
            currentValue={""}
          />
        </CardContent>
      </Card>
    </div>
  );
}
