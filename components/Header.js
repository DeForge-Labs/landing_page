"use client";

import { Button, Card, Input, Textarea } from "@heroui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FlowContainer from "./FlowContainer";
import { useRouter } from "next/navigation";
import { FlipWords } from "./ui/flip-words";

export default function Header() {
  const router = useRouter();

  const formAttributes = [
    {
      id: "Heading1",
      label: "Heading",
      type: "heading1",
      placeholder: "Agentic Chatbot",
    },
    {
      id: "paragraph",
      label: "Paragraph",
      type: "paragraph",
      placeholder:
        "This Chatbot facilitates in automating customer support, given the company documentation is provided as Knowledge base and System Prompt.",
    },
    {
      id: "input",
      label: "Link to Web Page",
      type: "input",
      placeholder: "https://docs.deforge.io",
    },
    {
      id: "paragraph2",
      label: "Paragraph",
      type: "paragraph",
      placeholder:
        "Enter your custom System prompt. System prompts are instructions that guide the AI agent's behavior and responses.",
    },
    {
      id: "textarea",
      label: "System Prompt",
      type: "textarea",
      placeholder:
        "You are a helpful assistant who answers questions based on the provided documentation.",
    },
    {
      id: "Select",
      label: "Select",
      type: "Select",
      placeholder: "Select your OpenAI model",
    },
  ];

  const RenderFormFields = ({ type, placeholder, label }) => {
    return (
      <>
        {type === "heading1" && (
          <h1 className="text-4xl lg:text-5xl font-bold text-black">
            {placeholder}
          </h1>
        )}
        {type === "paragraph" && (
          <p className="text-base lg:text-lg text-black">{placeholder}</p>
        )}
        {type === "input" && (
          <div>
            <p className="font-medium text-black">{label}</p>
            <Input
              type={type}
              value={placeholder}
              readOnly
              className="mt-2 border border-black/50 rounded-lg h-12 light"
              classNames={{
                inputWrapper:
                  "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background shadow-none",
                input: "text-base mt-1",
              }}
            />
          </div>
        )}
        {type === "textarea" && (
          <div className="mb-2">
            <p className="font-medium text-black">{label}</p>
            <Textarea
              value={placeholder}
              readOnly
              className="mt-2 border border-black/50 rounded-lg h-28 light"
              classNames={{
                inputWrapper:
                  "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background shadow-none",
                input: "text-base",
              }}
            />
          </div>
        )}
        {type === "Select" && (
          <div className="lg:block hidden text-black">
            <p className="font-medium mb-2 ">Select your OpenAI model</p>

            <Select
              value={"gpt-4o-mini"}
              onValueChange={(value) => {}}
              disabled
            >
              <SelectTrigger className="text-md border border-black/50 rounded-lg h-12">
                <SelectValue placeholder={"Select Model"} />
              </SelectTrigger>
              <SelectContent className="text-md border border-black/50 rounded-lg bg-background">
                {["gpt-3.5-turbo", "gpt-4", "gpt-4o", "gpt-4o-mini"].map(
                  (option) => (
                    <SelectItem
                      key={option}
                      value={option}
                      className="hover:bg-black/5 rounded-md"
                    >
                      {option}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        )}
      </>
    );
  };

  return (
    <section className="pt-12 md:pt-20 lg:pt-20 text-black">
      <div className="container flex gap-10 flex-col xl:flex-row">
        <div className="mt-5 xl:mt-20 flex flex-col xl:items-start items-center xl:text-start text-center gap-6 md:gap-8 mb-10 xl:mb-0">
          <a
            href="https://www.producthunt.com/products/deforge-open-beta?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-deforge"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1007944&theme=dark&period=daily&t=1756041023938"
              alt="Deforge - Canva&#0032;for&#0032;AI&#0032;Agents | Product Hunt"
              style={{ width: "250px", height: "54px" }}
            />
          </a>
          <div className="inline-block rounded-full bg-[var(--secondary)] px-3 py-1 text-sm w-fit -mt-4">
            Deforge is now available in{" "}
            <span className="font-semibold">Public beta</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
            AI Agents for <br />
            <span>
              <FlipWords
                words={[
                  "Everyone",
                  "Businesses",
                  "Teams",
                  "Teachers",
                  "Marketers",
                  "Developers",
                  "Students",
                  "Doctors",
                ]}
                className="text-black xl:-ml-2 -mr-2"
              />
            </span>{" "}
          </h1>
          <p className="text-base md:text-base text-gray-600 max-w-xl -mt-3">
            Visually design, connect, and deploy powerful AI agents with our
            intuitive node-based builder. Then, wrap any workflow into a
            user-friendly form for anyone to use. No coding, no hunting for API
            keys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gap-2 border border-[black]"
              variant="outline"
              onPress={() => {
                router.push("/agents");
              }}
            >
              Browse Agents
            </Button>

            <Button
              size="lg"
              className="gap-2 text-background bg-black/80 px-7"
              onPress={() => {
                window.open("https://app.deforge.io", "_blank");
              }}
            >
              Launch App
            </Button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full h-full bg-background/80 backdrop-blur-sm border-black/50 max-w-3xl border-b-0 border-1 shadow-xl p-8 lg:p-12 flex flex-col rounded-xl rounded-b-none">
            <div className="flex-1 flex flex-col justify-start space-y-6 lg:space-y-8 xl:space-y-8">
              {formAttributes.map((attr, index) => (
                <RenderFormFields
                  key={index}
                  type={attr.type}
                  placeholder={attr.placeholder}
                  label={attr.label}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
      {/* 
      <div className="container sm:px-[32px] px-0">
        <div className="relative w-full xl:h-[700px] lg:h-[600px] sm:h-[400px] h-[300px] rounded-lg xl:mt-0 lg:mt-4 md:mt-2 mt-4 p-2 md:p-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-50"></div>
          <FlowContainer />
        </div>
      </div> */}
    </section>
  );
}
