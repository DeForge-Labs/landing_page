import AgentSection from "@/components/agents/AgentSection";

export async function generateMetadata() {
  return {
    title: "Best AI Agents & Templates | Deforge",
    description: `Discover top-rated AI agents. Clone and deploy powerful automation workflows in seconds with Deforge.`,
    keywords: ["AI Agents", "Workflows", "Automation Templates"],
    alternates: {
      canonical: "https://deforge.io/agents",
    },
    openGraph: {
      title: `AI Agents`,
      description: `Discover top-rated AI agents. Clone and deploy powerful automation workflows in seconds with Deforge.`,
      images: ["/logo/Agents.jpg"],
    },
  };
}

const Agent = ({ searchParams }) => {
  return <AgentSection searchParams={searchParams} />;
};

export default Agent;
