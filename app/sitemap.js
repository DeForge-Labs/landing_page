const sitemap = () => {
  return [
    {
      url: "https://deforge.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: "https://deforge.io/agents",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    {
      url: "https://status.deforge.io",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },

    {
      url: "https://app.deforge.io/ToS",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://app.deforge.io/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://app.deforge.io/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://deforge.io/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: "https://deforge.io/blog/introducing-deforge-the-visual-no-code-builder",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://deforge.io/blog/introducing-deforge-forms-ai-agents-with-one-click",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://deforge.io/blog/deforge-is-now-in-open-beta",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: "https://deforge.io/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
};

export default sitemap;
