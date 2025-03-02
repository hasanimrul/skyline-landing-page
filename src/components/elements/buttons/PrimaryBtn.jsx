"use client"
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const PrimaryBtn = ({ btnText }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <button className="text-white text-[12px] bg-[#111B47] lg:px-14 px-5 py-1" data-aos="fade-up">
        {btnText}
      </button>
    </>
  );
};

export default PrimaryBtn;
