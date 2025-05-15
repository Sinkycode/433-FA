import { gallery5 } from "../assets/images/gallery";
import Watermark from "../components/Watermark";
import LogoTag from "../components/LogoTag";

const Gallery4 = () => {
  return (
    <div className="h-screen relative">
      <img
        src={gallery5}
        alt=""
        className="h-full w-full object-cover absolute -z-10"
      />
      {/* content */}
      <div>
        {/* Slogan */}
        <div
          className="absolute z-10 uppercase text-primary flex gap-4 font-medium 
  top-52 left-1/2 -translate-x-1/2
  sm:top-20 sm:bottom-auto sm:left-20 sm:translate-x-0"
        >
          <p>precision.</p>
          <p>passion.</p>
          <p>performance</p>
        </div>
        <div className="absolute top-10 right-0">
          <Watermark textColor="text-white" />
        </div>
        <div className="absolute bottom-10 left-10">
          <LogoTag />
        </div>
      </div>
    </div>
  );
};

export default Gallery4;
