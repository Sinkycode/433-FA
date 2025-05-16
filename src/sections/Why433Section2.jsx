import jerseyBack from "../assets/images/jersey back.png";
import SocialLinks from "../components/SocialLinks";

const Why433Section2 = () => {
  return (
    <div className="min-h-screen flex relative bg-gray-100 sm:pb-52 pt-44 sm:pt-10 pb-20">
      <figure className="hidden md:block absolute lg:left-[-10%] md:left-[-20%] top-0 w-1/2 overflow-hidden h-full">
        <img src={jerseyBack} className="h-full" />
      </figure>

      <div className="grid gap-10 md:w-[70%] lg:w-[60%] ml-auto">
        <div className="grid">
          <p className="uppercase text-lg justify-self-end mb-5 px-7">
            State-of-the-art-facilities
          </p>
          <p className="bg-primary p-6 text-lg font-medium text-white leading-relaxed sm:rounded-s-3xl">
            We provide a world-class training environment, including:
            High-quality grass and artificial pitches Video analysis technology
            for tactical improvements Strength and conditioning gym and Sports
            medicine and rehabilitation services
          </p>
        </div>

        <div className="grid">
          <p className="uppercase text-lg justify-self-end mb-5 px-7">
            Competitive matches & Scouting opportunities
          </p>
          <div className="bg-black p-6 text-lg text-white leading-relaxed rounded-s-3xl h-max">
            <p>
              We prepare our players for top competitions, offering them
              exposure through: National and regional tournaments, High-profile
              friendlies against top clubs, Regular showcase events for scouts
              and agents.
            </p>
          </div>
        </div>
      </div>

      <p className="absolute top-10 sm:top-auto sm:bottom-10 sm:left-1/3 ml-5 text-2xl font-bold uppercase ">
        Why Choose <br /> 433 football academy?
      </p>
      <div className="absolute bottom-5 sm:bottom-10 left-10 sm:right-10 sm:left-auto">
        <SocialLinks textColor={"text-primary"} />
      </div>
    </div>
  );
};

export default Why433Section2;
