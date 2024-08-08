"use client";

import React from "react";
import Container from "./ui/container";
import { motion } from "framer-motion";
import { ThreeColumnLayout } from "./ui/column-layout";
import { services } from "@/utils/constants";
import ServiceCard from "./service-card";

function ServicesSection() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{  y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{
            type: "spring",
            ease: "easeIn",
            duration: 1,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-3xl leading-[115%] md:leading-[100%] bg-textGradientDefault bg-clip-text text-transparent font-bold text-center">
            {`Here's`} what we provide
          </p>

          <p className="text-lg text-center text-textSecondary mt-5 w-[90%] sm:w-full md:mt-3">
            Discover how we can help you build & grow your business
          </p>
        </motion.div>

        <div className="flex gap-12 mt-10">
          <ThreeColumnLayout>
            {services.map(({ title, description, icon }, index) => (
              <motion.div
                key={title}
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{
                  type: "spring",
                  ease: "easeIn",
                  duration: 1.5,
                  delay: 0.5 + index * 0.2, // Stagger effect
                }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  title={title}
                  description={description}
                  icon={icon}
                />
              </motion.div>
            ))}
          </ThreeColumnLayout>
        </div>
      </div>
    </Container>
  );
}

export default ServicesSection;
