import React from "react";

const Footer = () => {
    const socialIcons = [
        "/assets/icons/fb.svg",
        "/assets/icons/linkdn.svg",
        "/assets/icons/twitter.svg",
        "/assets/icons/yt.svg",
        "/assets/icons/instagram.svg",
    ];
  return (
    <div className="bg-[#E7ECFF] py-10">
      <div className="ps-32 pr-24">
        <div className="flex justify-between items-center">
          <p className="text-[#939EA4] text-[14px]">©2023 Yourcompany</p>

          <button className="text-white text-[12px] bg-[#111B47] px-6 py-1">
            Purchase now
          </button>
        </div>
        <hr className="my-5 mt-10 h-[1px] border-none bg-[#CDD1D4]" />
        <div className="flex justify-between items-center">
          <ul className="flex gap-5 text-[14px] text-[#939EA4]">
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
          <div className="flex gap-6">
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
