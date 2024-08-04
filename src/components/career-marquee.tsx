"use client";

import { cn } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const srcs = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "2", "1"];

export default function CareerMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Tag = isMounted ? Marquee : "div";
  return (
    <Tag className="space-x-4 sm:space-x-6 md:space-x-8" pauseOnHover>
      <div className="flex gap-4 sm:gap-6 md:gap-8">
        {new Array(12).fill(0).map((_, idx) => {
          const aspectRatios = [
            "aspect-[0.7]",
            "aspect-[0.93]",
            "aspect-[0.7]",
            "aspect-[0.8]",
            "aspect-[0.93]",
            "aspect-[0.7]",
            "aspect-[0.93]",
            "aspect-[0.7]",
            "aspect-[0.8]",
            "aspect-[0.93]",
            "aspect-[0.7]",
            "aspect-[0.93]",
          ];

          return (
            <div className="flex-shrink-0" key={idx}>
              <figure
                className={cn(
                  "relative overflow-hidden rounded-xl bg-gray-900 w-[180px] md:w-[280px] h-auto",
                  aspectRatios[idx]
                )}
              >
                <Image
                  fill
                  alt={`figure--${idx}`}
                  className="object-cover size-full"
                  src={`/img/career-${srcs[idx]}.png`}
                />
              </figure>
            </div>
          );
        })}
      </div>
    </Tag>
  );
}
