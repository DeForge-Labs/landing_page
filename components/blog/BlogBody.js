"use client";

import { Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";
import { Chip } from "@heroui/react";
import { Calendar, Clock, CopyX, Share2, User, Loader2 } from "lucide-react";
import MarkdownRenderer from "./markdownRenderer";
import useBlog from "@/hooks/useBlog";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogDataWithContent } from "@/lib/blog-data";

export default function BlogBody() {
  const [post, setPost] = useState(null);
  // const { getBlog, loading } = useBlog();
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    // const fetchPost = async () => {
    //   const post = await getBlog(slug);
    //   setPost(post);
    // };
    // fetchPost();

    const post = blogDataWithContent.find((post) => post.slug === slug);
    setPost(post);
  }, []);

  // if (loading) {
  //   return (
  //     <article className="py-16 md:py-20">
  //       <div className="container h-[561.63px] flex items-center justify-center">
  //         <Loader2 className="h-8 w-8 animate-spin" />
  //       </div>
  //     </article>
  //   );
  // }

  if (!post) {
    return (
      <section className="py-16 md:py-20">
        <div className="container h-[561.63px] flex flex-col items-center justify-center">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-black/10">
            <CopyX className="h-5 w-5 text-black" />
          </div>
          <p className="text-black/60 mt-4 text-center">
            Pssst! Quite empty here
            <br />
            <Button
              variant="outline"
              className="gap-2 text-sm bg-background mt-3 text-black border-black border"
              onPress={() => router.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className="py-16 md:py-20">
      <div className="container max-w-4xl">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="gap-2 text-sm bg-background text-black border-black border"
            onPress={() => router.push("/blog")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          <div className="space-y-4">
            <Chip className="rounded-lg text-xs text-black/70 bg-black/10">
              <span className="font-medium">{post.category}</span>
            </Chip>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {post.title}
            </h1>
            <p className="text-xl text-black/60">{post.excerpt}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 ml-auto text-sm bg-background text-black border-black border"
              onPress={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard");
              }}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          {post.image && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-black/40">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-black/60">Written by</p>
              <p className="font-medium">{post.author}</p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
