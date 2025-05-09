import Watermark from "../components/Watermark";
import { logo, aboutBg } from "../assets/images";
import LogoTag from "../components/LogoTag";

const AboutSection = () => {
  return (
    <div className="h-full w-full relative py-10 pt-10 overflow-hidden ">
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutBg}
          alt="Hero Background"
          className="h-full w-full object-cover opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 via-60% to-transparent to-90%"></div>
      </div>

      <div className="flex flex-col-reverse gap-3">
        <div className="sm:absolute top-10 right-0">
          <Watermark />
        </div>

        <div className="lg:pl-[15rem] pl-5">
          <img
            src={logo}
            alt="433 academy logo"
            className="invert w-[min(40vw,300px)]"
          />
        </div>
      </div>

      <div className="space-y-5 mt-10 container mx-auto lg:px-[15rem] px-5 font-bold mb-5">
        <p>
          A premier high-performance institution dedicated to shaping the next
          generation of elite footballers. At 433 football academy, we don't
          just train players - we engineer excellence.
        </p>
        <p>
          Grounded in the principles of precision, Passion, and performance, our
          methodology blends world-class coaching, cutting-edge training
          techniques, and an unwavering commitment to player development.
        </p>
        <p>
          We provide the tools, the vision, and the pathway to success-because
          at 433, football is more than a game; it's a legacy in the making.
        </p>
      </div>

      <div className="lg:absolute bottom-10 ml-5">
        <LogoTag />
      </div>
    </div>
  );
};

export default AboutSection;
