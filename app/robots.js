export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: [
      "https://deforge.io/sitemap.xml",
      "https://deforge.io/agents/sitemap.xml",
    ],
  };
}
