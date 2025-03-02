"use client"
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Title = ({ titleText }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <h1 className="lg:text-4xl md:text-3xl text-xl font-bold text-[#091133] leading-16" data-aos="fade-up">
        {titleText}
      </h1>
    </>
  );
};

export default Title;
