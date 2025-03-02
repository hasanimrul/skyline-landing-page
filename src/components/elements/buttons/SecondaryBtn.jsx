"use client"
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";

const SecondaryBtn = ({btnText}) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
    return (
        <>
        <button className="border border-[#091133] text-[#091133] text-[14px] bg-transparent lg:px-14 px-5 py-0.5" data-aos="fade-up">
          {btnText}
        </button>
      </>
    );
};

export default SecondaryBtn;