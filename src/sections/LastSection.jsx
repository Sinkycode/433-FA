import { stretch1 } from "../assets/images/gallery";
import LogoTag from "../components/LogoTag";
import Watermark from "../components/Watermark";
import { FiPhone } from "react-icons/fi"; // Phone icon
import { FiGlobe } from "react-icons/fi"; // Website (Globe) icon
import { FiMapPin } from "react-icons/fi"; // Location icon

const LastSection = () => {
  return (
    <div className="min-h-screen relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/79 to-white/70"></div>

      {/* Background Image */}
      <img
        src={stretch1}
        alt=""
        className="h-full w-full object-cover absolute -z-10"
      />
      {/* content */}
      <div className="h-[100vh] w-full border-2 isolate flex flex-col items-center justify-center gap-4">
        {/* Watermark */}
        <div className="absolute top-10 right-0">
          <Watermark />
        </div>

        <div className="w-[40%] sm:w-auto">
          <LogoTag
            textSize="sm:w-52"
            logoSize="sm:w-32"
            lineSize="divide-x-0 sm:divide-x-8"
            layout="flex-col-reverse sm:flex-row mt-10 gap-4"
          />
        </div>
        <div className="uppercase text-primary text-sm mt-3 flex gap-4 font-nexa flex-wrap items-center justify-center">
          <p>precision.</p>
          <p>passion.</p>
          <p>performance</p>
        </div>

        {/* Social links */}
        <div className="flex flex-col sm:flex-row sm:absolute top-10 left-20 gap-4 mt-10">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-full">
              <FiPhone className="text-xl text-white" />
            </div>
            <span className="uppercase font-medium text-sm">
              +234 912 407 7133
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-full">
              <FiMapPin className="text-xl text-white" />
            </div>
            <span className="uppercase font-medium text-sm">
              City Park wuse 2
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-full">
              <FiGlobe className="text-xl text-white" />
            </div>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-medium text-sm"
            >
              433academyabj@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
