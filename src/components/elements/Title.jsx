"use client"
import React from "react";

const Title = ({ titleText }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-[#091133] leading-16">
        {titleText}
      </h1>
    </>
  );
};

export default Title;
