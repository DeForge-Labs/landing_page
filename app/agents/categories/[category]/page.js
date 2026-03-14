import AgentSection from "@/components/agents/AgentSection";

import { generateCategorySlug } from "@/lib/utils";

const categoryListItems = [
  { value: "General" },
  { value: "Customer Support" },
  { value: "Career & Job Search" },
  { value: "Social Media Automation" },
  { value: "Productivity" },
  { value: "Content Creation" },
  { value: "Ecommerce" },
  { value: "Social Media & Marketing" },
  { value: "Utilities" },
  { value: "Audio & Content Creation" },
  { value: "Misc" },
  { value: "Programming" },
];

export async function generateMetadata({ params }) {
  const p = await params;
  const decodedCategory = decodeURIComponent(p?.category);
  const officialName = decodedCategory.replace(/-/g, " ");

  return {
    title: `Best ${officialName} AI Agents & Templates | Deforge`,
    description: `Discover top-rated AI agents for ${officialName}. Clone and deploy powerful automation workflows in seconds with Deforge.`,
    keywords: [officialName, "AI Agents", "Workflows", "Automation Templates"],
    alternates: {
      canonical: `https://deforge.io/agents/categories/${decodedCategorySlug}`,
    },
    openGraph: {
      title: `${officialName} AI Agents`,
      description: `Explore and deploy ${officialName} AI agents.`,
      images: ["/logo/Cover.jpg"],
    },
  };
}

const CategoryAgent = async ({ params, searchParams }) => {
  const p = await params;
  const decodedCategorySlug = decodeURIComponent(p?.category);

  const resolvedCategoryObj = categoryListItems.find(
    (c) => generateCategorySlug(c.value) === decodedCategorySlug,
  );

  const officialCategoryName = resolvedCategoryObj
    ? resolvedCategoryObj.value
    : decodedCategorySlug;

  return (
    <AgentSection searchParams={searchParams} category={officialCategoryName} />
  );
};

export default CategoryAgent;
