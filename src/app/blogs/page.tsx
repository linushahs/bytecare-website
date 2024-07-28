"use client";

import BlogList from "@/components/blog-list";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import React, { useState } from "react";

function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all posts");

  return (
    <>
      <LightsParticleWrapper>
        <HeroContent className="gap-8 mt-16">
          {/* heading title, subtitle ================================ */}
          <HeroHeading className="mt-8">Blogs & Articles</HeroHeading>

          <HeroParagraph className="!w-[70%]">
            Discover trends & insights on tech
          </HeroParagraph>
        </HeroContent>
      </LightsParticleWrapper>

      <section>
        <Container>
          {/* Blog filters ====================================== */}
          <div className="flex flex-col gap-10 mt-16 relative z-[3]">
            <div className="flex gap-6 mb-10 w-full flex-wrap justify-center sm:flex-nowrap">
              {[
                "all posts",
                "UI UX design",
                "web design",
                "QA testing",
                "Graphics",
                "Product Design",
              ].map((category) => (
                <Button
                  key={category}
                  variant={
                    category === selectedCategory ? "default" : "outline"
                  }
                  color={category === selectedCategory ? "primary" : "fill"}
                  onClick={() => setSelectedCategory(category)}
                  className="py-3 rounded-full capitalize "
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog posts ========================================== */}
          <BlogList />
        </Container>
      </section>
    </>
  );
}

export default BlogsPage;
