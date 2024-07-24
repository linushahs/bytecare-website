import { ToolsDots } from "@/assets";
import BlurryBlob from "./blurry-blob";
import Container from "./ui/container";
import React from "react";
import AnimatedBeam from "./animated-beam-tools";

function ToolsAndTechnologySection() {
  return (
    <Container>
      <div className="relative w-full">
        <ToolsDots className="w-full " />

        <BlurryBlob className="w-full h-[700px] absolute top-20 left-1/2 -translate-x-1/2" />
        <p className="text-[54px] font-bold leading-[120%] absolute top-[25%] left-[28%] text-center text-transparent bg-textGradientDefault bg-clip-text">
          We use latest tools and <br />
          technologies to build <br /> top-notch products
        </p>

        <div className="flex justify-center w-full">
          <AnimatedBeam />
        </div>
      </div>
    </Container>
  );
}

function TechCard({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="bg-fill border border-borderSoft grid place-items-center rounded-[12px] p-5">
      <Icon className="size-10" />
    </span>
  );
}

export default ToolsAndTechnologySection;
export { TechCard };
