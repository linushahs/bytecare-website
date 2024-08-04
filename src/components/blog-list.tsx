import React from "react";
import Pagination from "./ui/pagination";
import Button from "./ui/button";
import Image from "next/image";
import BlogCard from "./blog-card";
import { ThreeColumnLayout } from "./ui/column-layout";

export default function BlogList() {
  const showLists = true;
  return showLists ? (
    <>
      <div className="pt-8">
        <ThreeColumnLayout className="gap-16 pb-16 border-b border-white/10">
          {new Array(12).fill(0).map((el) => (
            <BlogCard
              key={el}
              slug={el}
              sizes="(min-width: 768px) 50vw, (min-width:1024px: 33vw), 100vw"
            />
          ))}
        </ThreeColumnLayout>
      </div>
      <div className="py-8">
        <Pagination />
      </div>
    </>
  ) : (
    <NoBlogResults />
  );
}

function NoBlogResults() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-col items-center gap-y-8">
        <figure className="relative w-full max-w-md aspect-square">
          <Image fill src="/img/blog-search.webp" alt="no-blog-found" />
        </figure>
        <div className="text-center">
          <h3 className="text-2xl font-bold leading-8 text-white font-heading">
            No Blog Results!
          </h3>
          <p className="mt-4 mb-6 leading-6 text-foreground">
            It seems our blog is keeping secrets today—no results found for your
            search. Don&apos;t worry, though! There are still plenty of stories
            to discover.
          </p>
          <Button className="mx-auto">Read Latest Post</Button>
        </div>
      </div>
    </div>
  );
}
