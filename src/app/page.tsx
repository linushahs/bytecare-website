import { ArrowRightIcon } from "@/assets";
import AchievementSection from "@/components/achievement-section";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import CtaCard from "@/components/cta-card";
import {
  HeroContent,
  HeroFooter,
  HeroHeading,
  HeroParagraph,
  HeroWrapper,
} from "@/components/hero-content";
import ProjectsCard from "@/components/projects-card";
import ServiceCard from "@/components/service-card";
import ClientFeedback from "@/components/testimonials/client-feedback";
import ClientVideo from "@/components/testimonials/client-video";
import ToolsAndTechnologySection from "@/components/tools-technology-section";
import { HEADING_TYPES, headingVariants } from "@/components/ui/heading";
import Footer from "@/layouts/footer";
import { cn } from "@/utils";
import { companyStats, services } from "@/utils/constants";
import Image from "next/image";

export default function Homepage() {
  return (
    <section className="">
      <HeroWrapper>
        <HeroContent className="relative mt-24">
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
          <div className="relative flex flex-col items-center">
            <HeroHeading className="pb-10">
              We help you build quality digital product
            </HeroHeading>
            <HeroParagraph className="mb-12">
              {`Whether you're embarking on a startup journey or leading an
              enterprise towards growth, we're here to support your goals every
              step of the way.`}
            </HeroParagraph>
            <HeroFooter className="flex flex-col justify-center md:flex-row gap-x-6 gap-y-3 md:items-center">
              <Button className="group py-3" color="primary">
                Schedule A Call
                <span className="group-hover:translate-x-1.5 transition-all duration-300">
                  <ArrowRightIcon className="size-6" />
                </span>
              </Button>
              <Button color="fillSecondary" className="py-3">
                View our portfolio
              </Button>
            </HeroFooter>
          </div>
        </HeroContent>
      </HeroWrapper>

      {/* Trusted by leading organizations ================ */}
      <div className="mt-40 w-full flex flex-col items-center">
        <div className="flex flex-col gap-14 items-center w-[900px]">
          <p className="text-textPrimary text-lg">
            Trusted by the leading organizations
          </p>

          <ul className="flex gap-4 justify-between w-full">
            {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map(
              (logo, index) => (
                <li key={index}>
                  <Image
                    src={logo}
                    alt="company-logo"
                    width={300}
                    height={150}
                    className="w-[140px] "
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Here's what we provide section ======================= */}
      <section className=" pt-32 h-[calc(100vh-var(--navbar-height))]">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold">
              {`Here's`} what we provide
            </p>

            <p className="text-lg text-textSecondary">
              Discover how we can help you build & grow your business
            </p>

            <div className="flex gap-12 mt-10">
              {services.map(({ title, description, icon }) => (
                <ServiceCard
                  key={title}
                  title={title}
                  description={description}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our workflow section ================================== */}
      <section className="relative mt-6">
        <AchievementSection />
      </section>

      {/* Featured services section ======================= */}
      <section>
        <Container>
          <div className="flex flex-col items-center mt-24 gap-4">
            <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold">
              Featured Services
            </p>

            <p className="text-lg text-textSecondary">
              We have helped several startups & enterprises to successfully
              build & launch their products.
            </p>

            <div className="flex flex-col gap-12 mt-10">
              <ProjectsCard />
              <ProjectsCard />
              <ProjectsCard />
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
      <div className="container flex flex-col items-center mt-24 gap-4">
        <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold">
          Client Success Stories
        </p>

        <p className="text-lg text-textSecondary">
          See what our clients have to say about their experience working with
          us.
        </p>

        <div className="grid grid-cols-3 gap-6 my-10">
          <ClientVideo />

          <ClientFeedback
            description="Working with ByteCare Technology has been a game-changer for our business. Their team of experts delivered a customized software solution that perfectly met our needs, improving our efficiency and productivity. The level of professionalism and attention to detail displayed by ByteCare was exceptional. We highly recommend their services to anyone looking for top-notch software development."
            companyLogoUrl="/jiggle-logo.png"
            clientName="Rajesh Karki"
            clientPosition="Founder of Jiggle"
            clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            className=" col-span-2"
          />

          <ClientFeedback
            description="ByteCare Technology delivered a custom software solution that improved our efficiency. Their professionalism and attention to detail were exceptional. Highly recommend!"
            companyLogoUrl="/resecurb.png"
            clientName="Rajesh Karki"
            clientPosition="Founder of Resecurb"
            clientPictureUrl="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
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

      {/* Company stats ===================================== */}
      <div className="grid grid-cols-4 gap-10 container mb-16 mt-14">
        {companyStats.map((stats) => (
          <div key={stats.title} className="bg-borderLight rounded-lg p-8 flex flex-col justify-between gap-6">
            <p className="text-3xl leading-[120%] font-bold text-textPrimary">
              {stats.count}+
            </p>
            <p className="text-textSecondary text-md tracking-wide">
              {stats.title}
            </p>
          </div>
        ))}
      </div>

      {/* Work with us banner =================================== */}
      <CtaCard>
        <p
          className={cn(
            headingVariants({ variant: HEADING_TYPES.headline03 }),
            "w-1/2 text-center bg-textRadialGradient bg-clip-text text-transparent"
          )}
        >
          Excited to turn your ideas into reality?
        </p>

        <Button className="mt-4 py-3 text-md">
          Work with us
          <ArrowRightIcon className="size-5" />
        </Button>
      </CtaCard>

      <Footer />
    </section>
  );
}
