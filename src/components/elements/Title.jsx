"use client"
import React from "react";

const Title = ({ titleText }) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-[#091133] leading-16 max-w-[20ch]">
        {titleText}
      </h1>
    </>
  );
};

export default Title;
