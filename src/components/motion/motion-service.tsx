"use client";

import React from "react";
import { motion } from "framer-motion";

function MotionService({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.9, y: 40, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 100 }}
      transition={{
        type: "spring",
        damping: 9,
        ease: "easeIn",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionService;
