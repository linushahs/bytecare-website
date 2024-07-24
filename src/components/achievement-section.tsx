"use client";

import React, { useRef } from "react";
import Container from "./container";
import WorkflowCard from "./workflow-card";
import { useScroll } from "framer-motion";

function AchievementSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Container>
      <div
        ref={container}
        className="after:[*] after:bg-background after:w-full after:h-[25px]"
      >
        <div className="sticky top-[var(--card-top-padding)] flex flex-col items-center gap-4">
          <p className="text-3xl bg-gradientHeading bg-clip-text text-transparent font-bold">
            Our Workflow
          </p>

          <p className="text-lg text-textSecondary w-1/2 text-center">
            At our core, we blend innovation and expertise to fuel every
            project, striving to pioneer digital solutions that redefine
            success.
          </p>
        </div>

        <div className="mt-12">
          {achievements.map((achievement, idx) => {
            const targetScale = 1 - (achievements.length - idx) * 0.05;

            return (
              <WorkflowCard
                id={idx}
                achievement={achievement}
                progress={scrollYProgress}
                range={[idx * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default AchievementSection;

const achievements = [
  {
    title: "Discovery & Planning",
    tag: "First",
    description:
      "Through in-depth discussions with stakeholders and thorough analysis, we gather all necessary requirements, conduct feasibility study, and clearly define the project scope to set a solid foundation for successful project execution.",
    thumbnail: "/discovery&planning.png",
  },
  {
    title: "Design & Development",
    tag: "then",
    description:
      "Our team of expert designers and developers work together to create a user-friendly, visually appealing, and functional product that meets your specific business needs.",
    thumbnail: "/design&dev.png",
  },

  {
    title: "Testing & Deployment",
    tag: "then",
    description:
      "Before launching your product, we conduct rigorous testing to ensure that it performs flawlessly. Once everything is in order, we deploy the product and provide ongoing support to ensure its success.",
    thumbnail: "/testing&deploy.png",
  },
];
