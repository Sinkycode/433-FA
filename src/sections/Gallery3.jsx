import { conedrill1, football, PWB1 } from "../assets/images/gallery";
import Watermark from "../components/Watermark";
import LogoTag from "../components/LogoTag";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Gallery3 = () => {
  return (
    <div className="relative min-h-screen sm:h-screen overflow-hidden">
      {/* Overlayer */}
      <div className="h-full w-full bg-white/80 absolute -z-0"></div>
      {/* Background */}
      <img
        src={PWB1}
        alt=""
        className="absolute h-full object-cover w-full -z-10"
      />
      {/* Content */}
      <div className="z-10 relative backdrop-blur-sm flex flex-col sm:flex-row sm:h-full ">
        <motion.div // Use motion.div for the images
          className="flex flex-col gap-4 sm:w-[40%] sm:m-7"
          initial={{ opacity: 0, x: -100 }} // Slide in from the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
          transition={{ duration: 0.5 }}
        >
          <img src={conedrill1} alt="" />
          <img src={football} alt="" />
        </motion.div>
        <div className="absolute bottom-10 right-20">
          <LogoTag />
        </div>
        {/* texts */}
        <div className="relative h-screen sm:h-auto grid place-items-center sm:flex-1 sm:justify-end">
          <div className="absolute top-10 right-0">
            <Watermark />
          </div>
          <div className="grid justify-center sm:pr-32 gap-5 ">
            <motion.div // Wrap the first text block in motion.div
              initial={{ opacity: 0, x: 100 }} // Slide in from the right
              whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.5 }}
              className="flex flex-col items-end"
            >
              <h1 className="text-8xl sm:text-[8rem] font-medium uppercase">
                1.5m
              </h1>
              <p className="text-lg">Per season</p>
            </motion.div>
            <motion.div // Wrap the second text block in motion.div
              initial={{ opacity: 0, x: 100 }} // Slide in from the right
              whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.5 }}
              className="flex flex-col items-end"
            >
              <h1 className="text-8xl sm:text-[8rem] font-medium uppercase">
                500k
              </h1>
              <p className="text-lg">Per session</p>
            </motion.div>
            {/* Slogan */}
            <motion.div // Wrap the slogan in motion.div
              initial={{ opacity: 0, y: 20 }} // Start slightly below
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
              transition={{ duration: 0.5 }}
              className="mt-10 uppercase text-primary flex gap-4 font-medium"
            >
              <p>precision.</p>
              <p>passion.</p>
              <p>performance</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery3;
