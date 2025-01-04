import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border drop-shadow-sm p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">Select and upload your image<br/> effortlessly.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-sm p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} />
          <div>
            <p className="text-xl font-medium">Remove background</p>
            <p className="text-sm text-neutral-500 mt-1">Let AI instantly isolate the <br/>subject perfectly.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border drop-shadow-sm p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">Save your background-free  <br/>image with a single click.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Steps;
