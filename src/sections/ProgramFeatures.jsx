import React from "react";
import { Features } from "../constants";
import { Bus } from "../assets/images/gallery";

const ProgramFeatures = () => {
  // Split features into two halves
  const mid = Math.ceil(Features.length / 2);
  const leftFeatures = Features.slice(0, mid);
  const rightFeatures = Features.slice(mid);

  return (
    <section className="relative p-6 sm:h-screen min-h-screen flex flex-col justify-center items-center overflow-x-hidden w-full lg:py-11">
      {/* Image start */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 md:flex justify-center items-center w-[700px] hidden ">
        <img src={Bus} alt="Centerpiece" className="object-contain" />
      </div>
      {/* end */}

      <div className="h-full w-full relative grid gap-5 lg:w-[70vw] mx-auto">
        {/* Left column */}
        <div className="md:absolute top-0 left-0 md:w-56 lg:left-6">
          <h1 className="text-2xl font-bold">Elite team</h1>
          <p className="text-primary">
            Personalized coaching and cutting-edge technology
          </p>
        </div>

        <div className="md:absolute top-[30%] left-0 md:w-56 sm:top-0 sm:-translate-x-1/2 sm:left-1/2 ">
          <h1 className="text-2xl font-bold">Video Analysis</h1>
          <p className="text-primary">
            Analyze performance, refine tactics, and improve with expert
            feedback
          </p>
        </div>

        <div className="md:absolute bottom-0 left-0 md:w-56">
          <h1 className="text-2xl font-bold">Pro-Club Clinics & Games</h1>
          <p className="text-primary">
            Exclusive access to top-level La Liga clubs such as Atletico de
            Madrid, Racing de Santander or Real Oviedo
          </p>
        </div>
        {/* Right column */}
        <div className="md:absolute top-0 right-0 sm:text-right md:w-56">
          <h1 className="text-2xl font-bold">Football Reports</h1>
          <p className="text-primary">
            Track progress, receive feedback, and set targets for improvement
          </p>
        </div>

        <div className="md:absolute bottom-[30%] left-0 md:w-56 sm:bottom-0 sm:-translate-x-1/2 sm:left-1/2 ">
          <h1 className="text-2xl font-bold">National Tournaments</h1>
          <p className="text-primary">
            Showcase talent on a national stage and catch the eye of scouts
          </p>
        </div>

        <div className="md:absolute bottom-0 right-0 md:w-56 sm:text-right">
          <h1 className="text-2xl font-bold">High Level Competition</h1>
          <p className="text-primary">
            Compete against top-tier opponents, developing resilience and skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
