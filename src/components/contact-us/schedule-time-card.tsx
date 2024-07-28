import React from "react";
import Button from "../ui/button";
import { HEADING_TYPES, Heading } from "../ui/heading";
import { PARAGRAPH_TYPES, Paragraph } from "../ui/paragraph";
import { ArrowRightSmallIcon } from "@/assets";

export default function ScheduleTimeCard() {
  return (
    <div className="p-4 space-y-8 shadow-inner md:p-8 rounded-2xl bg-surface-glass">
      <div className="flex items-center gap-3">
        <figure className="bg-gray-900 rounded-full h-14 w-14 "></figure>
        <div className="space-y-1">
          <Heading variant={HEADING_TYPES.heading} as="h4">
            Samir Phuyal
          </Heading>
          <Paragraph variant={PARAGRAPH_TYPES.paragraph}>Founder</Paragraph>
        </div>
      </div>
      <div className="space-y-8">
        <Heading as="h3" variant={HEADING_TYPES.headline04}>
          Project discussion call
        </Heading>
        <ul className="space-y-4 [&>li]:flex [&>li]:items-center [&>li]:gap-x-3">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  stroke="#D9D9D9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </g>
            </svg>
            <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
              30 Min approx.
            </Paragraph>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g clipPath="url(#clip0_2817_4382)">
                <g>
                  <g>
                    <path
                      fill="#00832D"
                      d="M13.577 11.983l2.34 2.675 3.146 2.01.548-4.668-.548-4.563-3.206 1.767-2.28 2.78z"
                    ></path>
                    <path
                      fill="#0066DA"
                      d="M0 16.234v3.978c0 .908.737 1.645 1.646 1.645h3.977l.824-3.005-.824-2.618-2.729-.824L0 16.234z"
                    ></path>
                    <path
                      fill="#E94235"
                      d="M5.623 2.11L0 7.732l2.895.822 2.728-.822.81-2.582-.81-3.042z"
                    ></path>
                    <path
                      fill="#2684FC"
                      d="M0 16.235h5.623V7.732H0v8.503z"
                    ></path>
                    <path
                      fill="#00AC47"
                      d="M22.656 4.49l-3.592 2.948v9.23l3.607 2.959a.823.823 0 001.33-.649V5.126a.823.823 0 00-1.345-.635z"
                    ></path>
                    <path
                      fill="#00AC47"
                      d="M13.577 11.983v4.25H5.624v5.624h11.794c.908 0 1.645-.737 1.645-1.645v-3.544l-5.486-4.685z"
                    ></path>
                    <path
                      fill="#FFBA00"
                      d="M17.418 2.11H5.624v5.623h7.953v4.25l5.486-4.546V3.755c0-.908-.737-1.646-1.645-1.646z"
                    ></path>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2817_4382">
                  <path fill="#fff" d="M0 0H24V24H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <Paragraph variant={PARAGRAPH_TYPES.paragraph}>
              Google Meet
            </Paragraph>
          </li>
        </ul>
        <p className="text-white">
          We&apos;ll walk you through our work process and explain how we can
          help!
        </p>
      </div>
      <Button className="group" variant="default">
        <span>Schedule date and time</span>
        <span className="group-hover:translate-x-1.5 transition-all duration-300">
          <ArrowRightSmallIcon className="size-7" />
        </span>
      </Button>
    </div>
  );
}
