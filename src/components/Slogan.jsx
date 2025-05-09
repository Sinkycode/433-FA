import React from "react";

const Slogan = ({ color, divideColor }) => {
  return (
    <ul
      className={`flex ${color} divide-x-2 ${divideColor} uppercase gap-x-3 items-center justify-end`}
    >
      <li>Precision</li>
      <li className="pl-2">Passion</li>
      <li className="pl-2">Performance</li>
    </ul>
  );
};

export default Slogan;
