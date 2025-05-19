import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Features } from "../constants";
import { Bus } from "../assets/images/gallery";

const ProgramFeatures = () => {
  // Split features into two halves
  const mid = Math.ceil(Features.length / 2);
  const leftFeatures = Features.slice(0, mid);
  const rightFeatures = Features.slice(mid);

  return (
    <section className="min-h-screen padding relative">
      {/* Center Image - responsive width and hidden on small screens */}
      <div className="lg:absolute top-1/2 left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[700px]">
        <img
          src={Bus}
          alt="Centerpiece"
          className="object-contain max-w-full"
        />
      </div>

      <div className="md:grid grid-cols-3 gap-6 flex flex-col items-center justify-center relative lg:h-screen">
        {/* Left column */}
        <motion.div
          className="lg:absolute top-0 left-0 md:w-56 lg:left-6"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Elite team</h1>
          <p className="text-primary">
            Personalized coaching and cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          className="lg:absolute top-[30%] left-0 md:w-56 sm:top-0 lg:-translate-x-1/2 lg:left-1/2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Video Analysis</h1>
          <p className="text-primary">
            Analyze performance, refine tactics, and improve with expert
            feedback
          </p>
        </motion.div>

        <motion.div
          className="lg:absolute bottom-0 left-0 md:w-56"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Pro-Club Clinics & Games</h1>
          <p className="text-primary">
            Exclusive access to top-level La Liga clubs such as Atletico de
            Madrid, Racing de Santander or Real Oviedo
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="lg:absolute top-0 right-0 lg:text-right md:w-56"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">Football Reports</h1>
          <p className="text-primary">
            Track progress, receive feedback, and set targets for improvement
          </p>
        </motion.div>

        <motion.div
          className="lg:absolute bottom-[30%] left-0 md:w-56 sm:bottom-0 lg:-translate-x-1/2 lg:left-1/2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">National Tournaments</h1>
          <p className="text-primary">
            Showcase talent on a national stage and catch the eye of scouts
          </p>
        </motion.div>

        <motion.div
          className="lg:absolute bottom-0 right-0 md:w-56 lg:text-right"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">High Level Competition</h1>
          <p className="text-primary">
            Compete against top-tier opponents, developing resilience and skills
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
