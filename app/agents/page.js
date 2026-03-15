import AgentSection from "@/components/agents/AgentSection";

export async function generateMetadata() {
  return {
    title: "AI Agents & Templates Marketplace | Deforge",
    description:
      "AI Agents and automation templates you can clone in seconds. Discover, customize, and deploy powerful AI workflows with Deforge.",
    keywords: [
      "AI Agents",
      "AI Automation Templates",
      "Workflow Templates",
      "No-Code AI Agents",
      "Clonable AI Agents",
    ],
    alternates: {
      canonical: "https://deforge.io/agents",
    },
    openGraph: {
      title: "AI Agents & Templates Marketplace | Deforge",
      description:
        "AI Agents and automation templates you can clone in seconds. Build your workflow with Deforge.",
      images: ["/logo/Agents.jpg"],
    },
  };
}

const Agent = ({ searchParams }) => {
  return <AgentSection searchParams={searchParams} />;
};

export default Agent;
