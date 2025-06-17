import BlogBody from "@/components/blog/BlogBody";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;

  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_API_URL}/get/blog/${slug}`
  ).then((res) => res.json());

  return {
    title: blog.blog.title,
    description: blog.blog.excerpt,
    openGraph: {
      title: blog.blog.title,
      description: blog.blog.excerpt,
      images: [
        {
          url: blog.blog.image,
          width: 1200,
          height: 800,
          alt: blog.blog.title,
        },
      ],
    },
  };
}

export default function BlogPostPage() {
  return <BlogBody />;
}
