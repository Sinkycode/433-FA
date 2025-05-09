import { logo, logo2 } from "../assets/images";

const LogoTag = () => {
  return (
    <ul className="divide-x-2 divide-black flex items-center gap-x-5">
      <li>
        <img src={logo} alt="" className="w-14 invert" />
      </li>
      <li>
        <img src={logo2} alt="" className="w-10 ml-2" />
      </li>
    </ul>
  );
};

export default LogoTag;
