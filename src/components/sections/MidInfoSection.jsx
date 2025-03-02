import React from "react";
import Title from "../elements/Title";

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
  return (
    <div className="main-container py-28">
      <div className="boxed-content grid grid-cols-2 items-center gap-10">
        <div className="flex flex-col items-start gap-5">
          <Title titleText={"Light, Fast & Powerful"} />
          <p className="text-[#505F98]">
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
                <img src={card.icon} alt="mid info icon" />
                <div>
                  <h3 className="text-[#091133] font-bold">{card.title}</h3>
                  <p className="text-[#505F98]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src="/assets/images/mid-info.png" alt="mid info image" />
        </div>
      </div>
    </div>
  );
};

export default MidInfoSection;
