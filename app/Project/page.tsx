"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/data/animationConfig";
import { Card } from "@/components";
import Data from ".";

const Project = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full"
    >
      <motion.h1 className="mb-2 text-2xl font-bold leading-[1.3] md:text-4xl ">
        PROJECTS
      </motion.h1>
      <motion.h1 className="mb-10 text-xl font-bold leading-[1.3] md:text-3xl ">
        KUMPULAN PROJECT RANS
      </motion.h1>
      <motion.p className="md:max-w-[42em] text-[#A1A1AA]">
        Selamat datang dalam konten project Rans, menghadirkan kumpulan project
        luar biasa dari seorang Ranto. Kombinasi antara imajinasi serta
        kecerdasan akan menjadikan hal yang keren untuk diciptakan. Project akan
        menjadikan sebuah bukti fakta untuk sebuah kemampuan dan akan
        terakselerasi dengan sebuah kejujuran.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-8  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {Data.map((item, i) => {
          return (
            <Card
              key={item.id}
              status={item.status}
              hastag={item.hastag}
              icons={item.icons}
              id={item.id}
              link={item.link}
              name={item.name}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Project;
