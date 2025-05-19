import React, { memo } from "react";
import { desertedImage } from "../assets/images/gallery";
import logo from "../assets/images/433-logo-lightmode.png";
import logoTwo from "../assets/images/433-logo.png";
import Slogan from "../components/Slogan";
import { motion } from "framer-motion"; // Import motion from framer-motion

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.img
        src={desertedImage}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        initial={{ scale: 1.1 }} // Start slightly zoomed in
        whileInView={{ scale: 1 }} // Animate to normal scale
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 via-60% to-transparent to-90%" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-around h-full px-4 sm:px-6 md:px-12 text-center">
        <picture>
          <source srcSet={logo} media="(prefers-color-scheme: light)" />
          <source srcSet={logoTwo} media="(prefers-color-scheme: dark)" />
          <motion.img
            src={logo}
            alt="433 Logo"
            className="w-40 sm:w-48 md:w-60 lg:w-64 mb-6 md:mb-0"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: -50 }} // Start above and transparent
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5, delay: 0.3 }} // Delay for a staggered effect
          />
        </picture>

        <div className="absolute bottom-10 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5, delay: 0.5 }} // Delay for a staggered effect
          >
            <Slogan color="text-white" divideColor="divide-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
