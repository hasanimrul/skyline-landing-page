"use client"
import React, { useEffect } from "react"
import "aos/dist/aos.css";
import AOS from "aos";

const Footer = () => {
    const socialIcons = [
        "/assets/svg/fb.svg",
        "/assets/svg/linkdn.svg",
        "/assets/svg/twitter.svg",
        "/assets/svg/yt.svg",
        "/assets/svg/Instagram.svg",
    ];

    useEffect(() => {
      AOS.init({
        duration: 500,
      });
    }, []);

  return (
    <div className="main-container bg-[#E7ECFF] py-10" data-aos="fade-up">
      <div className="boxed-content" >
        <div className="flex justify-between items-center" >
          <p className="text-[#939EA4] text-[14px]">©2023 Yourcompany</p>

          <button className="text-white text-[12px] bg-[#111B47] px-6 py-1">
            Purchase now
          </button>
        </div>
        <hr className="my-5 mt-10 h-[1px] border-none bg-[#CDD1D4]" />
        <div className="flex lg:flex-row md:flex-row flex-col gap-3 justify-between items-center" >
          <ul className="flex gap-5 text-[#939EA4]" >
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
          <div className="flex gap-6" >
          {socialIcons.map((icon, index) => (
            <img src={icon} alt="social icon" key={index} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
