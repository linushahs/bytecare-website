"use client";

import { Logo } from "@/assets";
import {
  AwsIcon,
  CodeIcon,
  DartIcon,
  DjangoIcon,
  FigmaIcon,
  FirebaseIcon,
  FlutterIcon,
  GithubIcon,
  NextJsIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  VercelIcon,
  VueIcon,
} from "@/assets/tech-stack";
import { LeftLinesSVG } from "@/assets/tools";
import { useRef } from "react";
import { TechCard } from "./tools-technology-section";

function ToolsAnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="w-[800px] lg:w-[924px] 2xl:w-[1000px] relative flex flex-col gap-8"
    >
      <div className="flex justify-between">
        <div className="relative flex gap-8">
          <TechCard icon={TailwindIcon} />
          <TechCard icon={ReactIcon} />

          <LeftLinesSVG
            style={{
              left: "100%",
              top: "45%",
            }}
            className="absolute z-0 opacity-15 h-[300px] lg:h-[350px] 2xl:h-[380px]"
          />
        </div>
        <div className="relative flex gap-8">
          <TechCard icon={PythonIcon} />
          <TechCard icon={AwsIcon} />

          <LeftLinesSVG
            style={{
              right: "100%",
              top: "45%",
            }}
            className="absolute z-0 opacity-15 -rotate-180 h-[300px] lg:h-[350px] 2xl:h-[380px]"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-8">
          <TechCard icon={NextJsIcon} />
          <TechCard icon={FlutterIcon} />
        </div>
        <div className="flex gap-8">
          <TechCard icon={DjangoIcon} />
          <TechCard icon={DartIcon} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-8">
          <TechCard icon={GithubIcon} />
          <TechCard icon={VueIcon} />
        </div>
        <div className="flex gap-8">
          <TechCard icon={FirebaseIcon} />
          <TechCard icon={VercelIcon} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-8">
          <TechCard icon={CodeIcon} />
          <TechCard icon={FigmaIcon} />
        </div>
        <div className="flex gap-8">
          <TechCard icon={PostgresIcon} />
          <TechCard icon={AwsIcon} />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]">
        <TechCard
          icon={Logo}
          className="size-28 2xl:size-32 bg-[var(--brand-transparent)] rounded-xl border-0"
          iconClassName="size-14 2xl:size-16"
        />
      </div>

      {/* <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-105}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fro
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      /> */}
    </div>
  );
}

export default ToolsAnimatedBeam;
