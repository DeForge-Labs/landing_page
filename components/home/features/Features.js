import Image from "next/image";

import { Badge } from "../../ui/badge";
import Container from "../../ui/container";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    icon: "/icons/Show.png",
    title: "Visual Node Editor",
    description:
      "Drag, drop, and connect nodes to build your AI agent's logic flow with our intuitive visual editor.",
  },

  {
    icon: "/icons/Star.png",
    title: "Multi-Model Support",
    description:
      "Connect to GPT-4, Claude, Llama, and other LLMs through a unified interface.",
  },

  {
    icon: "/icons/Paper.png",
    title: "Pre-built Forms",
    description:
      "Choose from dozens of pre-built forms and deploy them with a single click.",
  },

  {
    icon: "/icons/Activity.png",
    title: "Custom Logic (No Code)",
    description:
      "Create complex decision trees and conditional logic without writing any code.",
  },

  {
    icon: "/icons/Chat2.png",
    title: "Chat to Build",
    description:
      "Chat to build your AI agent's logic flow with our intuitive visual editor.",
  },

  {
    icon: "/icons/Arrow.png",
    title: "One-Click Deployment",
    description:
      "Deploy your AI agents to production with a single click and scale automatically as needed.",
  },
];

const Features = () => {
  return (
    <section id="features" className="border-b border-dashed border-black/50">
      <Container
        showGlow={false}
        className="flex flex-col gap-16 py-12 sm:py-20 sm:px-20! px-4!"
      >
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
          {FEATURES.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={<Image width={40} height={40} src={f.icon} alt={f.title} />}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
