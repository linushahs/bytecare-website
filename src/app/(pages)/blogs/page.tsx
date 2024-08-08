import BlogContainer from "@/components/blogs/blog-container";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Container from "@/components/ui/container";
import Footer from "@/layouts/footer";
import { blogCategoryGroq, blogPostGroq } from "@/sanity/groq";
import { sanityClient } from "@/sanity/lib/client";

async function getInitialData() {
  const [posts, categories] = await Promise.all([
    sanityClient.fetch(blogPostGroq(), {}, { cache: "no-store" }),
    sanityClient.fetch(blogCategoryGroq(), {}, { cache: "no-store" }),
  ]);

  return { posts, categories };
}

async function BlogsPage() {
  const { posts, categories } = await getInitialData();

  return (
    <>
      <LightsParticleWrapper>
        <HeroContent className="gap-8 mt-16">
          {/* heading title, subtitle ================================ */}
          <HeroHeading>Blogs & Articles</HeroHeading>

          <HeroParagraph className="!w-[70%]">
            Discover trends & insights on tech
          </HeroParagraph>
        </HeroContent>
      </LightsParticleWrapper>

      <section className="pb-12">
        <Container>
          <BlogContainer initialPosts={posts} categories={categories} />
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default BlogsPage;
