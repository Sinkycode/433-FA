import React from "react";
import { desertedImage } from "../assets/images/gallery";
import logo from "../assets/images/433-logo-lightmode.png";
import logoTwo from "../assets/images/433-logo.png";
import Slogan from "../components/Slogan";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={desertedImage}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 via-60% to-transparent to-90%"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-around h-full px-4 sm:px-6 md:px-12 text-center">
        <img
          src={logo}
          alt="Light Mode Logo"
          className="w-40 sm:w-48 md:w-60 lg:w-64 mb-6 md:mb-0"
        />
        <img
          src={logoTwo}
          alt="Dark Mode Logo"
          className="w-40 sm:w-48 md:w-60 lg:w-64 invert"
        />
        <div className="absolute bottom-10">
          <Slogan color={"text-white"} divideColor={"divide-white"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
