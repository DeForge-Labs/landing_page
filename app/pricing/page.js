import PricingSection from "@/components/pricing/Pricing";

export async function generateMetadata() {
  return {
    title: "Pricing | Deforge",
    description: `Affordable and flexible pricing plans for everyone.`,
    keywords: ["AI Agents", "Workflows", "Automation Templates"],
    alternates: {
      canonical: "https://deforge.io/pricing",
    },
    openGraph: {
      title: `Pricing`,
      description: `Affordable and flexible pricing plans for everyone.`,
      images: ["/logo/Pricing.jpg"],
    },
  };
}

const Pricing = () => {
  return <PricingSection />;
};

export default Pricing;
