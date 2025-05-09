import React from "react";
import { heroImage } from "../assets/images";
import Watermark from "../components/Watermark";
import { WhoIsForList } from "../constants/index";

const WhoIsFor = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-3">
      <div className="md:col-span-1 relative h-full">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="md:col-span-2 relative grid">
        <div className="sm:absolute right-0 top-10 ml-auto">
          <Watermark />
        </div>

        <div className="padding md:flex md:flex-col md:justify-center h-full">
          <div className="md:text-right text-center lg:grid">
            <h1 className="text-[min(10vw,70px)] leading-none uppercase font-semibold mb-5">
              Who is it for?
            </h1>
            <p className="text-right text-xl">
              433 Football Academy is designed for dedicated young footballers
              who aspire to develop their skills, compete at an elite level, and
              pursue a professional career.
            </p>
            <p className="text-right text-xl">
              Our academy provides a world-class training experience, blending
              tactical intelligence, technical mastery, and physical excellence
              to shape
            </p>
          </div>

          <div className="flex flex-wrap justify-around h-max sm:ml-auto mx-auto mt-10 sm:mt-20 w-full md:w-[80%]">
            {WhoIsForList.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[50px] h-[50px] mb-2"
                />
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {item.breakWord ? (
                  <p className="text-gray-600 text-center">
                    {item.subtext} <br /> {item.subtext2}
                  </p>
                ) : (
                  <p className="text-gray-600">{item.subtext}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsFor;
