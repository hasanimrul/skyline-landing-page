"use client"
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="flex justify-between items-center lg:px-24 md:px-20 px-5 absolute left-0 right-0 top-5 z-50" data-aos="fade-down">
      <ul className="flex gap-10 text-[14px] text-[#505F98]" >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <button className="text-white text-[12px] bg-[#111B47] lg:px-14 px-5 py-1 z-50" >
        Buy Now
      </button>
    </div>
  );
};

export default Header;
