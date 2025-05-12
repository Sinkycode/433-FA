import NumberTag from "../components/NumberTag";
import { MethodologyList } from "../constants";
import { methodology1 } from "../assets/images/gallery";
import LogoTag from "../components/LogoTag";

const Methodology = () => {
  return (
    <div className="py-12 px-4 sm:px-8">
      {/* Background Image with Left-to-Right White Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, white 70%, rgba(255,255,255,0.7) 90%, transparent), url(${methodology1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content above the background */}
      <div className="relative z-10">
        <div className=" mb-8">
          <p className="uppercase text-primary font-bold ml-8">
            Where dreams meet dedication
          </p>
          <span className="block border-b-4 border-primary w-[19.2rem]"></span>
        </div>
        {/* Logo Tag */}
        <div className="absolute top-5 right-20 hidden lg:block">
          <LogoTag textSize="w-32" />
        </div>
        <h2 className="text-4xl font-bold text-primary mb-4 uppercase">
          Methodology
        </h2>

        <div className="sm:max-w-2xl mb-8">
          <p className="text-lg mb-4">
            At 433 Academy Limited, we have developed a unique training approach
            over the years, guided by an experienced head coach with a
            background in elite European football. With expertise gained at a
            top-level football institution. Our coach has contributed to the
            development of promising young players who have gone on to compete
            at high levels.
          </p>
          <p className="text-lg mb-4 text-primary font-medium">
            Our methodology focuses on four key aspects to ensure complete
            player development:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:w-[70%]">
          {MethodologyList.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-4 p-4 border border-gray-300 rounded-lg bg-white/90 backdrop-blur-sm"
            >
              <NumberTag number={index + 1} />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Methodology;
