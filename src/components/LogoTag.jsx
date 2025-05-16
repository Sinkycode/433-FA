import { logo, logo2 } from "../assets/images";

const LogoTag = ({
  textSize = "w-12",
  logoSize = "w-12",
  lineSize = "divide-x-2",
  layout,
}) => {
  return (
    <ul
      className={`${lineSize} ${layout} divide-black flex items-center gap-x-5`}
    >
      <li>
        <img src={logo} alt="" className={`${textSize} invert`} />
      </li>
      <li>
        <img src={logo2} alt="" className={`${logoSize} ml-2`} />
      </li>
    </ul>
  );
};

export default LogoTag;
