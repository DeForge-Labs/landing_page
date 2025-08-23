"use client";

import { Search, X } from "lucide-react";
import { Button, Input, Chip } from "@heroui/react";

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
          className=" text-black"
          classNames={{
            inputWrapper:
              "bg-background border border-black/50 group-data-[focus=true]:bg-background data-[hover=true]:bg-background text-black",
            input: "bg-background group-data-[has-value=true]:text-black",
          }}
          startContent={<Search className="h-4 w-4 text-black" />}
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => onCategoryChange("All")}
            className="bg-black/5"
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
              onClick={() => onCategoryChange(category)}
              className="bg-black/5"
              style={{
                border: selectedCategory === category ? "1px solid black" : "",
                color: selectedCategory === category ? "black" : "inherit",
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Tags */}
      {/* <div className="space-y-2">
        <h3 className="text-sm font-medium">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Chip
              key={tag}
              className="cursor-pointer hover:bg-black/5 text-xs bg-black/5 p-2 text-black rounded-lg capitalize"
              onClick={() => onTagToggle(tag)}
              style={{
                border: selectedTags.includes(tag) ? "1px solid black" : "",
                color: selectedTags.includes(tag) ? "black" : "inherit",
              }}
            >
              {tag}
            </Chip>
          ))}
        </div>
      </div> */}

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="flex items-center gap-2 bg-black/80 text-background"
        >
          <X className="h-3 w-3" />
          Clear Filters
        </Button>
      )}
    </div>
  );
}
