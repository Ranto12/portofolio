"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "../../data/animationConfig";

const Profile = () => {
  return (
    <div className="mx-0 my-[2em] flex min-h-screen flex-[1] items-center justify-center max-w-md:flex-col">
       
      <div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
        >
          <motion.h1
            variants={textVariants}
            className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
          >
            <p>Welcome to My Portofolio</p>
          </motion.h1>
          <motion.h1 variants={textVariants} className="text-lg md:text-xl">
            <p className="text-base">
              My Name Is <span className="font-bold text-lg">Ranto </span>
            </p>
          </motion.h1>
          <div className="flex space-x-2">
            <motion.p variants={textVariants} className="text-lg md:text-xl">
              <a
                href="https://github.com/Ranto12"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
            </motion.p>
            <motion.p variants={textVariants} className="text-lg md:text-xl">
              to check my Project.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div className="mx-[1em] my-0 text-center">
        <motion.div {...imageLoadAnimationProps}>
          <picture className="block min-h-[250px]">
            <source
              srcSet="/assets/images/ckckc-removebg-preview.png"
              media="(min-width: 600px)"
            />
            <img
              className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
              alt="Illustration of person reading a book"
              src="/assets/images/ckckc-removebg-preview.png"
              width="550"
              height="466"
            />
          </picture>
        </motion.div>

        <div>
          <p className="text-left text-[0.8em] italic">
            Download{" "}
            <a
              href="Ranto-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={"Ranto-resume.pdf"}
            >
              {" "}
              cv{" "}
            </a>{" "}
            Or Contact{" "}
            <a href="mailto:rantoirwanda08@gmail.com" target="_blank">
              e-mail
            </a>
          </p>
        </div>
      </div>
    </div>

    // disini

    // <div>
    //   <div className="py-20 px-10 space-y-5 md:grid min-h-screen lg:grid-cols-2 ">
    //     <div className="pt-10  flex justify-center md:px-20">
    //       <Image
    //         alt="ranto"
    //         src={Fotoku}
    //         className="md:h-screen object-cover object-right-top rounded-t-full  shadow-sm md:px-20"
    //       />
    //     </div>
    //     <div className="lg:flex items-center ">
    //       <div className="space-y-4 ">
    //         <p className="font-bold text-sm er md:text-5xl">Hi my name is</p>
    //         <span className="font-bold text-6xl">Ranto</span>
    //         <p className="md:text-lg">
    //           I'm a software engineer with expertise in creating top-notch
    //           digital experiences. My current focus is on developing products
    //           that are accessible and centered around user needs, as part of the
    //           team at
    //         </p>
    //         <div className="flex w-full space-x-5 items-center">
    //           <p className="px-5 py-3 rounded-lg bg-black text-white">
    //             Resume Down
    //           </p>
    //           <p>Contact</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
