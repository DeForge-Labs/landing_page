import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  GitBranch,
  User,
  Workflow,
  FormInput,
  Calendar,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { generateCategorySlug } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateMetadata({ params }) {
  const p = await params;
  const templateData = await getTemplate(p?.id);

  if (!templateData?.success || !templateData?.template) {
    return { title: "Agent Not Found | Deforge" };
  }

  const { name, category, slug, totalClones } = templateData.template;

  const ogImageUrl = `${process.env.NEXT_PUBLIC_API_URL}/og/template?title=${name}&category=${category}&clones=${totalClones}`;

  return {
    title: `${name} - AI Agent Template | Deforge`,
    description: templateData.template.description,
    openGraph: {
      title: name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      tags: [...name.split(" "), "AI Agent", "Template", "Deforge", category],
    },
    alternates: {
      canonical: `https://deforge.io/agents/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImageUrl],
    },
  };
}

async function getTemplate(slug) {
  try {
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    const cookieHeader = allCookies
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join("; ");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || process.env.API_URL}/template/get/slug/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie: cookieHeader,
        },
        credentials: "include",
        cache: "no-store",
      },
    );
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function AgentPage({ params }) {
  const p = await params;
  const slug = p?.id;

  if (!slug) redirect("/agents");

  const templateData = await getTemplate(slug);

  if (!templateData || !templateData.success) {
    notFound();
  }

  const template = templateData.template;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: template.name,
    description: template.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Organization",
      name: template.author?.name || template.author || "Deforge",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: template.totalClones || 1,
    },
  };

  return (
    <Container className="pb-20 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#DFE0E8_1.2px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <nav className="w-full max-w-6xl mx-auto mb-8 px-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
            </BreadcrumbItem>
            {template.category && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/agents/categories/${generateCategorySlug(template.category)}`}
                  >
                    {template.category}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[150px] sm:max-w-[300px] truncate">
                {template.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <main className="lg:col-span-8 flex flex-col gap-8">
          <section className="flex flex-col items-start gap-4">
            <div className="flex sm:flex-row flex-col gap-4">
              <div className="rounded-lg p-4 bg-foreground/5 h-fit w-fit border border-foreground/10 shadow-inner">
                <DynamicIcon
                  name={template.iconId}
                  className="size-10 text-primary"
                />
              </div>
              <div className="flex flex-col gap-2 mt-0.5">
                <Badge className="w-fit border-foreground/10 px-2 py-0.5 bg-foreground/5 text-foreground">
                  {template.category}
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {template.name}
                </h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-2">
              {template.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="size-3 text-primary" />
                </div>
                <span>
                  By{" "}
                  <span className="font-semibold text-foreground">
                    {template.author?.name || template.author || "Deforge Team"}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="size-4 opacity-70" />
                <span>{template.totalClones || 0} active deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 opacity-70" />
                <span>
                  Updated {new Date(template.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </section>

          <Separator className="bg-foreground/10" />

          <section className="grid gap-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Workflow className="w-6 h-6 text-primary" /> Agent Architecture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-6 rounded-md border border-foreground/10 bg-background">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Layers className="size-4 text-muted-foreground" /> Workflow
                  Logic
                </h3>
                <p className="text-sm text-muted-foreground">
                  Powered by{" "}
                  <span className="text-foreground font-semibold">
                    {template.workflow?.nodes?.length || 0} functional nodes
                  </span>{" "}
                  designed for {template.category.toLowerCase()} automation.
                </p>
              </div>

              {template.form && (
                <div className="p-6 rounded-md border border-foreground/10 bg-background">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <FormInput className="size-4 text-muted-foreground" />{" "}
                    Interface
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Includes a pre-configured UI schema for user data collection
                    and trigger management.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-4 border rounded-lg overflow-hidden border-foreground/10 bg-background">
              <div className="bg-foreground/5 px-4 py-3 border-b border-foreground/10 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Logic Blueprint
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] uppercase shadow-inner px-2 py-0.5 border-foreground/10 rounded-sm"
                >
                  v{template.workflow?.version || 1.0}
                </Badge>
              </div>
              <div className="p-6 bg-background grid gap-4">
                {template.workflow?.nodes?.slice(0, 5).map((node, i) => (
                  <div
                    key={node.id}
                    className="flex items-center gap-4 text-sm"
                  >
                    <div className="size-6 rounded-full bg-foreground/5 border flex items-center justify-center text-[10px] font-mono">
                      0{i + 1}
                    </div>
                    <span className="font-medium capitalize">
                      {node.data?.label || node.type.replace("_", " ")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
                  </div>
                ))}
                {template.workflow?.nodes?.length > 5 && (
                  <p className="text-xs text-muted-foreground italic pl-10">
                    + {template.workflow.nodes.length - 5} more specialized
                    nodes
                  </p>
                )}
              </div>
            </div>
          </section>
        </main>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="p-8 pb-7 rounded-lg border border-primary/20 bg-background shadow-md relative overflow-hidden">
              <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full blur-2xl" />

              <h3 className="text-xl font-bold mb-4">Deploy Agent</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "No-code setup",
                  "Production ready",
                  "Easily customizable",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="size-4 text-green-500" /> {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={`${process.env.NEXT_PUBLIC_APP_URL}/templates/${template.id}`}
                target="_blank"
              >
                <Button
                  className="w-full py-4 text-lg font-medium shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
                  size="lg"
                >
                  Use this Template
                </Button>
              </Link>

              <p className="text-[11px] text-center text-muted-foreground mt-2 tracking-tighter">
                Requires a Deforge account
              </p>
            </div>

            <div className="p-6 rounded-lg border border-foreground/20 bg-background">
              <h4 className="text-sm font-semibold mb-3">Quick Specs</h4>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">{template.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Environment</span>
                  <span className="font-medium">Global / Edge</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-medium">
                    {template.workflow?.status || "Active"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
