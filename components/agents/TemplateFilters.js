"use client";

import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function TemplateFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagToggle,
  categories,
  tags,
  onClearFilters,
}) {
  const hasActiveFilters =
    searchQuery || selectedCategory !== "All" || selectedTags.length > 0;

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Input
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className=" text-black border border-black/50 rounded-sm py-1"
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onCategoryChange("All")}
            className="bg-black/5 text-xs font-normal"
            style={{
              border: selectedCategory === "All" ? "1px solid black" : "",
              color: selectedCategory === "All" ? "black" : "inherit",
            }}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant="outline"
              onClick={() => onCategoryChange(category)}
              className="bg-black/5 text-xs font-normal"
              style={{
                border: selectedCategory === category ? "1px solid black" : "",
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          size="sm"
          onClick={onClearFilters}
          className="flex items-center gap-2 bg-black/80 text-background py-1"
        >
          <X className="h-3 w-3" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
