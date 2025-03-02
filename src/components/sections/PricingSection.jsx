import React from "react";
import Title from "../elements/Title";
import PrimaryBtn from "../elements/buttons/PrimaryBtn";

const PricingSection = () => {
  return (
    <div className="main-container py-32 bg-[#f2f5ff] -mt-10">
      <div className="boxed-content flex flex-col items-center gap-10 py-20">
        <Title titleText={"A Price To Suit Everyone"} />
        <p className="text-center max-w-[60ch] text-base text-[#6F7CB2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-5xl text-[#222F65]">$40</h3>
          <p className="text-base text-[#37447E]">UI Design Kit</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[14px] text-[#5D6970]">See, One price. Simple.</p>
          <PrimaryBtn btnText={"Purchase Now"} />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
