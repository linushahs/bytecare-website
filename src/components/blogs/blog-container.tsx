"use client";

import { Blog, Category } from "@/sanity/groq/interface";
import { filterBlogPosts } from "@/sanity/service";
import { useEffect, useState } from "react";
import BlogList from "../blog-list";
import BlogFilters from "./blog-filters";

function BlogContainer({
  initialPosts,
  categories,
}: {
  initialPosts: Blog[];
  categories: Category[];
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState("1");

  useEffect(() => {
    const fetchPosts = async () => {
      if (selectedCategory === "1") {
        setPosts(initialPosts);
        return;
      }

      const res = await filterBlogPosts(selectedCategory);
      setPosts(res);
    };

    fetchPosts();
  }, [selectedCategory]);

  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  console.log(posts);

  return (
    <>
      <div className="flex flex-col gap-10 mt-16 relative z-[3]">
        <BlogFilters
          categories={categories}
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory}
        />
      </div>

      <BlogList blogs={posts} />
    </>
  );
}

export default BlogContainer;
