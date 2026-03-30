"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextAreaField from "./TextAreaField";

export default function ChatbotResponse() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full relative before:rounded-sm rounded-lg py-4 pb-2 bg-white border-black/30 border shadow-lg`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/15 border-dashed px-4 [.border-b]:pb-4">
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
