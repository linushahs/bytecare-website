import BlogList from "@/components/blog-list";
import BlogFilters from "@/components/blogs/blog-filters";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Container from "@/components/ui/container";
import Footer from "@/layouts/footer";
import { fetchBlogCategories } from "@/sanity/service";

async function BlogsPage() {
  const categories = await fetchBlogCategories();
  console.log(categories);

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

      <section className="pb-12">
        <Container>
          {/* Blog filters ====================================== */}
          <div className="flex flex-col gap-10 mt-16 relative z-[3]">
            <BlogFilters categories={categories} />
          </div>

          {/* Blog posts ========================================== */}
          <BlogList />
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default BlogsPage;
