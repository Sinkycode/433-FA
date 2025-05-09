import { FaCheckCircle, FaPlane, FaBus } from "react-icons/fa";
import { map } from "../assets/images/index";
import LogoTag from "../components/LogoTag";
import SocialLinks from "../components/SocialLinks";

const LocationSection = () => {
  return (
    <div className="min-h-screen padding relative bg-white">
      <div className="sm:flex sm:flex-row-reverse gap-6">
        <figure className="mb-20 sm:mb-0 sm:w-[400px]">
          <img src={map} alt="map" />
        </figure>
        <ul className="sm:w-1/2 flex-1">
          <li className="flex gap-4 mb-8 lg:w-[80%]">
            <FaCheckCircle size={24} color="black" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold uppercase leading-none mb-2">
                Located in the heart of{" "}
                <span className="text-primary">Abuja</span>
              </h2>
              <p className=" text-lg font-medium leading-relaxed">
                Located in the heart of Abuja at City Park, Wuse 2, 433 Football
                Academy offers a premier training environment designed to
                develop the next generation of elite footballers.
              </p>
            </div>
          </li>
          <li className="flex gap-4 mb-8 lg:w-[80%]">
            <FaCheckCircle size={24} color="black" />
            <p className="flex-1 text-lg font-semibold leading-relaxed">
              Home to Nigeria's capital and a thriving football community, 433
              Football Academy Abuja is strategically positioned to nurture
              young talents and develop elite players.
            </p>
          </li>
          <li className="flex gap-4 mb-8 lg:w-[80%]">
            <FaCheckCircle size={24} color="black" />
            <p className="flex-1 text-lg font-semibold leading-relaxed">
              Nearby Airports
            </p>
          </li>

          <li className="sm:flex gap-4 mb-8 justify-between sm:w-[80%]">
            <div className="flex sm:flex-col sm:items-center sm:text-center gap-2">
              <FaPlane
                style={{
                  transform: "rotate(-45deg)", // You can adjust this angle as needed

                  color: "#fc550e",
                }}
                className="size-16"
              />
              <p>Nnamdi Azikiwe International Airport (Abuja)</p>
            </div>
            <div className="flex sm:flex-col sm:items-center sm:text-center gap-2">
              <FaPlane
                style={{
                  transform: "rotate(-45deg)", // You can adjust this angle as needed

                  color: "black",
                }}
                className="size-16"
              />
              <p>Kaduna International Airport</p>
            </div>
            <div className="flex sm:flex-col sm:items-center sm:text-center gap-2">
              <FaPlane
                style={{
                  transform: "rotate(-45deg)", // You can adjust this angle as needed

                  color: "#fc550e",
                }}
                className="size-16"
              />
              Mallam Aminu Kano International Airport
            </div>
          </li>
          <div className="flex gap-4 sm:w-[70%]">
            <FaBus size={28} color="black" />
            <ul className="flex flex-1 gap-6 mb-8 justify-between">
              <li className="text-2xl font-medium text-amber-500">45 MIN</li>
              <li className="text-2xl font-medium text-amber-500">2H 30MIN</li>
              <li className="text-2xl font-medium text-amber-500">4H 30MIN</li>
            </ul>
          </div>
        </ul>
      </div>

      <div className="absolute bottom-5 left-10 hidden sm:block">
        <LogoTag />
      </div>
      <div className="absolute bottom-5 right-10 hidden sm:block">
        <SocialLinks textColor={"text-primary"} />
      </div>
    </div>
  );
};

export default LocationSection;
