import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import Image from "next/image";
import Container from "@/components/ui/container";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import PlainCardList from "@/components/plain-card-list";
import { PlainCard } from "@/components/plain-card";
import {
  ArrowRightIcon,
  ArrowRightSmallIcon,
  BookIcon,
  BulbIcon,
  CustomerCentricIcon,
  QualityIcon,
  RocketIcon,
  RocketSmallIcon,
  SelfStarterIcon,
  StarGritIcon,
  SuitcaseIcon,
  TeamPlayerIcon,
} from "@/assets";
import BlurryBlob from "@/components/blurry-blob";
import Button from "@/components/ui/button";
import { cn } from "@/utils";
import TeamList from "@/components/team-list";
import TeamMember from "@/components/team-member";
import Footer from "@/layouts/footer";
import Link from "next/link";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";

function AboutPage() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Container>
          <LightsParticleWrapper>
            <HeroContent className="gap-4 mt-8 sm:mt-16">
              {/* heading title, subtitle ================================ */}
              <HeroHeading className="mt-8 hidden sm:block ">
                We are your dedicated <br /> technology partners
              </HeroHeading>

              {/* Heading title for mobile size ============================ */}
              <HeroHeading className="mt-8 sm:hidden">
                We are your dedicated technology partners
              </HeroHeading>

              <HeroParagraph className="mt-6">
                Whether {`you're`} launching a startup or running an enterprise,
                we are here to support you every step of the way.
              </HeroParagraph>
            </HeroContent>
          </LightsParticleWrapper>

          {/* Picture of teams working together ========================= */}
          <figure className="mt-14 sm:mt-20 rounded-lg overflow-hidden">
            <Image
              src={"/team-members.jpg"}
              alt="Teams working together"
              width={1920}
              height={1080}
              priority
              className="w-full bg-fill md:h-[600px] aspect-[16/9] md:aspect-auto object-cover"
            />
          </figure>
        </Container>
      </section>

      <section className="pt-24 pb-14">
        <Container>
          <div className="max-w-3xl">
            <Heading
              as="h2"
              variant={HEADING_TYPES.headline04}
              className="sm:w-2/3 md:w-full"
            >
              Passion and Expertise at the Heart of Everything We Do
            </Heading>
            <p className="mt-6 text-base text-textSecondary leading-relaxed mb-14 lg:text-md">
              At Bytecare, we believe in the power of technology to drive
              success. Our dedicated team of over 20 skilled professionals works
              collaboratively to deliver innovative, reliable, and top-tier IT
              services. We take pride in our ability to turn complex challenges
              into seamless solutions that empower businesses worldwide.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2">
            {aims.map(({ title, description, Icon }) => (
              <li
                key={title}
                className="py-7 px-6 sm:p-6 md:p-9 bg-fill rounded-lg"
              >
                <Icon />
                <h3 className="mt-6 sm:mt-8 mb-5 font-bold leading-8 text-white text-xl">
                  {title}
                </h3>
                <p className="text-md text-textSecondary">{description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="space-y-16 sm:space-y-20 px-2">
            <Heading
              as="h2"
              variant={HEADING_TYPES.heading}
              className="text-center sm:text-left"
            >
              Our Core Values
            </Heading>
            <PlainCardList>
              {coreValues.map(({ title, description, Icon }) => (
                <PlainCard
                  key={title}
                  Icon={Icon}
                  title={title}
                  description={description}
                />
              ))}
            </PlainCardList>
          </div>
        </Container>
      </section>

      <section className="pt-14">
        <Container>
          <div className="flex flex-col items-center max-w-xl mx-auto text-center py-6  sm:py-14">
            <Heading as="h2" variant={HEADING_TYPES.headline04}>
              Our Journey
            </Heading>

            <p className="mt-6 text-md text-textSecondary sm:w-[95%]">
              We had a humble beginning, driven by a passion for building
              things. Since then, {`we've`} steadily grown, overcoming
              challenges and achieving significant milestones.
            </p>
          </div>
          <div className="relative px-4 sm:px-0">
            <ul className="relative flex flex-wrap justify-center max-w-4xl mx-auto py-10 md:py-14 gap-10 md:gap-14">
              {companyStats.map(({ title, description, founded }, index) => (
                <li
                  key={title}
                  className={cn(
                    "shadow-inner w-full max-w-sm p-6 sm:p-8  rounded-xl",
                    founded
                      ? "bg-primaryBtnGradient -rotate-3 scale-105"
                      : "bg-fill",
                    companyStats.length - 1 === index && "rotate-3"
                  )}
                >
                  {founded && (
                    <span className="text-sm text-white leading-5 mb-0.5">
                      Founded
                    </span>
                  )}
                  <Heading as="h3" variant={HEADING_TYPES.headline04}>
                    {title}
                  </Heading>
                  <p
                    className={cn(
                      "text-textSecondary text-md mt-4",
                      founded && "text-white"
                    )}
                  >
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="pt-9 pb-14">
        <Container>
          <div className="relative space-y-14">
            <BlurryBlob className="w-1/2  -translate-x-1/2 blur-[150px] top-1/2 -translate-y-1/2 left-1/2 aspect-square" />
            <div className="relative flex flex-col items-center">
              <div className="flex flex-col items-center max-w-3xl space-y-6 text-center mb-10 sm:mb-14">
                <Heading as="h2" variant={HEADING_TYPES.headline04}>
                  Meet Our Team
                </Heading>
                <p className="text-md text-textSecondary sm:w-[60%]">
                  We are a dynamic team of young, talented individuals committed
                  to driving innovation and excellence.
                </p>
              </div>

              <div className="w-full">
                <TeamList>
                  {new Array(4).fill(0).map((id) => (
                    <TeamMember key={id} id={id} />
                  ))}
                </TeamList>
              </div>
            </div>

            <Link href="/about/team">
              <Button className="mx-auto group mt-14" color="surface">
                <span>Meet Our Entire Team</span>
                <span className="group-hover:translate-x-1.5 transition-all duration-300">
                  <ArrowRightIcon className="size-5" />
                </span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      <section className="pt-16 pb-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-14">
            {/* have a project? banner ================================= */}
            <div className="flex-1 rounded-xl p-8 sm:p-10 2xl:p-12 flex flex-col items-start gap-4 bg-primaryBtnGradient">
              <span className="p-4 rounded-full bg-white w-fit mb-2">
                <RocketSmallIcon className="size-6" />
              </span>

              <p className="text-2xl tracking-tight font-bold text-textPrimary">
                Have a Project?
              </p>

              <p className="text-white text-base sm:w-[90%] 2xl:w-4/5">
                {`We're`} here to turn your ideas into reality. We would love to
                learn more about your project and make it happen together.
              </p>

              <Button color="white" className="mt-8 rounded-md">
                <span className="bg-primaryBtnGradient bg-clip-text text-transparent">
                  Build with Us
                </span>
                <ArrowRightSmallIcon className="size-7 " fillGradient={true} />
              </Button>
            </div>

            {/* want to join banner ============================= */}
            <div className="flex-1 rounded-xl p-8 sm:p-10 2xl:p-12 flex flex-col items-start gap-4 bg-white">
              <span className="p-4 rounded-full bg-black text-white w-fit mb-2">
                <SuitcaseIcon className="size-6" />
              </span>

              <p className="text-2xl text-fill tracking-tight font-bold">
                Want to Join?
              </p>

              <p className="text-fill-tertiary text-base sm:w-[90%] 2xl:w-4/5">
                We foster a collaborative culture and are always seeking
                passionate, talented individuals to join our dynamic team.
              </p>

              <Button color="primary" className="mt-8 rounded-md">
                Join Our Team
                <ArrowRightSmallIcon
                  className="size-7 text-white"
                  fillGradient={false}
                />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

const aims = [
  {
    Icon: RocketIcon,
    title: "What we do?",
    description:
      "Our mission is to transform ideas into high-quality digital solutions that drive client success. We are committed to innovation, quality, and customer satisfaction, ensuring every project reflects our passion for excellence and dedication to our clients.",
  },
  {
    Icon: BulbIcon,
    title: "What we aspire to be?",
    description:
      "Our vision is to be a leading force in IT services, delivering innovative, reliable, and high-quality digital solutions. Through cutting-edge technology and exceptional service, we aim to empower businesses worldwide.",
  },
];

const coreValues = [
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

const companyStats = [
  {
    founded: true,
    title: "2020",
    description:
      "We started four years ago and are already the fastest growing IT & Startup Agency in Nepal.",
  },

  {
    title: "25+",
    description:
      "Projects that redefine excellence and push the boundaries of what's possible.",
  },

  {
    title: "20+",
    description:
      "Our partnerships reflect a commitment to excellence and a track record of delivering outstanding results.",
  },

  {
    title: "18+",
    description:
      "Members who bring passion, expertise, and a shared commitment to driving the company's vision forward.",
  },
  {
    title: "3+",
    description:
      "In-house projects, each a testament to our dedication to innovation, creativity, and excellence.",
  },
];

export default AboutPage;
