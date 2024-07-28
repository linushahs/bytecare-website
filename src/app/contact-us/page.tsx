import { ContactUsTabbedView } from "@/components/contact-us/contact-us-tabbed-view";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Container from "@/components/ui/container";
import React from "react";

function ContactUsPage() {
  return (
    <>
      <section className="pb-14">
        <Container>
          <LightsParticleWrapper>
            <HeroContent className="max-w-[49rem] mx-auto mt-24 md:mt-28">
              <HeroHeading className="pb-8">
                Ready to launch your <br /> next project?
              </HeroHeading>
              <HeroParagraph className="!w-[80%]">
                We'd love to hear about your project and make it happen
                together.
              </HeroParagraph>
            </HeroContent>
          </LightsParticleWrapper>

          <ContactUsTabbedView />
        </Container>
      </section>
    </>
  );
}

export default ContactUsPage;
