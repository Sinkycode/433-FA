import {
  manager1,
  stretchGround,
  startRunning,
  soccerBall,
} from "../assets/images/gallery";
import { motion } from "framer-motion"; // Import motion from framer-motion

const TeamManagement = () => {
  return (
    <div className="h-screen md:min-h-screen bg-white relative mb-10">
      <div className="ml-auto h-full w-full md:w-4/5 lg:w-[70%] -z-20 ">
        <div className="bg-white/50 h-full w-full absolute backdrop-blur-sm sm:hidden"></div>
        <motion.img // Use motion.img for the parallax effect
          src={soccerBall}
          alt="soccer ball"
          className="w-full h-full object-cover"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="z-20 absolute top-0 w-full h-full flex items-center ">
        <div className="sm:w-[70%] sm:border-4 border-white relative">
          <motion.img // Use motion.img for the parallax effect
            src={manager1}
            alt=""
            className="mb-4 border-4 border-white sm:border-0 sm:mb-0"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="sm:absolute right-0 top-1/2 sm:-translate-y-1/2 sm:translate-x-1/2 grid gap-4">
            <motion.div // Wrap images in motion.div for parallax effect
              className="sm:w-96 h-52 border-4 border-white"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={startRunning}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div // Wrap images in motion.div for parallax effect
              className="sm:w-96 h-52 border-4 border-white"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={stretchGround}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <h1 className="font-nexa uppercase text-2xl z-20 font-bold absolute bottom-5 left-10 bg-white p-2">
        Team management
      </h1>
    </div>
  );
};

export default TeamManagement;
