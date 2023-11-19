import React from "react";

const CustomOverlay: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center relative">
        {/* Background Image */}
        <div
          className="bg-cover bg-center w-full h-full transition-transform transform 
          group-hover:translate-y-0 group-hover:opacity-100 bg-[url('/wd1.png')]"
        ></div>

        {/* Dark overlay with 50% transparency */}
        <div
          className="absolute inset-0 bg-black bg-opacity-90 transition-transform 
        transform group-hover:translate-y-full group-hover:opacity-0"
        >
          {" "}        
        </div>
      </div>
    </div>
  );
};

export default CustomOverlay;
