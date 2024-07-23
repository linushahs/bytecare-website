"use client";

import { cn } from "@/utils";
import Image from "next/image";
import Container from "./container";
import useMediaQuery from "@/hooks/use-media-query";
import Marquee from "react-fast-marquee";

export default function TeamMarquee() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const Tag = isMobile ? Marquee : Container;
  return (
    <Tag className="space-x-5">
      <div className="grid grid-cols-[175px_175px_175px_175px] grid-rows-[142px_16px_142px] md:grid-cols-[1fr_1fr_0.9fr_0.9fr] md:grid-rows-[230px_76px_230px] gap-5 md:gap-6 ">
        <figure
          className={cn("relative row-span-2  overflow-hidden rounded-lg")}
        >
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-1.png`}
          />
        </figure>

        <figure className={cn("relative  overflow-hidden rounded-lg")}>
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-2.png`}
          />
        </figure>
        <figure
          className={cn("relative row-span-2  overflow-hidden rounded-lg")}
        >
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-3.png`}
          />
        </figure>
        <figure
          className={cn("relative row-span-2  overflow-hidden rounded-lg")}
        >
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-4.png`}
          />
        </figure>
        <figure
          className={cn("relative row-span-2  overflow-hidden rounded-lg")}
        >
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-5.png`}
          />
        </figure>
        <figure className={cn("relative   overflow-hidden rounded-lg")}>
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-1.png`}
          />
        </figure>
        <figure
          className={cn("relative col-span-2  overflow-hidden rounded-lg")}
        >
          <Image
            alt="figure"
            className="object-cover"
            fill
            src={`/img/career-2.png`}
          />
        </figure>
      </div>
    </Tag>
  );
}
