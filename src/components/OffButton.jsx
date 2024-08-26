import React from "react";

const OffButton = ({ isOn, setIsOn }) => {
  console.log(isOn);
  console.log(setIsOn);
  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={
        isOn
          ? "bg-blue-500  w-16 h-8 rounded-full p-1 cursor-pointer flex justify-end"
          : "bg-slate-300 w-16 h-8 rounded-full cursor-pointer p-1"
      }
    >
      <div
        className={
          isOn
            ? "w-6 h-6 rounded-full bg-white right-1 shadow-md"
            : "w-6 h-6 rounded-full bg-slate-500 right-1 shadow-md"
        }
      ></div>
    </div>
  );
};

export default OffButton;
