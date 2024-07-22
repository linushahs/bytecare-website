import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
  HeroWrapper,
} from "@/components/hero-content";
import Footer from "@/layouts/footer";
import ProjectsSection from "@/layouts/projects-section";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center">
      <HeroWrapper>
        <HeroContent className="flex flex-col items-center gap-4 mt-16">
          {/* heading title, subtitle ================================ */}
          <HeroHeading className="mt-8">Browse our projects</HeroHeading>

          <HeroParagraph className="">
            We have helped several startups & enterprises to successfully build
            & launch their products.
          </HeroParagraph>
        </HeroContent>
      </HeroWrapper>

      <div className="container flex flex-col gap-10 my-12 relative z-[3]">
        <ProjectsSection />
      </div>

      <Footer />
    </section>
  );
}
