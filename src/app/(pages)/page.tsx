import { ArrowRightIcon } from "@/assets";
import AchievementSection from "@/components/achievement-section";
import ClientsMarquee from "@/components/clients-marquee";
import CtaCard from "@/components/cta-card";
import {
  HeroContent,
  HeroFooter,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Counter from "@/components/motion/counter";
import { MotionHeroDiv } from "@/components/motion/motion-hero-div";
import ServicesSection from "@/components/services-section";
import ClientFeedback from "@/components/testimonials/client-feedback";
import ClientVideo from "@/components/testimonials/client-video";
import ToolsAndTechnologySection from "@/components/tools-technology-section";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Footer from "@/layouts/footer";
import ProjectsContainer from "@/layouts/projects-container";
import { cn } from "@/utils";
import { companyStats } from "@/utils/constants";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <LightsParticleWrapper>
        <HeroContent className="relative mt-32 hero-content">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] h-[85%] relative">
              <Image
                alt="hero-content-backdrop-grid"
                fill
                className="object-cover opacity-65"
                priority
                src={"/grid.png"}
              />
            </div>
          </div>
          <MotionHeroDiv className="relative flex flex-col items-center px-4 sm:p-0">
            <HeroHeading className="pb-10">
              We help you build quality <br /> digital product
            </HeroHeading>

            <HeroParagraph className="mb-12">
              {`Whether you're embarking on a startup journey or leading an
              enterprise towards growth, we're here to support your goals every
              step of the way.`}
            </HeroParagraph>

            <HeroFooter className="flex flex-col justify-center sm:flex-row gap-x-6 gap-y-3 sm:items-center">
              <Button className="group" color="primary">
                Schedule A Call
                <span className="group-hover:translate-x-1.5 transition-all duration-300">
                  <ArrowRightIcon className="size-6" />
                </span>
              </Button>
              <Button color="fillSecondary">View our portfolio</Button>
            </HeroFooter>
          </MotionHeroDiv>
        </HeroContent>
      </LightsParticleWrapper>

      {/* Trusted by leading organizations ================ */}
      <section className="mt-40 w-full flex flex-col items-center">
        <ClientsMarquee />
      </section>

      {/* Here's what we provide section ======================= */}
      <section className="pt-[120px] sm:pt-[140px] lg:pt-[200px] pb-24">
        <ServicesSection />
      </section>

      {/* Our workflow section ================================== */}
      <section className="relative lg:mt-16 xl:mt-24">
        <AchievementSection />
      </section>

      {/* Featured services section ======================= */}
      <section className="sm:pt-10">
        <Container>
          <div className="flex flex-col items-center mt-24 gap-4">
            <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold">
              Featured Projects
            </p>

            <p className="text-lg text-textSecondary md:w-1/2 text-center">
              We have helped several startups & enterprises to successfully
              build & launch their products.
            </p>

            <div className="mt-12">
              <ProjectsContainer withFilters={false} />
            </div>
            <Button color="fill" className="mt-10">
              View More Projects <ArrowRightIcon className="size-6" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Tools and technologies section ========================== */}
      <section className="pt-24 pb-16">
        <ToolsAndTechnologySection />
      </section>

      {/* Client success stories ===================================== */}
      <section className="lg:pt-12">
        <Container>
          <div className="flex flex-col items-center mt-24 gap-4">
            <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold text-center">
              Client Success Stories
            </p>

            <p className="text-lg text-textSecondary text-center">
              See what our clients have to say about their experience working
              with us.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              <ClientVideo />

              <ClientFeedback
                description="Working with ByteCare Technology has been a game-changer for our business. Their team of experts delivered a customized software solution that perfectly met our needs, improving our efficiency and productivity. The level of professionalism and attention to detail displayed by ByteCare was exceptional. We highly recommend their services to anyone looking for top-notch software development."
                companyLogoUrl="/jiggle-logo.png"
                clientName="Rajesh Karki"
                clientPosition="Founder of Jiggle"
                clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className="lg:col-span-2"
              />

              <ClientFeedback
                description="ByteCare Technology delivered a custom software solution that improved our efficiency. Their professionalism and attention to detail were exceptional. Highly recommend!"
                companyLogoUrl="/resecurb.png"
                clientName="Rajesh Karki"
                clientPosition="Founder of Resecurb"
                clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                className=""
              />
              <ClientFeedback
                description="ByteCare Technology delivered a custom software solution that improved our efficiency. Their professionalism and attention to detail were exceptional. Highly recommend!"
                companyLogoUrl="/symtric.png"
                clientName="Rajesh Karki"
                clientPosition="Founder of Jiggle"
                clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              />

              <ClientVideo />

              <ClientFeedback
                description="ByteCare Technology delivered a custom software solution that improved our efficiency. Their professionalism and attention to detail were exceptional. Highly recommend!"
                companyLogoUrl="/symtric.png"
                clientName="Rajesh Karki"
                clientPosition="Founder of Jiggle"
                clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              />
              <ClientVideo />

              <ClientFeedback
                description="ByteCare Technology delivered a custom software solution that improved our efficiency. Their professionalism and attention to detail were exceptional. Highly recommend!"
                companyLogoUrl="/symtric.png"
                clientName="Rajesh Karki"
                clientPosition="Founder of Jiggle"
                clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Company stats ===================================== */}
      <section className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10 container mb-16 mt-14">
        {companyStats.map((stats) => (
          <div
            key={stats.title}
            className="bg-borderLight rounded-lg p-6 md:p-8 flex flex-col justify-between gap-6"
          >
            <Counter
              value={stats.count}
              className="text-3xl leading-[120%] font-bold text-textPrimary"
            />
            <p className="text-textSecondary text-md tracking-wide">
              {stats.title}
            </p>
          </div>
        ))}
      </section>

      {/* Work with us banner =================================== */}
      <CtaCard>
        <p
          className={cn(
            "text-4xl leading-[120%] w-[90%] sm:w-full font-bold text-center bg-textRadialGradient bg-clip-text text-transparent"
          )}
        >
          Excited to turn your <br /> ideas into reality?
        </p>

        <Button showRightArrowIcon className="mt-4 py-3 text-md">
          Work with us
        </Button>
      </CtaCard>

      <Footer />
    </>
  );
}
