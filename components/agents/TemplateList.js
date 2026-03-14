import { cookies } from "next/headers";
import { DynamicIcon } from "lucide-react/dynamic";
import { GitBranch, GlobeLock, User } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import PageSection from "./PageSection";

export default async function TemplateList({ page, query, category }) {
  const getGlobalTemplates = async () => {
    try {
      const cookieStore = await cookies();
      const allCookies = cookieStore.getAll();

      const cookieHeader = allCookies
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; ");

      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL || process.env.API_URL
        }/template/global${category ? `/${category}` : ""}?page=${page || 1}&query=${query || ""}&limit=12`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie: cookieHeader,
          },
          credentials: "include",
        },
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const globalTemplatesData = await getGlobalTemplates();

  if (!globalTemplatesData || !globalTemplatesData?.success) {
    return (
      <div className="w-full px-4 flex justify-center py-20 mx-auto">
        <p className="text-foreground/70 text-sm">
          {globalTemplatesData?.message || "Failed to load templates."}
        </p>
      </div>
    );
  }

  const templates = globalTemplatesData.templates || [];

  return (
    <div className="w-full mx-auto -mt-16">
      {templates.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full bg-foreground/2 w-full border border-foreground/15 border-dashed rounded-md p-4 py-6 gap-2">
          <div className="p-4 bg-background rounded-sm border border-foreground/15">
            <GlobeLock className="w-5 h-5 opacity-70" />
          </div>
          <p className="text-center text-foreground/70 text-sm mt-2">
            No Templates found.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {templates.map((template, index) => (
          <Link href={`/agents/${template.slug}`} key={index}>
            <Card className="group border border-foreground/15 hover:border-foreground/30 hover:shadow-md bg-background transition-colors cursor-pointer h-full flex flex-col overflow-hidden">
              <CardHeader className="">
                <div className="flex items-start justify-between mb-3">
                  <div className="rounded-lg p-3 bg-foreground/5 border border-foreground/10 group-hover:bg-foreground/10 transition-colors">
                    <DynamicIcon
                      name={template.iconId}
                      className="size-5 text-foreground/80"
                    />
                  </div>
                  <div className="px-2.5 py-1 rounded-sm bg-background border border-foreground/15 text-[11px] font-medium text-muted-foreground whitespace-nowrap">
                    {template?.category}
                  </div>
                </div>
                <CardTitle className="relative w-full">
                  <p
                    className={cn(
                      "font-medium text-lg text-foreground tracking-tight",
                      template?.name?.length > 30 && "cursor-help",
                    )}
                  >
                    {template?.name?.length > 30
                      ? template?.name?.slice(0, 30) + "..."
                      : template?.name}
                  </p>

                  {template?.name?.length > 30 && (
                    <span className="pointer-events-none absolute left-0 -top-8 w-max max-w-xs scale-0 rounded-lg bg-background p-2 px-3 text-xs text-foreground/90 border border-foreground/15 transition-all group-hover:scale-100 z-50">
                      {template?.name}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between pt-0 -mt-5">
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {template?.description}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <User className="size-3.5 opacity-70" />
                    <span className="truncate max-w-[120px]">
                      {template?.author?.name ||
                        template?.author ||
                        "Deforge User"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <GitBranch className="size-3.5 opacity-70" />
                    <span>{template?.totalClones || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center w-full mt-4">
        <PageSection
          totalPages={globalTemplatesData.totalPages}
          totalWorkspaces={globalTemplatesData.totalTemplates}
          page={page}
          query={query}
          category={category}
          route="agents"
          topLimit={12}
        />
      </div>
    </div>
  );
}

export function TemplateListSkeleton() {
  return (
    <div className="w-full max-w-[1390px] px-4 mx-auto -mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card
            key={i}
            className="rounded-xl border border-foreground/15 bg-background transition-colors h-full flex flex-col overflow-hidden animate-pulse"
          >
            <CardHeader className="">
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-foreground/10 w-11 h-11" />
                <div className="h-[22px] w-[86px] bg-foreground/10 rounded-sm" />
              </div>
              <div className="h-7 bg-foreground/10 w-3/4 rounded mt-1" />
            </CardHeader>
            <CardContent className="flex flex-col flex-1 justify-between pt-0 -mt-5">
              <div className="space-y-2 mt-4">
                <div className="h-4 bg-foreground/10 w-full rounded" />
                <div className="h-4 bg-foreground/10 w-2/3 rounded" />
              </div>
              <div className="flex items-center gap-4 mt-auto pt-4">
                <div className="h-4 w-24 bg-foreground/10 rounded" />
                <div className="h-4 w-12 bg-foreground/10 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
