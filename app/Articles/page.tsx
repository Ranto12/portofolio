"use client"
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "@/data/animationConfig";

const Articles = () => {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="mx-auto my-0 w-full max-w-[42em]"
  >
    <motion.h1
      variants={textVariants}
      className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl"
    >
      Articles
    </motion.h1>
  </motion.div>
  )
}

export default Articles