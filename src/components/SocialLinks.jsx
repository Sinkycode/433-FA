import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = ({ textColor }) => {
  return (
    <div className="flex gap-1 justify-center items-center mt-4">
      <FaFacebookSquare size={20} color="black" />
      <FaInstagram size={20} color="black" />
      <FaTwitter size={20} color="#000" />
      <p className={`${textColor} font-medium`}>433Abuja</p>
    </div>
  );
};

export default SocialLinks;
