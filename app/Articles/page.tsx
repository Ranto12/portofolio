"use client";
import React from "react";
import { containerVariants, textVariants } from "@/data/animationConfig";
import { motion } from "framer-motion";
import Modalemage from "./ModalImage";
import { Button, Flex, Tooltip } from "@mantine/core";
import { DataSertifikat } from "./data";

const Articles = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full"
    >
      <motion.h1
        variants={textVariants}
        className="mb-20 text-2xl font-bold leading-[1.3] md:text-4xl"
      >
        Sertifikat
      </motion.h1>
      <Flex
        wrap="wrap"
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg', lg:"xl" }}
        justify={{ sm: 'center' }}
      >
        {DataSertifikat.map((_item, i) => (
          <Modalemage key={i} image={_item.image} />
        ))}
      </Flex>
    </motion.div>
  );
};

export default Articles;
