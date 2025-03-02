import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-32 pr-24 absolute left-0 right-0 top-5">
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
      <button className="text-white text-[12px] bg-[#111B47] px-14 py-1">
        Buy Now
      </button>
    </div>
  );
};

export default Header;
