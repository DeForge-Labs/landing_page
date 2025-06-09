"use client";

import useTemplate from "@/hooks/useTemplate";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { CopyX } from "lucide-react";
import TemplateCard from "./TemplateCard";

export default function TemplateList() {
  const { templates, loading, getTemplates } = useTemplate();

  useEffect(() => {
    getTemplates();
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

  if (!templates.length) {
    return (
      <section className="py-16 md:py-20">
        <div className="container h-[561.63px] flex flex-col items-center justify-center">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-black/10">
            <CopyX className="h-5 w-5 text-black" />
          </div>
          <p className="text-black/60 mt-4 text-center">
            Pssst! Quite empty here
            <br />
            Visit again to see some templates
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
