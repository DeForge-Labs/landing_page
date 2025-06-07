"use client";

import useBlog from "@/hooks/useBlog";
import { useEffect } from "react";
import { Chip } from "@heroui/react";
import { Calendar, Clock, CopyX, Loader2, User } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function BlogList() {
  const { blogs, loading, getList } = useBlog();
  const router = useRouter();

  useEffect(() => {
    getList();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container h-[561.63px] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </section>
    );
  }

  if (!blogs.length) {
    return (
      <section className="py-16 md:py-20">
        <div className="container h-[561.63px] flex flex-col items-center justify-center">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-black/10">
            <CopyX className="h-5 w-5 text-black" />
          </div>
          <p className="text-black/60 mt-4 text-center">
            Pssst! Quite empty here
            <br />
            Visit again to see some blogs
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group rounded-lg border border-black/50 hover:border-black bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img
                  src={
                    blog.image ||
                    "/placeholder.svg?height=200&width=400&text=Blog+Post"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-black/80">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold group-hover:text-black text-black/80 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-black/60 line-clamp-3">{blog.excerpt}</p>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-black/70" />
                    <span className="text-sm text-black/70">{blog.author}</span>
                  </div>
                  <Chip className="rounded-lg text-xs text-black/70 bg-black/10">
                    <span className="font-medium">{blog.category}</span>
                  </Chip>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-black group-hover:bg-black/80 group-hover:text-white transition-colors"
                  onPress={() => {
                    router.push(`/blog/${blog.slug}`);
                  }}
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
