"use client"
import React, { useEffect } from "react";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";
import SecondaryBtn from "../elements/buttons/SecondaryBtn";
import "aos/dist/aos.css";
import AOS from "aos";

const TopHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/hero-bg.png')",
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
      className=" lg:py-[22rem] md:py-[15rem] py-20 flex items-center main-container"
      data-aos="fade-left"
    >
      <div className="boxed-content flex flex-col items-start gap-5">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-[#091133] lg:leading-16" data-aos="fade-up">
        Introduce Your Product <br /> Quickly & Effectively
        </h1>
        <p className="text-[#505F98] max-w-[60ch] text-sm md:text-lg lg:text-lg" data-aos="fade-up">
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
