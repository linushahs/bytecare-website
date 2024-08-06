"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import { Category } from "@/sanity/groq/interface";

function BlogFilters({ categories }: { categories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]._id);

  return (
    <div className="flex gap-6 mb-10 w-full flex-wrap justify-center sm:flex-nowrap">
      {categories.map((category) => (
        <Button
          key={category._id}
          variant={category._id === selectedCategory ? "default" : "outline"}
          color={category._id === selectedCategory ? "primary" : "fill"}
          onClick={() => setSelectedCategory(category._id)}
          className="py-3 rounded-full capitalize "
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}

export default BlogFilters;
