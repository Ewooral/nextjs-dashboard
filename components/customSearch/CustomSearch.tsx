import React from "react";

const CustomSearch = () => {
  return (
    <span className="relative">
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
        {/* You can replace the emoji with your search icon */}
        🔍
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-[4px] text-black h-[27px] text-[12px]  rounded-md focus:outline-none focus:ring "
      />
    </span>
  );
};

export default CustomSearch;
