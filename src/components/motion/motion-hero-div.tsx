"use client";

import React from "react";
import { motion } from "framer-motion";

function MotionHeroDiv({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.3,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { MotionHeroDiv };
