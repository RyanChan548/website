import { readConfigFile } from "typescript";
import React from "react";
readConfigFile;

const Hero = () => {
  return (
    <div className="flex items-stretch justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay*/}
      <div className="w-full bg-black/70 items-center justify-center h-screen bg-fixed bg-center bg-cover">
        <div className="text-white z-[2]">
          <h1 className="text-2xl text-white">Orange Laboratories</h1>
          <button>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
