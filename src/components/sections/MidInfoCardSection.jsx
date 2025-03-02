"use client"
import React, { useEffect } from "react";
import Title from "../elements/Title";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";
import "aos/dist/aos.css";
import AOS from "aos";

const MidInfoCardSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);
  const cardInfo = [
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/happy_news.svg",
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus  ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/social_influencer.svg",
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/mention.svg",
    },
  ];
  return (
    <div className="main-container py-28 curve-top bg-[#ffffff]">
      <div className="boxed-content flex flex-col lg:gap-20 gap-10 lg:pb-10 lg:px-10">
        {cardInfo.map((info, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-20 gap-5 items-center justify-between py-20"
          >
            <img src={info.icon} alt="mid info icon" data-aos="fade-right"/>
            <div className="flex flex-col gap-5 items-start" data-aos="fade-left">
              <Title titleText={info.title} />
              <p className="text-[#505F98] lg:text-lg md:text-lg text-sm" data-aos="fade-up">{info.description}</p>
              <p className="text-[#505F98] lg:text-lg md:text-lg text-sm" data-aos="fade-up">{info.shortDescription}</p>
              {index === 2 && <PrimaryBtn btnText={"Purchase Now"} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidInfoCardSection;
