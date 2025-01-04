import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      <img width={150} src={assets.logo} />
      <p>
      Created by - 
      <a
        className="ml-2 text-gray-800 hover:text-violet-700 hover:scale-110 transition-transform duration-300"
        href="https://piyushrathwe.tech"
        target="_blank"
        rel="noopener noreferrer"
      >
         Piyush Rathwe
      </a>
    </p>
    </div>
  );
};

export default Footer;
