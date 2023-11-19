import React from "react";
import DBoardTopLeftCard from "./DBoardTopLeftCard";

// This is for rows
const CustomGridA: React.FC = () => {
  return (
    <>
      <div className="bg-[#141a1f] rounded p-4">
        <DBoardTopLeftCard />
      </div>
      <div className="bg-[#141a1f] rounded p-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi,
        facere sit quas amet rem dolore! Quas maiores aliquam aliquid!
      </div>
      <div className="grid grid-cols-2 gap-3  text-start">
        <div className="bg-[#141a1f] rounded p-4 flex flex-col">
          <p className="">Total</p>
          <p className="">287</p>
          <p className="">Details</p>
        </div>
        <div className="bg-[#141a1f] rounded p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nisi, facere sit quas amet rem dolore! Quas maiores aliquam aliquid!
        </div>
        <div className="bg-[#141a1f] rounded p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nisi, facere sit quas amet rem dolore! Quas maiores aliquam aliquid!
        </div>
        <div className="bg-[#141a1f] rounded p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nisi, facere sit quas amet rem dolore! Quas maiores aliquam aliquid!
        </div>
      </div>
      <div className="bg-[#141a1f] rounded p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi,
        facere sit quas amet rem dolore! Quas maiores aliquam aliquid!
      </div>

      {/* <div className="bg-blue-900 rounded py-7">9</div> */}
    </>
  );
};

export default CustomGridA;
