import React, { memo } from "react";
import { desertedImage } from "../assets/images/gallery";
import logo from "../assets/images/433-logo-lightmode.png";
import logoTwo from "../assets/images/433-logo.png";
import Slogan from "../components/Slogan";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={desertedImage}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 via-60% to-transparent to-90%" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-around h-full px-4 sm:px-6 md:px-12 text-center">
        <picture>
          <source srcSet={logo} media="(prefers-color-scheme: light)" />
          <source srcSet={logoTwo} media="(prefers-color-scheme: dark)" />
          <img
            src={logo}
            alt="433 Logo"
            className="w-40 sm:w-48 md:w-60 lg:w-64 mb-6 md:mb-0"
            loading="lazy"
            decoding="async"
          />
        </picture>

        <div className="absolute bottom-10 w-full flex justify-center">
          <Slogan color="text-white" divideColor="divide-white" />
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
