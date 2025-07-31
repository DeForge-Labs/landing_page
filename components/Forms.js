"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Textarea, Input } from "@heroui/react";
import { Card } from "@/components/ui/card";
import { Blocks, Heading1, Type, Workflow } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

// Helper to filter items for the toolboxes
const leftToolboxItems = formAttributes.filter((_, index) => index % 2 === 0);
const rightToolboxItems = formAttributes.filter((_, index) => index % 2 !== 0);

export default function Forms() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    // Increased height to allow for the full animation sequence
    <div ref={containerRef} className="min-h-[300vh] relative z-0" id="forms">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center pt-16 gap-6 px-4">
        {/* Intro Text */}
        <div className="text-center space-y-4 mb-8 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Introducing Deforge Forms
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Create a user-friendly form template for your AI agent and share it
            with others.
          </p>
        </div>

        {/* Main 3-Column Layout for the Builder Animation */}
        <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Toolbox */}
          <ToolboxPanel
            items={leftToolboxItems}
            scrollYProgress={scrollYProgress}
          />

          {/* Center Form Canvas (takes more space) */}
          <div className="col-span-1 lg:col-span-3">
            <Card className="w-full h-full bg-background/80 backdrop-blur-sm border-black/50 border-b-0 shadow-xl p-8 lg:p-12 flex flex-col rounded-xl rounded-b-none">
              <div className="flex-1 flex flex-col justify-start space-y-6 lg:space-y-8 xl:space-y-8">
                {formAttributes.map((attr, index) => (
                  <AnimatedFormField
                    key={attr.id}
                    {...attr}
                    index={index}
                    scrollProgress={scrollYProgress}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Right Toolbox */}
          <ToolboxPanel
            items={rightToolboxItems}
            scrollYProgress={scrollYProgress}
            isRightSide
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Renders the animated form field that appears to fly in from the side.
 */
function AnimatedFormField({
  id,
  label,
  type,
  placeholder,
  scrollProgress,
  index,
}) {
  // Determine if the component should animate from the left or right
  const isLeftAligned = index % 2 === 0;

  // Stagger the animation start time for each field based on its index
  // Each animation will take 10% of the scroll range to complete
  const startProgress = 0.15 + index * 0.12;
  const endProgress = startProgress + 0.1;

  // Animate opacity from 0 to 1
  const opacity = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0, 1]
  );
  // Animate horizontal position from off-screen to the center
  const x = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [isLeftAligned ? -200 : 200, 0]
  );
  // Animate scale for a subtle "pop" effect
  const scale = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0.8, 1]
  );
  // Animate rotation for a more dynamic "drop" effect
  const rotate = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [isLeftAligned ? -10 : 10, 0]
  );

  return (
    <motion.div
      style={{ opacity, x, scale, rotate }}
      className="space-y-2 origin-center" // Set origin for scale/rotate
      data-field-id={id}
    >
      {type === "heading1" && (
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
          {placeholder}
        </h1>
      )}
      {type === "paragraph" && (
        <p className="text-base lg:text-lg">{placeholder}</p>
      )}
      {type === "input" && (
        <>
          <p className="font-medium">{label}</p>
          <Input
            type={type}
            value={placeholder}
            readOnly
            className="mt-2 border border-black/50 rounded-lg h-12 light"
            classNames={{
              inputWrapper:
                "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background",
              input: "text-base mt-1",
            }}
          />
        </>
      )}
      {type === "textarea" && (
        <>
          <p className="font-medium">{label}</p>
          <Textarea
            value={placeholder}
            readOnly
            className="mt-2 border border-black/50 rounded-lg h-28 light"
            classNames={{
              inputWrapper:
                "bg-background data-[hover=true]:bg-background group-data-[focus=true]:bg-background",
              input: "text-base",
            }}
          />
        </>
      )}
      {type === "Select" && (
        <div className="lg:block hidden">
          <p className="font-medium">Select your OpenAI model</p>

          <Select value={"gpt-4o-mini"} onValueChange={(value) => {}}>
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
    </motion.div>
  );
}

/**
 * Renders the side toolboxes with items that fade out as they
 * are "dropped" into the form.
 */
function ToolboxPanel({ items, scrollYProgress, isRightSide = false }) {
  // Find the original index of a toolbox item in the main formAttributes array
  const findOriginalIndex = (id) =>
    formAttributes.findIndex((item) => item.id === id);

  return (
    <div
      className={`flex-col items-center hidden lg:flex space-y-4 ${
        isRightSide ? "items-start" : "items-end"
      }`}
    >
      {items.map((item) => {
        const originalIndex = findOriginalIndex(item.id);
        const startProgress = 0.15 + originalIndex * 0.12;
        const endProgress = startProgress + 0.1;

        // Fade the toolbox item out as its corresponding form field animates in
        const opacity = useTransform(
          scrollYProgress,
          [startProgress, endProgress],
          [0.8, 0] // Start semi-transparent, fade to invisible
        );

        return (
          <motion.div style={{ opacity }} key={item.id}>
            {item.label === "Paragraph" && (
              <Card
                key={item.type}
                className="cursor-grab bg-background border rounded-lg border-black/50 hover:shadow-md active:cursor-grabbing"
              >
                <div className="flex items-center gap-2 p-3">
                  <div className="bg-black/5  p-2 rounded-lg hidden xl:block">
                    <Type className="w-6 h-6" />
                  </div>
                  <div className="text-sm flex flex-col flex-1 gap-1">
                    <p className="font-semibold">Paragraph</p>
                    <p className="text-xs opacity-70">
                      Add body text, descriptions, or detailed content
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {item.label === "Heading" && (
              <Card
                key={item.type}
                className="cursor-grab bg-background border rounded-lg border-black/50 hover:shadow-md active:cursor-grabbing"
              >
                <div className="flex items-center gap-2 p-3">
                  <div className="bg-black/5  p-2 rounded-lg hidden xl:block">
                    <Heading1 className="w-6 h-6" />
                  </div>
                  <div className="text-sm flex flex-col flex-1 gap-1">
                    <p className="font-semibold">Heading 1</p>
                    <p className="text-xs opacity-70">
                      Main title or primary heading for sections
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {item.label === "Link to Web Page" && (
              <Card
                key={item.type}
                className="cursor-grab bg-background border rounded-lg border-dashed border-black/50 hover:shadow-md active:cursor-grabbing"
              >
                <div className="px-3 font-bold pt-2 items-center gap-2 text-sm flex">
                  <Workflow className="w-3 h-3" />
                  Knowledge Base
                </div>
                <div className="flex items-center gap-2 p-3 pt-1">
                  <div className="bg-black/5  p-2 rounded-lg hidden xl:block">
                    <Blocks className="w-6 h-6" />
                  </div>
                  <div className="text-sm flex flex-col flex-1 gap-1">
                    <p className="font-semibold">Link to Web Page</p>
                    <p className="text-xs opacity-70">
                      Add a link to a web page to search for relevant content
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {item.label === "System Prompt" && (
              <Card
                key={item.type}
                className="cursor-grab bg-background border border-dashed rounded-lg border-black/50 hover:shadow-md active:cursor-grabbing"
              >
                <div className="px-3 font-bold pt-2 items-center gap-2 text-sm flex">
                  <Workflow className="w-3 h-3" />
                  OpenAI Chat
                </div>
                <div className="flex items-center gap-2 p-3 pt-1">
                  <div className="bg-black/5  p-2 rounded-lg hidden xl:block">
                    <Blocks className="w-6 h-6" />
                  </div>
                  <div className="text-sm flex flex-col flex-1 gap-1">
                    <p className="font-semibold">System Prompt</p>
                    <p className="text-xs opacity-70">
                      Add a system prompt to guide the AI agent
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {item.label === "Select" && (
              <Card
                key={item.type}
                className="cursor-grab bg-background border border-dashed rounded-lg border-black/50 hover:shadow-md active:cursor-grabbing"
              >
                <div className="px-3 font-bold pt-2 items-center gap-2 text-sm flex">
                  <Workflow className="w-3 h-3" />
                  OpenAI Chat
                </div>
                <div className="flex items-center gap-2 p-3 pt-1">
                  <div className="bg-black/5  p-2 rounded-lg hidden xl:block">
                    <Blocks className="w-6 h-6" />
                  </div>
                  <div className="text-sm flex flex-col flex-1 gap-1">
                    <p className="font-semibold">Select model</p>
                    <p className="text-xs opacity-70">
                      Select your OpenAI model to generate responses
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
