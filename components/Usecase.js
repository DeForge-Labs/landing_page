import {
  Bot,
  Building2,
  BarChartIcon as ChartBar,
  FileText,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import StickyScrollSection from "./ui/stickyScrollReveal";

export default function UseCases() {
  const useCases = [
    {
      icon: <Bot />,
      title: "Customer Service",
      description:
        "Build intelligent customer service agents that handle inquiries, resolve issues, and escalate when needed.",
    },
    {
      icon: <FileText />,
      title: "Content Generation",
      description:
        "Create AI workflows that generate, edit, and optimize content across multiple platforms and formats.",
    },
    {
      icon: <ChartBar />,
      title: "Data Analysis",
      description:
        "Develop agents that process, analyze, and visualize data, providing actionable insights automatically.",
    },
    {
      icon: <ShieldCheck />,
      title: "Web3 & Blockchain",
      description:
        "Build decentralized applications with AI agents that interact with smart contracts and blockchain data.",
    },
    {
      icon: <Building2 />,
      title: "Enterprise Automation",
      description:
        "Automate complex business processes by connecting AI to your existing tools and workflows.",
    },
    {
      icon: <ShoppingCart />,
      title: "E-commerce",
      description:
        "Create personalized shopping experiences with AI agents that recommend products and assist customers.",
    },
  ];

  return (
    <section id="use-cases" className="pt-16 md:pt-20">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Endless Possibilities
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover how Deforge can transform your industry with AI-powered
            solutions
          </p>
        </div>

        <InfiniteMovingCards items={useCases} direction="right" speed="slow" />
      </div>
    </section>
  );
}
