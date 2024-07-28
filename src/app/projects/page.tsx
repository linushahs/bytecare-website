import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Container from "@/components/ui/container";
import Footer from "@/layouts/footer";
import ProjectsSection from "@/layouts/projects-section";

export default function ProjectsPage() {
  return (
    <>
      <LightsParticleWrapper>
        <HeroContent className="gap-8 mt-16">
          {/* heading title, subtitle ================================ */}
          <HeroHeading className="mt-8">Browse our projects</HeroHeading>

          <HeroParagraph className="!w-[70%]">
            We have helped several startups & enterprises to successfully build
            & launch their products.
          </HeroParagraph>
        </HeroContent>
      </LightsParticleWrapper>

      <section>
        <Container>
          <div className="flex flex-col gap-10 my-12 relative z-[3]">
            <ProjectsSection />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
