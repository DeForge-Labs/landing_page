export async function generateMetadata({ params, searchParams }, parent) {
  try {
    // Handle params based on Next.js version
    const { slug } = await params;

    // Add error handling for the API call
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BLOG_API_URL}/get/blog/${slug}`,
      {
        // Add cache control if needed
        cache: "no-store", // or 'force-cache' depending on your needs
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    const blog = await response.json();

    // Validate the blog data
    if (!blog?.blog) {
      throw new Error("Blog data not found");
    }

    // Get parent metadata to inherit base URL
    const previousMetadata = await parent;

    return {
      title: blog.blog.title,
      description: blog.blog.excerpt,
      // Inherit metadataBase from parent
      metadataBase: previousMetadata.metadataBase,
      openGraph: {
        title: blog.blog.title,
        description: blog.blog.excerpt,
        url: `https://deforge.io/blog/${slug}`,
        siteName: "Deforge.io",
        type: "article",
        images: [
          {
            url: blog.blog.image,
            width: 1200,
            height: 800,
            alt: blog.blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.blog.title,
        description: blog.blog.excerpt,
        images: [blog.blog.image],
        creator: "@Deforge_io",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);

    // Return fallback metadata
    return {
      title: "Blog Post - Deforge.io",
      description: "Build AI Agents Visually, No Code Required",
      openGraph: {
        title: "Blog Post - Deforge.io",
        description: "Build AI Agents Visually, No Code Required",
        url: `https://deforge.io/blog/${(await params).slug}`,
        siteName: "Deforge.io",
        type: "article",
      },
    };
  }
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
