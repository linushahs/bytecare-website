"use client";

import React, { useRef } from "react";
import { TechCard } from "./tools-technology-section";
import {
  AwsIcon,
  DartIcon,
  DjangoIcon,
  FirebaseIcon,
  FlutterIcon,
  GithubIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  VercelIcon,
  VueIcon,
} from "@/assets/tech-stack";

function AnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-2/3 flex flex-col gap-8">
      <div className="flex justify-between">
        <div ref={div1Ref} className="flex gap-8">
          <TechCard icon={TailwindIcon} />
          <TechCard icon={ReactIcon} />
        </div>
        <div ref={div2Ref} className="flex gap-8">
          <TechCard icon={PythonIcon} />
          <TechCard icon={AwsIcon} />
        </div>
      </div>

      <div className="flex justify-between">
        <div ref={div3Ref} className="flex gap-8">
          <TechCard icon={NextJsIcon} />
          <TechCard icon={FlutterIcon} />
        </div>
        <div ref={div4Ref} className="flex gap-8">
          <TechCard icon={DjangoIcon} />
          <TechCard icon={DartIcon} />
        </div>
      </div>

      <div className="flex justify-between">
        <div ref={div5Ref} className="flex gap-8">
          <TechCard icon={GithubIcon} />
          <TechCard icon={VueIcon} />
        </div>
        <div ref={div6Ref} className="flex gap-8">
          <TechCard icon={FirebaseIcon} />
          <TechCard icon={VercelIcon} />
        </div>
      </div>
    </div>
  );
}

export default AnimatedBeam;
