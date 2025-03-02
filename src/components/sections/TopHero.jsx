import React from "react";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";
import SecondaryBtn from "../elements/buttons/SecondaryBtn";

const TopHero = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/hero-bg.png')",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
      className=" py-[22rem] flex items-center main-container"
    >
      <div className="boxed-content flex flex-col items-start gap-5">
        <h1 className="text-5xl font-bold text-[#091133] leading-16">
        Introduce Your Product <br /> Quickly & Effectively
        </h1>
        <p className="text-[#505F98] max-w-[60ch] text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        <div className="flex gap-5 mt-5">

        <PrimaryBtn btnText={"Purchase UI Kit"} />
        <SecondaryBtn btnText={"Learn More"} />
        </div>
      </div>
    </div>
  );
};

export default TopHero;
