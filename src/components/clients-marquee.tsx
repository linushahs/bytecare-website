"use client";

import useMediaQuery from "@/hooks/use-media-query";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function ClientsMarquee() {
  const isMobile = useMediaQuery("(max-width:840px)");
  const Tag = isMobile ? Marquee : "ul";

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      viewport={{ once: true }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
      className="flex flex-col gap-16 items-center w-full sm:w-[900px]"
    >
      <p className="text-textPrimary text-lg text-center">
        Trusted by the leading organizations
      </p>

      <Tag className="flex gap-4 tall:gap-12 justify-between w-[90%] lg:w-full list-none">
        {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map(
          (logo, index) => (
            <li key={index} className="mr-16 sm:mr-24 md:m-0">
              <Image
                src={logo}
                alt="company-logo"
                width={300}
                height={150}
                className="w-[120px] sm:w-[130px] tall:w-[160px]"
              />
            </li>
          )
        )}
      </Tag>
    </motion.div>
  );
}

export default ClientsMarquee;
