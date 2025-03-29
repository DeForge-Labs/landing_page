import FeatureCard from "./FeatureCard";
import { Layers, Braces, Zap, Code2, Cpu, LinkIcon } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="pt-16 md:pt-20">
      <div className="container space-y-12 md:space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to build sophisticated AI agents without the
            complexity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={<Layers />}
            title="Visual Node Editor"
            description="Drag, drop, and connect nodes to build your AI agent's logic flow with our intuitive visual editor."
          />
          <FeatureCard
            icon={<Braces />}
            title="Pre-built Components"
            description="Choose from dozens of pre-built AI components including LLM integrations, memory systems, and more."
          />
          <FeatureCard
            icon={<Zap />}
            title="One-Click Deployment"
            description="Deploy your AI agents to production with a single click and scale automatically as needed."
          />
          <FeatureCard
            icon={<Code2 />}
            title="Custom Logic (No Code)"
            description="Create complex decision trees and conditional logic without writing any code."
          />
          <FeatureCard
            icon={<Cpu />}
            title="Multi-Model Support"
            description="Connect to GPT-4, Claude, Llama, and other LLMs through a unified interface."
          />
          <FeatureCard
            icon={<LinkIcon />}
            title="Blockchain Integration"
            description="Seamlessly connect your AI agents with blockchain networks and smart contracts for Web3 applications."
          />
        </div>
      </div>
    </section>
  );
}
