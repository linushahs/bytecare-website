import {
  BookIcon,
  CustomerCentricIcon,
  QualityIcon,
  SelfStarterIcon,
  StarGritIcon,
  TeamPlayerIcon,
} from "@/assets";
import {
  CelebrationIcon,
  FinancingIcon,
  HeartIcon,
  HomeIcon,
  InvestmentIcon,
  LunchIcon,
  SalaryIcon,
  SickLeaveIcon,
} from "@/assets/filled";
import BlurryBlob from "@/components/blurry-blob";
import CareerMarquee from "@/components/career-marquee";
import {
  HeroContent,
  HeroFooter,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import { PlainCard } from "@/components/plain-card";
import PlainCardList from "@/components/plain-card-list";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import { PARAGRAPH_TYPES, paragraphVariants } from "@/components/ui/paragraph";
import Footer from "@/layouts/footer";
import { cn } from "@/utils";
import Link from "next/link";

function CareerPage() {
  const sharedBlobClassName = "w-3/4 md:w-1/2 ";

  return (
    <>
      <section>
        <Container>
          <LightsParticleWrapper>
            <HeroContent className="relative mt-24 md:mt-28  max-w-[50rem] mx-auto">
              <div className="flex flex-col items-center text-center">
                <HeroHeading className="pb-6">Grow With Us</HeroHeading>
                <HeroParagraph className="mb-12">
                  Join our dynamic team of innovators, collaboratively building
                  cutting-edge projects.
                </HeroParagraph>
                <HeroFooter>
                  <Button color="primary" className="group" showRightArrowIcon>
                    <span>View all Openings</span>
                  </Button>
                </HeroFooter>
              </div>
            </HeroContent>
          </LightsParticleWrapper>
        </Container>
      </section>

      <section className="pt-12 pb-16 md:pt-24 md:pb-32">
        <CareerMarquee />
      </section>

      <section className="relative pt-4 pb-28 overflow-hidden">
        <BlurryBlob
          className={cn(
            sharedBlobClassName,
            "top-0 md:top-auto :bottom-0 h-2/6 md:h-3/4 lg:h-[90%] -right-1/3"
          )}
        />

        <Container className="relative">
          <div className="max-w-[48rem]">
            <Heading
              as="h2"
              variant={HEADING_TYPES.headline04}
              className="bg-textGradientDefault text-transparent bg-clip-text"
            >
              Team of Builders & innovators
            </Heading>
            <p
              className={cn(
                "mt-4 mb-8",
                paragraphVariants({ variant: PARAGRAPH_TYPES.paragraph })
              )}
            >
              At Bytecare, we cultivate a dynamic and supportive environment
              driven by collaboration, innovation, and a commitment to quality.
            </p>

            <Button
              className="hidden group md:flex"
              showRightArrowIcon
              color="fillTertiary"
            >
              <span>Meet Our Team</span>
            </Button>
          </div>
          <PlainCardList className="pt-12 md:pt-16">
            {qualities.map(({ title, description, Icon }) => (
              <PlainCard
                key={title}
                Icon={Icon}
                title={title}
                description={description}
              />
            ))}
          </PlainCardList>
        </Container>
      </section>

      <section className="relative pb-24 md:pt-14">
        <BlurryBlob
          className={cn(
            sharedBlobClassName,
            "top-0 rotate-180 md:top-1/4 h-2/6 md:h-1/2 -left-1/3"
          )}
        />

        <Container className="relative">
          <div className="mb-14">
            <div className="max-w-[48rem]">
              <Heading
                as="h2"
                variant={HEADING_TYPES.headline04}
                className="bg-textGradientDefault text-transparent bg-clip-text"
              >
                Current openings
              </Heading>
              <p
                className={cn(
                  "mt-6",
                  paragraphVariants({
                    variant: PARAGRAPH_TYPES.paragraph,
                  })
                )}
              >
                {` We're growing fast and looking for passionate, talented
                individuals to join us in shaping our company's future, with
                opportunities for exponential growth.`}
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <ul className="space-y-4 md:space-y-8">
              {new Array(3).fill(0).map((id) => (
                <li
                  key={id}
                  className="group flex flex-col justify-between gap-8 p-4 transition-all ease-in-out duration-300 bg-fill border border-borderSoft md:hover:bg-fill-tertiary lg:items-center lg:flex-row md:p-12 rounded-xl cursor-pointer"
                >
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-bold leading-8 text-white md:text-2xl">
                      UI UX Designer
                    </h3>
                    <p
                      className={cn(
                        "mt-5 mb-8 truncate-to-3-lines",
                        paragraphVariants({
                          variant: PARAGRAPH_TYPES.paragraph,
                        })
                      )}
                    >
                      {"We’re hiring a versatile UI/UX Designer to join our team.                      In addition to creating intuitive interfaces and                      conducting user research, you’ll also have the opportunity                      to work on graphic design, logo design, banners, and other                      creative projects. If you’re passionate about                      user-centered design and have a knack for visual                      aesthetics, let’s connect!".slice(
                        0,
                        200
                      ) + "..."}
                    </p>
                    <ul className="flex flex-wrap items-center gap-3">
                      {["full time", "on site"].map((title, id) => (
                        <Badge
                          key={id}
                          title={title}
                          className="font-semibold bg-fill-tertiary capitalize group-hover:bg-borderSoft"
                        />
                      ))}
                    </ul>
                  </div>
                  <Link href={`/careers/job/${id}`}>
                    <Button
                      showRightArrowIcon
                      variant="outline"
                      color="transparent"
                      className="hover:bg-fill-secondary"
                    >
                      <span>Apply Now</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
            <Button showRightArrowIcon className="mx-auto" color="fill">
              <span>View All Openings</span>
            </Button>
          </div>
        </Container>
      </section>

      <section className="relative pb-24 md:pt-8  overflow-hidden">
        <BlurryBlob
          className={cn(
            sharedBlobClassName,
            "top-0 h-2/6 md:top-0 md:bottom-0 md:h-3/4 -right-1/3"
          )}
        />
        <Container className="relative">
          <div className=" md:space-y-14 space-y-7">
            <Heading as="h2" variant={HEADING_TYPES.headline04}>
              Perks of being with us
            </Heading>
            <ul className=" grid grid-cols-2 gap-14">
              {benefits.map(({ title, icon: Icon }) => (
                <li key={title} className="flex gap-4 items-center text-md">
                  <Icon className="size-8" /> {title}{" "}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

const qualities = [
  {
    Icon: CustomerCentricIcon,
    title: "Customer Centric",
    description:
      "Who prioritize client needs and strive to exceed their expectations",
  },

  {
    Icon: TeamPlayerIcon,
    title: "Team Player",
    description: "Who works well with others and contributes to a common goal",
  },

  {
    Icon: QualityIcon,
    title: "Quality Enthusiast",
    description:
      "Who cares deeply about the quality of their work, down to the last detail",
  },
  {
    Icon: SelfStarterIcon,
    title: "Self-Starter",
    description:
      "Who takes ownership, embraces challenges, and drives projects forward",
  },

  {
    Icon: BookIcon,
    title: "Continuous Learning",
    description:
      "Who embraces a growth mindset, continually learning & refining their skills",
  },
  {
    Icon: StarGritIcon,
    title: "Grit",
    description:
      "Who perseveres through challenges with unwavering determination and resilience",
  },
];

const benefits = [
  {
    title: "Flexibility to work either from office or home.",
    icon: HomeIcon,
  },
  {
    title: "Enjoy free lunch and snacks served twice daily in the office.",
    icon: LunchIcon,
  },
  {
    title: "Request salary in advance when needed.",
    icon: SalaryIcon,
  },
  {
    title: "Investment in your learning and career growth opportunities.",
    icon: InvestmentIcon,
  },
  {
    title: "Receive paid annual, sick, compensation, and bereavement leave.",
    icon: SickLeaveIcon,
  },
  {
    title: "Financing for purchasing needed goods & resources.",
    icon: FinancingIcon,
  },
  {
    title: "Company outings, team launch/dinner and festival celebrations.",
    icon: CelebrationIcon,
  },
  {
    title: "Receive in-house awards, appreciation, and anniversary gifts.",
    icon: HeartIcon,
  },
];

export default CareerPage;
