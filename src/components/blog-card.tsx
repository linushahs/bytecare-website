import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PARAGRAPH_TYPES, Paragraph } from "./ui/paragraph";
import Badge from "./ui/badge";
import { Blog } from "@/sanity/groq/interface";

interface BlogCardProps {
  blog: Omit<Blog, "relatedBlogs" | "body">;
  sizes: string;
}

export default function BlogCard({ blog, sizes }: BlogCardProps) {
  const { slug, mainImage, title, author, categories, summary } = blog;

  return (
    <article className="group">
      <Link href={`/blogs/${slug.current}`} className="space-y-6">
        <figure className="relative w-full overflow-hidden bg-gray-900 rounded-lg aspect-[5/3]">
          <Image
            alt="blog-card-cover"
            fill
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
            sizes={sizes}
            src={mainImage.asset.url}
          />
        </figure>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              {categories.slice(0, 2).map((category) => (
                <Badge title={category.title} />
              ))}
            </div>
            <p className="text-base font-normal text-textSecondary">
              5 mins read
            </p>
          </div>
          <h2 className="text-xl font-bold leading-8 text-white font-heading">
            {title}
          </h2>
          <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
            {summary.slice(0, 90) + "..."}
          </Paragraph>
          <p className="text-md font-semibold text-textSecondary">
            By {author.map((author) => author.name).join(", ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
