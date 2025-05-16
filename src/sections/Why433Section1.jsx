import { FaFutbol } from "react-icons/fa";
import jerseyFront from "../assets/images/jersey front.png";
import SocialLinks from "../components/SocialLinks";

const Why433Section1 = () => {
  return (
    <div className="min-h-screen flex relative bg-gray-100 sm:pb-52 pt-44 sm:pt-10 pb-20">
      <figure className="hidden md:block absolute lg:left-[-10%] md:left-[-20%] top-0 w-1/2 overflow-hidden h-full">
        <img src={jerseyFront} className="h-full" />
      </figure>

      <div className="grid gap-10 md:w-[70%] lg:w-[60%] ml-auto">
        <div className="grid">
          <p className="uppercase text-lg justify-self-end mb-5 px-7">
            Elite Training & Development
          </p>
          <p className="bg-primary p-6 text-lg font-medium text-white leading-relaxed sm:rounded-s-3xl">
            We follow a European-style training methodology designed to build
            technically gifted, tactically intelligent, and physically strong
            footballers. Our training sessions focus on:
          </p>
        </div>

        <div className="grid">
          <p className="uppercase text-lg justify-self-end mb-5 px-7">
            International exposure & Professional pathways
          </p>
          <div className="bg-black p-6 text-white leading-relaxed rounded-s-3xl h-max">
            <p className="mb-5">
              Through our partnerships with top European clubs like Atletico
              Madrid and Racing Santander, our players receive exclusive
              opportunities to participate in:
            </p>
            <ul>
              <li className="flex gap-2 items-center">
                <FaFutbol className="text-white" />
                <span>Professional team trials in Europe</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaFutbol className="text-white" />
                <span>International scouting programs</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaFutbol className="text-white" />
                <span>Training camps led by pro coaches</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaFutbol className="text-white" />
                <span>Player exchange programs and global tournaments</span>
              </li>
            </ul>
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

export default Why433Section1;
