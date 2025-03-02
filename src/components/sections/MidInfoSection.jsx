"use client"
import React, { useEffect } from "react";
import Title from "../elements/Title";
import "aos/dist/aos.css";
import AOS from "aos";

const MidInfoSection = () => {
  const infoCard = [
    {
      title: "Title Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      icon: "/assets/images/mid-info-icon.png",
    },
    {
      title: "Title Goes Here",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      icon: "/assets/images/mid-info-icon.png",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="main-container lg:py-28 md:py-20">
      <div className="boxed-content grid lg:grid-cols-2 md:grid-cols-2 items-center lg:gap-10 md:gap-10">
        <div className="flex flex-col items-start lg:gap-5 md:gap-5" data-aos="fade-right">
          <Title titleText={"Light, Fast & Powerful"} />
          <p className="text-[#505F98] lg:text-lg md:text-lg text-sm" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{" "}
            <br />
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="grid grid-cols-2 gap-5 pt-10">
            {infoCard.map((card, index) => (
              <div key={index} className="flex flex-col gap-5 items-start">
                <img src={card.icon} alt="mid info icon" data-aos="fade-up"/>
                <div>
                  <h3 className="text-[#091133] font-bold" data-aos="fade-up">{card.title}</h3>
                  <p className="text-[#5D6970] text-[12px]" data-aos="fade-up">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src="/assets/images/mid-info.png" alt="mid info image" data-aos="fade-left"/>
        </div>
      </div>
    </div>
  );
};

export default MidInfoSection;
