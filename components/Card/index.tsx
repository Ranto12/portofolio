import Image from "next/image";
import React from "react";

interface Data {
  name : String;
  id : number;
  link : string;
  icons : string;
  hastag : String;
  status : String;
}

const Card: React.FC<Data> = ({hastag, icons, status, link, name}) => {
  return (
    <div className="w-full cursor-pointer p-6 -mx-5  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100 hover:bg-opacity-5">
      <a
      href={link}
      target="_blank">

    <Image alt="icons" src={icons} width={40} height={40} className="p-1 bg-slate-600 rounded-full"/>
      <h5 className="mt-3  text-lg font-semibold  tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-[#A1A1AA]">
      {hastag}
    </p>
    <a
      className="inline-flex text-sm items-center text-white hover:underline"
      >
     {status}
      <svg
        className="w-5 h-5 ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
      </svg>
    </a>
        </a>
  </div>
  );
};

export default Card;