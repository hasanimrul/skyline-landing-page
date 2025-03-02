"use client";
import React, { useEffect } from "react";
import Title from "../elements/Title";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";
import "aos/dist/aos.css";
import AOS from "aos";

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="main-container lg:py-32 md:py-32 py-10 bg-[#f2f5ff] -mt-10">
      <div className="boxed-content flex flex-col items-center lg:gap-10 md:gap-10 gap-5 py-20">
        <Title titleText={"A Price To Suit Everyone"} />
        <p
          className="text-center max-w-[60ch] text-sm md:text-lg lg:text-lg text-[#6F7CB2]"
          data-aos="fade-up"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <div className="flex flex-col items-center gap-2">
          <h3 className="lg:text-5xl md:text-5xl text-2xl text-[#222F65]" data-aos="fade-up">
            $40
          </h3>
          <p className="text-sm lg:text-lg md:text-lg text-[#37447E]" data-aos="fade-up">
            UI Design Kit
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-base text-[#5D6970]" data-aos="fade-up">
            See, One price. Simple.
          </p>
          <PrimaryBtn btnText={"Purchase Now"} />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
