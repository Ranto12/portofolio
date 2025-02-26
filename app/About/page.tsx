"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  containerVariants,
  imageLoadAnimationProps,
  textVariants,
} from "@/data/animationConfig";

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto my-0 w-full space-y-3 md:grid grid-cols-2  "
    >
      <motion.div className="md:hidden" {...imageLoadAnimationProps}>
        <motion.img
          alt="imageKu"
          src="/assets/images/logo.png"
          className=" w-3/4 bg-white m-auto rounded-full"
        />
      </motion.div>
      <div className="space-y-3 ">
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
        >
          Diriku..........
        </motion.h1>
        <motion.p variants={textVariants} className="text-lg md:text-xl">
          <span className="font-bold">Ranto </span> Seorang Mahasiswa Teknik
          Informatika
        </motion.p>
        <motion.p variants={textVariants} className="text-sm text-[#A1A1AA]">
          Lahir dari seorang petani plosok desa. Keinginginan besar menjadi
          orang berpendidikan untuk merubah nasib keluarga. Bertani bukan hal
          buruk, namun bertani tanpa didasari oleh ilmu seperti masakan yang
          diberi bumbu tanpa racikan. Ya, makanan itu akan enak jika pas namun
          kurang enak jika tanpa takaran. Sama seperti petani, yang hanya
          mengandalkan tenaga tanpa diiringi oleh ilmu. Dari sini aku bertekat
          menjadi orang yang bisa menggennyang pendidikan semampunya. Minimal
          mempunyai bekal untuk hidup dihari tua.
        </motion.p>
        <motion.p variants={textVariants} className="text-sm text-[#A1A1AA]">
          Dengan berkembangnya Teknologi yang semakin pesat namun tidak diiringi
          dengan keseimbangan dengan rakyat menengah kebawah, membuat beberapa
          elemen masyarakat kurang akan infomasi dan teknologi. Aku degan latar
          belakang keluarga yang gaptek, aku baru mengenal Laptop atau komputer
          saat aku menginjak sekolah kelas 2 MTs. Ini adalah awal mula
          ketertarikan aku, namun ketertarikan itu hanya sebatas les tanpa
          mendalami. Wajar, karena Komputer harganya Mahal dan hanya sekolah
          yang bisa menyediakan saat itu. Adapun warnet yang bisa kita kunjungi
          itu sangat jauh lokasinya, sehingga amat sangat tidak mungkin untuk
          hal tersebut. Sederhananya belajar disekolah hanya sebatas menggunakn
          office dan itu pun harus bergantian, Sampai-sampai harus datang lebih
          awal suapaya bisa menggunakan komputer lebih awal dan belajar cara
          mengoprasikannya bukan hanya menggunakan office saja. Menjelang masuk
          SMK barulah bisa aku mendapatkan laptop dari orang tuaku.{" "}
          <span className="text-white">ACER one 14 </span>dengan speak core i3
          dengan ram 2 GB. Kecil memang, namun itu sudah cukup untuk pemula
          sepertiku.
        </motion.p>
        <motion.p variants={textVariants} className="text-sm text-[#A1A1AA]">
          <span className="text-white">HTML</span> sosok astral yang membuatku
          suka dengan frontend. CSS yang buat frontend menjadi keren
          tampilannya. Itu semua aku tau karena sekolah SMK. Ya... walau hanya
          dasar, cuman ini dasar informasi untuk menajadi frontend seperti
          sekarang. Semua itu hanya bertahan selama 1 tahun. Karena Pelajaran
          pemrograman website hanya ada di kelas 1 saja. Sampai akhirnya aku
          mulai kembali belejar frontend pada tahun 2022 saat aku semester 6 di
          Universitas Lampung. Dari sini aku belejar ReactJs, css, tailwind,
          Javascript, deployment, fetching, NextJs, TypeScript dan lain-lain.
        </motion.p>
        <motion.p variants={textVariants} className="text-sm text-[#A1A1AA]">
          Dengan makin berkembang pengetahuan yang aku ketahui, aku siap menghadapi
          tantangan dan siap untuk bekerja didunia teknologi. Melalui landasan
          ketekunan yang terus membara, saya tertekat unruk menciptakan tampilan
          website yang menarik, informatif, eficien, bersaing dan mudah
          dipahami.
        </motion.p>
      </div>
      <motion.div className="hidden md:block" {...imageLoadAnimationProps}>
        <motion.img
          alt="imageKu"
          src="/assets/images/logo.png"
          className=" w-3/4 bg-white m-auto rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
