import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-text-primary">
      <div className="mx-auto my-4 w-full  max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary  space-y-5 items-center md:px-20   text-white  md:space-y-0 md:flex md:justify-between lg:px-36">
        {/* <div className="font-semibold text-3xl">Ranto Profile</div> */}
        <div>© Copyright by 2023 Rantoirwanda08@gmail.com</div>
        <div className="flex space-x-4 justify-center">
          <div className="text-white  space-x-5 flex">
            <ul>
              <Link
                href="https://www.linkedin.com/in/ranto-6266101a3/"
                target="_blank"
              >
                <Image
                  src={"/linkedin.svg"}
                  alt="linkedin"
                  className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                  width={500}
                  height={500}
                />
              </Link>
            </ul>
            <ul>
              <Link
                href="https://www.facebook.com/ranto.koplak.121519/"
                target="_blank"
              >
                <Image
                  src={"/facebook.svg"}
                  alt="facebook"
                  className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                  width={500}
                  height={500}
                />
              </Link>
            </ul>
            <ul>
              <Image
                src={"/twitter.svg"}
                alt="twiter"
                className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                width={500}
                height={500}
              />
            </ul>
            <ul>
              <Link href="https://github.com/Ranto12" target="_blank">
                <Image
                  src={"/github.svg"}
                  alt="github"
                  className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                  width={500}
                  height={500}
                />
              </Link>
            </ul>
            <ul>
              <Link href="https://www.instagram.com/ranto.21/" target="_blank">
                <Image
                  src={"instagram.svg"}
                  alt="instagram"
                  className="w-6 duration-500 hover:-translate-y-1 cursor-pointer"
                  width={500}
                  height={500}
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
