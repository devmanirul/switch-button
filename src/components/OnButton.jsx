import React from "react";

const OnButton = ({ isOn, setIsOn }) => {
  return (
    <div
      onClick={() => isOn(!setIsOn)}
      className="bg-blue-800 w-16 h-8 rounded-full p-1 cursor-pointer flex justify-end"
    >
      <div className=""></div>
    </div>
  );
};

export default OnButton;
