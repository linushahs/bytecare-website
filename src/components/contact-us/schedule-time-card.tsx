import React from "react";
import Button from "../ui/button";
import { HEADING_TYPES, Heading, headingVariants } from "../ui/heading";
import { PARAGRAPH_TYPES, Paragraph, paragraphVariants } from "../ui/paragraph";
import { ArrowRightSmallIcon, ClockIcon } from "@/assets";
import { GoogleMeetIcon } from "@/assets/social-media";

export default function ScheduleTimeCard() {
  return (
    <div className="p-4 space-y-8 shadow-inner md:p-8 rounded-xl bg-surface">
      <div className="flex items-center gap-3">
        <figure className="bg-gray-700 rounded-full size-20 "></figure>
        <div className="space-y-1">
          <p className="text-xl font-bold">Samir Phuyal</p>
          <Paragraph variant={PARAGRAPH_TYPES.paragraph}>Founder</Paragraph>
        </div>
      </div>
      <div className="space-y-8">
        <Heading as="h3" variant={HEADING_TYPES.heading}>
          Project Discussion Call
        </Heading>
        <ul className="space-y-4 [&>li]:flex [&>li]:items-center [&>li]:gap-x-3">
          <li>
            <ClockIcon className="size-8" />
            <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
              30 Min approx.
            </Paragraph>
          </li>
          <li>
            <GoogleMeetIcon className="size-8" />
            <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
              Google Meet
            </Paragraph>
          </li>
        </ul>
        <p
          className={paragraphVariants({ variant: PARAGRAPH_TYPES.paragraph })}
        >
          Discuss your project goals, explore solutions, and discover how we can
          collaborate to bring your vision to life.
        </p>
      </div>
      <Button className="group" variant="default">
        <span>Book free consultation</span>
        <span className="group-hover:translate-x-1.5 transition-all duration-300">
          <ArrowRightSmallIcon className="size-7" />
        </span>
      </Button>
    </div>
  );
}
