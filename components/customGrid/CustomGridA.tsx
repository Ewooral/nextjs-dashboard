"use client";
import React, { useState } from "react";
import DBoardTopLeftCard from "./DBoardTopLeftCard";
import { dashboardObjMenuList, chartData, chartLabels } from "../customData";
import DoughnutChart from "./DoughnutChart";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import clsx from "clsx";
import GoogleCalendar from "../googleCalender/GoogleCalendar";

// This is for rows
const CustomGridA: React.FC = () => {
  const menuItemsRightBottom = ["01/01/2021", "to", "04/01/2021"];
  const [count, setCount] = useState(0);

  const menuItemsLeftBottomObj = [
    {
      title: "April",
      onClick: () => setCount(0),
    },
    {
      title: "March",
      onClick: () => setCount(1),
    },
    {
      title: "Last 3 months",
      onClick: () => setCount(2),
    },
    {
      title: "2020",
      onClick: () => setCount(3),
    },
  ];

  const menuItemsRightBottomObj = [
    {
      title: "April",
      onClick: () => setCount(0),
    },
    {
      title: "March",
      onClick: () => setCount(1),
    },
    {
      title: "Last 3 months",
      onClick: () => setCount(2),
    },
    {
      title: "2020",
      onClick: () => setCount(3),
    },
  ];

  return (
    <>
      {/* Top left card */}
      <div className="bg-[#141a1f] rounded p-4">
        <DBoardTopLeftCard />
      </div>

      {/* bottom left card */}
      <div className="flex bg-[#141a1f] rounded p-4 ">
        <article>
          <div className="mb-3 font-extrabold">
            <p>Revenue Summary</p>
          </div>
          <div
            className={clsx(
              "flex items-center bg-[#000000] gap-4  w-fit p-1 rounded-xl text-[12px]",
            )}
          >
            {menuItemsLeftBottomObj.map((element: any, index: any) => (
              <p
                onClick={element.onClick}
                key={index}
                className={clsx(
                  "transition-all duration-300 ease-in-out hover:bg-[white] hover:text-black p-1 rounded-xl",
                  count === index &&
                    "active border-r-4 border-white-500 bg-[#ffffff] text-black"
                )}
              >
                {element.title}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <DoughnutChart
              data={chartData}
              labels={chartLabels}
              width={230}
              height={230}
            />{" "}
          </div>
        </article>
        <article>
          <p className="mb-3 font-extrabold ml-6">From {`=>`} To</p>
          <div className="flex items-center bg-[#000000] gap-4 text-[12px]  w-fit p-1 rounded-xl ml-6">
            {menuItemsRightBottom.map((element: any, index: any) => (
              <p
                key={index}
                className="hover:bg-[white] hover:text-black p-1 rounded-xl"
              >
                {element}
              </p>
            ))}
          </div>
          <div className="ml-6 mt-8" id="bottomLeftCardRightWidget">
            <article>
              <div className="flex justify-start gap-1">
                <p className="font-extrabold">$8,360.00</p>
                <p className="text-[#61d836]">
                  <NorthIcon />{" "}
                </p>
              </div>
              <p className="text-[12px]">Total Revenue</p>
            </article>

            <article>
              <div className="flex justify-start gap-1">
                <p className="font-extrabold">42</p>
                <p className="text-[#ef2a2a]">
                  <SouthIcon />{" "}
                </p>
              </div>
              <p className="text-[12px]">Total Courses</p>
            </article>

            <article>
              <div className="flex justify-start gap-1">
                <p className="font-extrabold">214</p>
                <p className="text-[#61d836]">
                  <NorthIcon />{" "}
                </p>
              </div>
              <p className="text-[12px]">Total Products</p>
            </article>
          </div>
        </article>
      </div>

      {/* top right card */}
      <div className="grid grid-cols-2 gap-3  text-start">
        {dashboardObjMenuList.map((element: any, index: any) => (
          <div
            id="Details"
            key={index}
            className="bg-[#141a1f] rounded p-4 flex flex-col"
          >
            <p>{element.title}</p>
            <p>{element.value}</p>
            <p>{element.details}</p>
          </div>
        ))}
      </div>

      {/* bottom right card */}
      <div className="bg-[#141a1f] rounded p-4">
        <article className="flex gap-4">
          <p className="font-extrabold">Calender</p>
          <div className="flex items-center bg-[#000000] gap-4 text-[12px]  w-fit p-1 rounded-xl">
            {menuItemsRightBottomObj.map((element: any, index: any) => (
              <p
                key={index}
                className="hover:bg-[white] hover:text-black p-1 rounded-xl"
              >
                {element.title}
              </p>
            ))}
          </div>
          
        </article>
        <article className="flex justify-start items-start">
        <GoogleCalendar />
        </article>
      </div>
    </>
  );
};

export default CustomGridA;
