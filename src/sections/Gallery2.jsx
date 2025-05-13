import { gallery5 } from "../assets/images/gallery";
import Watermark from "../components/Watermark";

const Gallery2 = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex flex-col items-center justify-center px-4 sm:px-8 mb-4">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/70 -z-2" />

      {/* Grayscale Background Image */}
      <img
        src={gallery5}
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover grayscale -z-10"
        loading="lazy"
        decoding="async"
      />

      {/* Slogan */}
      <div
        className="absolute z-10 uppercase text-primary flex gap-4 font-medium 
  top-auto bottom-10 left-1/2 -translate-x-1/2
  sm:top-20 sm:bottom-auto sm:left-20 sm:translate-x-0"
      >
        <p>precision.</p>
        <p>passion.</p>
        <p>performance</p>
      </div>

      {/* Watermark */}
      <div className="absolute top-20 right-0">
        <Watermark />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
        <div className="flex items-center gap-x-3">
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-extrabold leading-none">
            3
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Sessions in
          </p>
        </div>

        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-extrabold leading-none">
            1
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Season
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
