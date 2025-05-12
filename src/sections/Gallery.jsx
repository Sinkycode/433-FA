import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  galleryBig,
} from "../assets/images/gallery";
import LogoTag from "../components/LogoTag";
import SocialLinks from "../components/SocialLinks";

const images = [
  { src: gallery1, id: 1 },
  { src: gallery2, id: 2 },
  { src: gallery3, id: 3 },
  { src: gallery4, id: 4 },
];

const imageVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const bigImageVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.2,
      type: "spring",
      stiffness: 80,
    },
  },
};

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="md:h-screen min-h-screen relative p-4 md:overflow-hidden"
    >
      <div className="w-full h-full grid md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <motion.img
            key={img.id}
            src={img.src}
            alt={`Gallery ${img.id}`}
            custom={i}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariant}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        ))}

        <motion.img
          src={galleryBig}
          alt="Gallery Big"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={bigImageVariant}
          className="w-full h-full object-cover md:col-span-2 md:row-span-2 rounded-lg shadow-xl"
        />

        <div className="p-6">
          <div className=" flex justify-center items-center">
            <LogoTag textSize="w-52" logoSize="w-32" />
          </div>
          <div className="flex justify-start">
            <SocialLinks textColor="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
