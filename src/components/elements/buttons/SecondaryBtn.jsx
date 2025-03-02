import React from 'react';

const SecondaryBtn = ({btnText}) => {
    return (
        <>
        <button className="border border-[#091133] text-[#091133] text-[14px] bg-transparent px-14 py-0.5">
          {btnText}
        </button>
      </>
    );
};

export default SecondaryBtn;