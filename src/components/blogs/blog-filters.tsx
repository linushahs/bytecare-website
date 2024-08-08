"use client";

import { Category } from "@/sanity/groq/interface";
import Button from "../ui/button";

function BlogFilters({
  categories,
  selectedCategory,
  onFilterChange,
}: {
  categories: Category[];
  selectedCategory: string;
  onFilterChange: (categoryId: string) => void;
}) {
  return (
    <div className="flex gap-6 mb-10 w-full flex-wrap justify-center sm:flex-nowrap">
      {[{ _id: "1", title: "All posts" },...categories].map((category) => (
        <Button
          key={category._id}
          variant={category._id === selectedCategory ? "default" : "outline"}
          color={category._id === selectedCategory ? "primary" : "fill"}
          onClick={() => onFilterChange(category._id)}
          className="py-3 rounded-full capitalize "
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default BlogFilters;
