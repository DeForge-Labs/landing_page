import { generateCategorySlug } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

const categoryList = [
  "General",
  "Customer Support",
  "Career & Job Search",
  "Social Media Automation",
  "Productivity",
  "Content Creation",
  "Ecommerce",
  "Social Media & Marketing",
  "Utilities",
  "Audio & Content Creation",
  "Misc",
  "Programming",
];

export default async function sitemap() {
  const baseUrl = "https://deforge.io";

  const staticRoutes = [
    "",
    "/agents",
    "/pricing",
    "/about-us",
    "/ToS",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categoryList.map((cat) => ({
    url: `${baseUrl}/agents/categories/${generateCategorySlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  let agentRoutes = [];
  try {
    const response = await fetch(
      `https://api.deforge.io/api/template/global?limit=1000`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "DeforgeSitemapGenerator/1.0",
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (data?.success && data?.templates) {
      agentRoutes = data.templates
        .filter((t) => t.slug)
        .map((template) => ({
          url: `${baseUrl}/agents/${template.slug}`,
          lastModified: new Date(template.updatedAt || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
        }));
    }
  } catch (error) {
    console.error("Sitemap API Fetch Failed:", error);
  }

  const externalRoutes = [
    "https://app.deforge.io/templates",
    "https://status.deforge.io",
    "https://blogs.deforge.io",
    "https://docs.deforge.io",
  ].map((url) => ({
    url: url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...agentRoutes,
    ...externalRoutes,
  ];
}
