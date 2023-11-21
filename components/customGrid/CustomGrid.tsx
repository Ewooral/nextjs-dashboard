import React from "react";

// This is for rows
const CustomGrid = () => {
  return (
    <>
      <div className="bg-blue-900 rounded py-7">Web Development</div>
      <div className="bg-blue-900 rounded py-7 col-span-2"> Mobile App Development</div>
      <div className="bg-blue-900 rounded py-7">Cloud Computing Services</div>
      <div className="bg-blue-900 rounded py-7">Software Consulting</div>
      <div className="bg-blue-900 rounded py-7 col-span-3"> Data Analytics</div>
      <div className="bg-blue-900 rounded py-7">Cybersecurity Services</div>
      <div className="bg-blue-900 rounded py-7">UI/UX Design</div>
      <div className="bg-blue-900 rounded py-7">DevOps and Continuous Integration</div>
      <div className="bg-blue-900 rounded py-7"> IT Support and Maintenance</div>
    </>
  );
};

export default CustomGrid;

