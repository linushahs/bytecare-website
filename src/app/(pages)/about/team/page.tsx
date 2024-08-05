import { ArrowRightIcon } from "@/assets";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import CtaCard from "@/components/cta-card";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import TeamList from "@/components/team-list";
import TeamMarquee from "@/components/team-marquee";
import TeamMember from "@/components/team-member";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import Footer from "@/layouts/footer";
import React from "react";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";

function TeamPage() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Container>
          <LightsParticleWrapper>
            <HeroContent className="flex flex-col items-center gap-4 mt-10 sm:mt-16 mb-20">
              {/* heading title, subtitle ================================ */}
              <HeroHeading className="mt-8">
                Meet <span className="block sm:inline">Our Team</span>
              </HeroHeading>

              <HeroParagraph className="sm:mt-6">
                We are a dynamic team of young, talented individuals committed
                to driving innovation and excellence.
              </HeroParagraph>
            </HeroContent>
          </LightsParticleWrapper>
        </Container>

        <TeamMarquee />
      </section>

      <section className="pt-24">
        <Container>
          <div className=" flex flex-col gap-14 items-center">
            <Heading as="h2" variant={HEADING_TYPES.heading} className="">
              The team behind us
            </Heading>

            <div className="w-full">
              <TeamList>
                {new Array(12).fill(0).map((id) => (
                  <TeamMember key={id} id={id} />
                ))}
              </TeamList>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-24 pb-6">
        <CtaCard>
          <Heading
            as="h2"
            variant={HEADING_TYPES.headline04}
            className="text-center"
          >
            Want to Join Bytecare?
          </Heading>
          <p className="text-center text-textSecondary text-md w-[90%] sm:w-[40%]">
            {`We're`} always seeking passionate and talented individuals to join
            our dynamic and innovative team. Click below to explore career
            opportunities and become part of our exciting journey!
          </p>

          <Button className="mt-4 py-3 text-md">
            See Current Openings
            <ArrowRightIcon className="size-5" />
          </Button>
        </CtaCard>
      </section>

      <Footer />
    </>
  );
}

export default TeamPage;
