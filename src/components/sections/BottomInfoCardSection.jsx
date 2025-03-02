import React from "react";
import Title from "../elements/Title";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";

const BottomInfoCardSection = () => {
  const cardInfo = [
    {
      title: "Light, Fast & Powerful",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/happy_news.svg",
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/social_influencer.svg",
    },
    {
      title: "Light, Fast & Powerful",
      description:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      shortDescription:
        "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      icon: "/assets/svg/mention.svg",
    },
  ];
  return (
    <div className="main-container py-28 curve-top bg-[#ffffff]">
      <div className="boxed-content flex flex-col gap-20 pb-10">
        {cardInfo.map((info, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-10 items-center justify-between py-20"
          >
            <img src={info.icon} alt="mid info icon" />
            <div className="flex flex-col gap-5 items-start">
              <Title titleText={info.title} />
              <p className="text-[#505F98]">{info.description}</p>
              <p className="text-[#505F98]">{info.shortDescription}</p>
              {index === 2 && <PrimaryBtn btnText={"Purchase Now"} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomInfoCardSection;
