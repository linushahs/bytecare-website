import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PARAGRAPH_TYPES, Paragraph } from "./ui/paragraph";
import Badge from "./ui/badge";

interface BlogCardProps {
  slug: string;
  sizes: string;
}

export default function BlogCard({ slug, sizes }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blogs/${slug}`} className="space-y-6">
        <figure className="relative w-full h-[310px] overflow-hidden bg-gray-900 rounded-lg aspect-video">
          <Image
            alt="blog-card-cover"
            fill
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
            sizes={sizes}
            src={
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </figure>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <Badge title="Design" />
            <p className="text-base font-normal text-textSecondary">
              5 mins read
            </p>
          </div>
          <h2 className="text-xl font-bold leading-8 text-white font-heading">
            Pros of Responsive Design
          </h2>
          <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
            The benefits of responsive web design include a consistent user
            experience for the process of...
          </Paragraph>
          <p className="text-md font-semibold text-textSecondary">
            By John Doe
          </p>
        </div>
      </Link>
    </article>
  );
}
