import React from "react";

const PrimaryBtn = ({ btnText }) => {
  return (
    <>
      <button className="text-white text-[12px] bg-[#111B47] px-14 py-1">
        {btnText}
      </button>
    </>
  );
};

export default PrimaryBtn;
