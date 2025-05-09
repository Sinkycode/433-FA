import React from "react";
import { motion } from "framer-motion";
import jerseyBack from "../assets/images/jersey back.png";
import jerseyFront from "../assets/images/jersey front.png";
import { img1 } from "../assets/images/gallery"; // Add your background image
import { MissionVisionList } from "../constants/index";

const MissionVision = () => {
  // Animation variants for jerseys
  const jerseyVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for text content
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 overflow-hidden">
      {/* Faded Background Image */}

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-50/80 to-white/80 z-0"></div>

      {/* 3D Background Jerseys */}
      <div className="absolute inset-0 w-full h-full flex justify-between items-center z-10 pointer-events-none overflow-hidden">
        <div className=" w-full flex justify-between absolute top-0 h-full">
          {/* Jersey Front - Left */}
          <motion.img
            src={jerseyFront}
            alt="Jersey Front"
            className="w-[600px] object-contain pointer-events-auto transition-transform duration-300 ease-in-out jersey-front absolute left-[-70%] top-32 lg:static lg:w-72 hidden sm:block"
            style={{
              filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.2))",
            }}
            variants={jerseyVariants}
            initial="float"
            animate="float"
            whileHover="hover"
          />

          {/* Jersey Back - Right */}
          <motion.img
            src={jerseyBack}
            alt="Jersey Back"
            className="w-[600px] object-contain pointer-events-auto transition-transform duration-300 ease-in-out jersey-back absolute right-[-70%] top-32 lg:static lg:w-72 hidden sm:block "
            style={{
              filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.2))",
            }}
            variants={jerseyVariants}
            initial="float"
            animate="float"
            whileHover="hover"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-2xl w-full space-y-12 text-center px-4"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {MissionVisionList.map((item, index) => (
          <motion.div
            key={index}
            className="px-4 sm:px-6"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {item.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom CSS for sliding jerseys */}
      <style jsx>{`
        .jersey-front {
          transform: translateX(
            clamp(-100%, calc((1440px - 100vw) * -0.5), 0px)
          );
        }
        .jersey-back {
          transform: translateX(clamp(0px, calc((1440px - 100vw) * 0.5), 100%));
        }
        @media (min-width: 1440px) {
          .jersey-front {
            transform: translateX(0);
          }
          .jersey-back {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
