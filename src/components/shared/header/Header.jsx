"use client"
import PrimaryBtn from "@/components/elements/buttons/PrimaryBtn";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center boxed-content absolute left-0 right-0 top-5">
      <ul className="flex gap-10 text-[14px] text-[#505F98]">
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
      <PrimaryBtn btnText={"Buy Now"} />
    </div>
  );
};

export default Header;
