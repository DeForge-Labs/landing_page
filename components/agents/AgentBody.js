"use client";

import { useState, useMemo } from "react";
import { templates, categories, allTags } from "@/lib/template-data";
import { TemplateCard } from "./TemplateCard";
import { TemplateFilters } from "./TemplateFilters";
import Container from "../ui/container";
import { Badge } from "../ui/badge";

export default function AgentBody() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || template.category === selectedCategory;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => template.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTags([]);
  };

  return (
    <Container className="container mx-auto px-4 py-16 flex flex-col gap-16 sm:!px-20">
      <div className=" text-center space-y-2 flex flex-col items-center">
        <Badge className="bg-secondary border border-black/50 text-black/50 px-3 py-1 mt-5 ml-5 rounded-xl">
          Templates
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter">
          Deforge <span className="text-black">Agents</span>
        </h1>
        <p className="text-black/60 text-sm max-w-2xl">
          Deploy pre-built AI agents to automate your workflows in seconds by
          simply filling <span className="text-black font-bold">forms</span>.
          From customer support to content creation, find the perfect agent for
          your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <TemplateFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              categories={categories}
              tags={allTags}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Showing {filteredTemplates.length} of {templates.length} templates
            </p>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-2">
                No templates found
              </p>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
