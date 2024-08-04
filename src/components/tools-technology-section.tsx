import { ToolsDots } from "@/assets";
import { cn } from "@/utils";
import React from "react";
import ToolsAnimatedBeam from "./animated-beam-tools";
import BlurryBlob from "./blurry-blob";
import Container from "./ui/container";

function ToolsAndTechnologySection() {
  return (
    <Container>
      <div className="relative w-full">
        <ToolsDots className="w-full " />

        <BlurryBlob className="w-full opacity-100 h-[500px] lg:h-[700px] absolute top-[260px] left-1/2 lg:left-[60%] -translate-x-1/2" />
        <p className="w-full text-3xl font-bold leading-[120%] absolute top-[22%] lg:top-[24%] left-[50%] -translate-x-1/2 text-center text-transparent bg-textGradientDefault bg-clip-text">
          We use latest tools and <br />
          technologies to build <br /> top-notch products
        </p>

        <div className="flex justify-center w-full relative mt-6 lg:mt-0">
          <ToolsAnimatedBeam />
        </div>
      </div>
    </Container>
  );
}

interface TechCardProps {
  icon: React.ElementType;
  className?: string;
  iconClassName?: string;
}

function TechCard({ icon: Icon, className, iconClassName }: TechCardProps) {
  return (
    <span
      className={cn(
        "border border-borderSoft bg-[var(--brand-light)] grid z-30 place-items-center rounded-[12px] p-5 lg:p-6 shadow-techCardShadow",
        className
      )}
    >
      <Icon className={cn("size-8 2xl:size-10", iconClassName)} />
    </span>
  );
}

export default ToolsAndTechnologySection;
export { TechCard };
