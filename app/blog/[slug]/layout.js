export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = await params;

  const blog = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_API_URL}/get/blog/${slug}`
  ).then((res) => res.json());

  console.log({
    title: blog.blog.title,
    description: blog.blog.excerpt,
    metadataBase: new URL("https://deforge.io/blog/" + slug),
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
  });

  return {
    title: blog.blog.title,
    description: blog.blog.excerpt,
    metadataBase: new URL("https://deforge.io/blog/" + slug),
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

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
