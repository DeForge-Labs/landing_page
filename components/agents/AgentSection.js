import Container from "../ui/container";
import AgentCarousel from "./AgentCarousel";
import SearchBox from "./SearchBox";
import CategoryList from "./CategoryList";
import Image from "next/image";
import TemplateList, { TemplateListSkeleton } from "./TemplateList";
import { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function AgentSection({ searchParams, category }) {
  const params = await searchParams;
  const page = params?.p || 1;
  const query = params?.q || "";
  const activeCategory = category;

  return (
    <Container className="pb-20 md:pb-16 !px-4 sm:!px-20 gap-16 flex flex-col min-h-screen">
      <nav className="hidden" aria-hidden="true">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {category ? (
                <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>Agents</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {category && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{category}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
      <div className="flex flex-col items-center justify-center z-10 py-24 relative w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#DFE0E8_1.2px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="relative mb-6 flex items-center gap-2">
          <Image
            src="/logo/Deforge.png"
            alt="Logo"
            width={35}
            height={35}
            className="shadow-md shadow-[#8754ff] rounded-md"
            aria-hidden
          />
          <h1 className="text-4xl font-bold text-center">
            Agents <span className="hidden">Marketplace</span>{" "}
          </h1>
          <div className="text-xs absolute top-9 right-0">
            by <span className="font-bold">Deforge</span>
          </div>
        </div>
        <p className="text-md text-gray-600 max-w-xl text-center mb-5">
          Explore our curated collection of pre-built AI agents and templates
          created by the Deforge community.
        </p>

        <AgentCarousel />

        <SearchBox />

        <CategoryList />
      </div>

      <Suspense
        fallback={<TemplateListSkeleton />}
        key={`${page}-${query}-${activeCategory}`}
      >
        <TemplateList page={page} query={query} category={activeCategory} />
      </Suspense>
    </Container>
  );
}
