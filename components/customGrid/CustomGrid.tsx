import React from "react";

// This is for rows
const CustomGrid = () => {
  return (
    <>
      <div className="bg-blue-900 rounded py-7">1</div>
      <div className="bg-blue-900 rounded py-7 col-span-2">2</div>
      <div className="bg-blue-900 rounded py-7">3</div>
      <div className="bg-blue-900 rounded py-7">4</div>
      <div className="bg-blue-900 rounded py-7 col-span-3">5</div>
      <div className="bg-blue-900 rounded py-7">6</div>
      <div className="bg-blue-900 rounded py-7">7</div>
      <div className="bg-blue-900 rounded py-7">8</div>
      <div className="bg-blue-900 rounded py-7">9</div>
    </>
  );
};

export default CustomGrid;

