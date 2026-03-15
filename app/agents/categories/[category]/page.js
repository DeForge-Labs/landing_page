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
  const decodedCategory = decodeURIComponent(p?.category || "");

  const officialName = decodedCategory
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${officialName} AI Agents & Templates | Deforge`,
    description: `${officialName} AI Agents and automation templates for your workflow. Clone, customize, and deploy powerful ${officialName} automations in seconds with Deforge.`,
    keywords: [
      officialName,
      "AI Agents",
      "Workflows",
      "Automation Templates",
      "No-Code AI",
    ],
    alternates: {
      canonical: `https://deforge.io/agents/categories/${decodedCategory}`,
    },
    openGraph: {
      title: `${officialName} AI Agents | Deforge`,
      description: `${officialName} AI Agents and automation templates built in minutes.`,
      url: `https://deforge.io/agents/categories/${decodedCategory}`,
      siteName: "Deforge",
      images: [
        {
          url: "/logo/Cover.jpg",
          width: 1200,
          height: 675,
          alt: `${officialName} AI Agents`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${officialName} AI Agents | Deforge`,
      description: `${officialName} AI Agents and automation templates built in minutes.`,
      images: ["/logo/Cover.jpg"],
    },
  };
}

const CategoryAgent = async ({ params, searchParams }) => {
  const p = await params;
  const decodedCategorySlug = decodeURIComponent(p?.category || "");

  const resolvedCategoryObj = categoryListItems.find(
    (c) => generateCategorySlug(c.value) === decodedCategorySlug,
  );

  const officialCategoryName = resolvedCategoryObj
    ? resolvedCategoryObj.value
    : decodedCategorySlug;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${officialCategoryName} AI Agents & Templates`,
    description: `A curated collection of the best AI agents and automation templates for ${officialCategoryName}.`,
    url: `https://deforge.io/agents/categories/${decodedCategorySlug}`,
    publisher: {
      "@type": "Organization",
      name: "Deforge",
      logo: "https://deforge.io/logo/logo-black.svg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AgentSection
        searchParams={searchParams}
        category={officialCategoryName}
      />
    </>
  );
};

export default CategoryAgent;
