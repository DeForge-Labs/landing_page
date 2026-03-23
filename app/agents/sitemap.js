export const dynamic = "force-dynamic";
export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = "https://deforge.io";
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
          changeFrequency: "daily",
          priority: 0.8,
        }));
    }
  } catch (error) {
    console.error("Sitemap API Fetch Failed:", error);
  }

  return agentRoutes;
}
