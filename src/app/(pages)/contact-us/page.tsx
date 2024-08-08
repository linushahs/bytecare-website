import { ArrowRightSmallIcon, PhoneIcon } from "@/assets";
import { LocationIcon, MailIcon } from "@/assets/filled";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/assets/social-media";
import { FacebookIcon } from "@/assets/filled";
import { ContactUsTabbedView } from "@/components/contact-us/contact-us-tabbed-view";
import {
  HeroContent,
  HeroHeading,
  HeroParagraph,
} from "@/components/hero-content";
import { LightsParticleWrapper } from "@/components/lights-particle-wrapper";
import Container from "@/components/ui/container";
import { HEADING_TYPES, headingVariants } from "@/components/ui/heading";
import { cn } from "@/utils";
import React from "react";
import Link from "next/link";
import Footer from "@/layouts/footer";

function ContactUsPage() {
  return (
    <>
      <section className="pb-14">
        <Container>
          <LightsParticleWrapper>
            <HeroContent className="max-w-[49rem] mx-auto mt-24">
              <HeroHeading className="pb-8">
                Ready to launch your <br /> next project?
              </HeroHeading>
              <HeroParagraph className="!w-[80%]">
                {`We'd`} love to hear about your project and make it happen
                together.
              </HeroParagraph>
            </HeroContent>
          </LightsParticleWrapper>

          <ContactUsTabbedView />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <h2
            className={cn(
              headingVariants({
                variant: HEADING_TYPES.heading,
              }),
              "text-transparent bg-textGradientDefault bg-clip-text"
            )}
          >
            More ways to reach us
          </h2>

          <div className="flex gap-10 mt-10">
            <div className="flex-1 bg-fill rounded-xl p-8 flex flex-col gap-14">
              {contactDetails.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-6 items-center">
                  <span className="rounded-full p-4 bg-surface">
                    <Icon className="size-7 fill-white" />
                  </span>
                  <div className="flex flex-col gap-0.5 text-md">
                    <h3 className=" text-white text-lg font-medium">{title}</h3>
                    <p className=" text-textSecondary">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col gap-4">
              {/* Connect us on =================== */}
              <div className="flex-1 bg-fill rounded-xl px-8 py-6 ">
                <h2 className={"text-xl font-medium mt-2"}>Connect us on</h2>

                <div className="flex gap-12 mt-8">
                  {socialLinks.map(({ icon: Icon, url }, idx) => (
                    <a key={idx} href={url}>
                      <Icon className="size-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Looking for job opportunities ================== */}
              <div className="flex-1 flex flex-col gap-4 justify-center rounded-xl px-8 py-6 bg-primaryBtnGradient">
                <p className="text-xl font-semibold">
                  Looking for job opportunities?
                </p>

                <Link
                  href="/careers"
                  className=" text-md flex gap-2 items-center opacity-70"
                >
                  Explore careers at bytecare{" "}
                  <ArrowRightSmallIcon className="size-6" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

const contactDetails = [
  {
    title: "Our office",
    icon: LocationIcon,
    description: "Lalitpur, Kathmandu",
  },
  {
    title: "Email Us",
    icon: MailIcon,
    description: "contact@bytecaretech.com",
  },
  {
    title: "Call Us",
    icon: PhoneIcon,
    description: "+977 9812345678, +977 984545678",
  },
];

const socialLinks = [
  {
    title: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/bytecaretech",
  },
  {
    title: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/bytecaretech",
  },
  {
    title: "Twitter",
    icon: TwitterIcon,
    url: "https://www.twitter.com/bytecaretech",
  },
  {
    title: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/bytecaretech",
  },
];

export default ContactUsPage;
