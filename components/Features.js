import FeatureCard from "./FeatureCard";
import { Layers, Braces, Zap, Code2, Cpu, LinkIcon } from "lucide-react";
import Container from "./ui/container";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="border-b border-dashed border-black/50">
      <Container className="flex flex-col gap-16 py-20 !px-20">
        <div className="text-center space-y-2">
          <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 rounded-xl">
            Features
          </Badge>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Everything you need to build sophisticated AI agents without the
            complexity. Deploy your AI agents with a single click and scale
            automatically as needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={
              <Image src="/icons/Show.png" alt="Logo" width={40} height={40} />
            }
            title="Visual Node Editor"
            description="Drag, drop, and connect nodes to build your AI agent's logic flow with our intuitive visual editor."
          />
          <FeatureCard
            icon={
              <Image src="/icons/Star.png" alt="Logo" width={40} height={40} />
            }
            title="Multi-Model Support"
            description="Connect to GPT-4, Claude, Llama, and other LLMs through a unified interface."
          />

          <FeatureCard
            icon={
              <Image src="/icons/Paper.png" alt="Logo" width={40} height={40} />
            }
            title="Pre-built Forms"
            description="Choose from dozens of pre-built forms and deploy them with a single click."
          />

          <FeatureCard
            icon={
              <Image
                src="/icons/Activity.png"
                alt="Logo"
                width={40}
                height={40}
              />
            }
            title="Custom Logic (No Code)"
            description="Create complex decision trees and conditional logic without writing any code."
          />
          <FeatureCard
            icon={
              <Image src="/icons/Chat2.png" alt="Logo" width={40} height={40} />
            }
            title="Chat to Build"
            description="Chat to build your AI agent's logic flow with our intuitive visual editor."
          />
          <FeatureCard
            icon={
              <Image src="/icons/Arrow.png" alt="Logo" width={40} height={40} />
            }
            title="One-Click Deployment"
            description="Deploy your AI agents to production with a single click and scale automatically as needed."
          />
        </div>
      </Container>
    </section>
  );
}
