"use client";

import { containerVariants, textVariants } from "@/data/animationConfig";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 space-y-3 md:grid  "
    >
      <motion.h1 className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl">
        Rekomendasi sistem tanaman mengunakan KNN
      </motion.h1>
      <br />
      <br />
      <br />
      <motion.h4>Langkah-Langkah pembuatan sistem sebagai berikut</motion.h4>
      <motion.h5>1. Setup Project KNN mengunakan nextjs</motion.h5>
      <motion.p className="text-sm text-[#A1A1AA]">
        Next.js adalah framework React yang digunakan untuk membangun aplikasi
        web dengan fitur-fitur seperti rendering sisi server (server-side
        rendering), pembuatan situs statis (static site generation), dan API
        routes. TypeScript adalah bahasa pemrograman yang dikembangkan oleh
        Microsoft yang merupakan superset dari JavaScript, memberikan tipe
        statis dan alat pengembang yang lebih baik. Next.js mendukung penggunaan
        TypeScript secara default, sehingga Anda dapat menulis aplikasi Next.js
        menggunakan TypeScript. Berikut adalah langkah-langkah dasar untuk
        memulai proyek Next.js dengan TypeScript:
      </motion.p>
      <div className="p-1 bg-slate-400">
        <motion.code>
          npx create-next-app@latest --typescript
        </motion.code>
      </div>
    </motion.div>
  );
};

export default page;
