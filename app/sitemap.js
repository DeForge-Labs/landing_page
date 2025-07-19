export default function sitemap() {
    return [
        {
            url: "https://deforge.io",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: "https://deforge.io/templates",
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: "https://deforge.io/blog",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: "https://deforge.io/blog/introducing-deforge-the-visual-no-code-builder",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}