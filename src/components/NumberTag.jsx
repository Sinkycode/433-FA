import { BsHexagonFill } from "react-icons/bs";

const NumberTag = ({ number }) => {
  return (
    <div className="relative size-16 flex items-center justify-center ">
      <BsHexagonFill size={40} className="text-primary size-full" />
      <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
        {number}
      </h1>
    </div>
  );
};

export default NumberTag;
