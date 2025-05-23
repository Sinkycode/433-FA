import { FacilitiesList } from "../constants/index";
import SocialLinks from "../components/SocialLinks";
import Watermark from "../components/Watermark";
import Slogan from "../components/Slogan";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Facilities = () => {
  return (
    <div className="min-h-screen padding relative">
      <div className="sm:absolute left-15 top-10 mb-10 flex items-center justify-center">
        <Slogan color={"text-primary"} divideColor={"divide-primary"} />
      </div>
      <div className="sm:absolute right-0 top-10 ml-auto mb-10">
        <Watermark />
      </div>

      <div className="sm:grid sm:grid-cols-2 gap-5 sm:mt-10">
        {FacilitiesList.map((item, index) => (
          <motion.div // Use motion.div for the parallax effect
            key={index}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5, delay: index * 0.1 }} // Add a delay based on index for staggered effect
          >
            <div>
              <h1 className="uppercase font-bold text-3xl mb-6">
                {item.facility}
              </h1>
              <img src={item.image} alt="" className="mb-6" />
            </div>
            <div>
              <h1 className="text-primary uppercase font-bold mb-1 text-lg">
                {item.title}
              </h1>
              <p className="text-lg">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-5 left-10">
        <SocialLinks textColor={"text-primary"} />
      </div>
    </div>
  );
};

export default Facilities;
