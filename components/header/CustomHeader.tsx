import Link from "next/link";
import React from "react";
import CustomSearch from "../customSearch/CustomSearch";
const CustomHeader = () => {
  const MenuList = [
    {
      name: "Dashboard",
      icon: "dashboard",
      path: "/dashboard",
    },

    {
      name: "Register",
      icon: "Register",
      path: "/register",
    },
    {
      name: "Login",
      icon: "Login",
      path: "/login",
    },
    {
      name: <CustomSearch />,
      icon: "search",
      path: "",
    },
  ];
  return (
    <header
      className="flex p-[8px] bg-[#11161a] text-[14px] justify-around text-[#ffffff8a] font-extrabold"
      style={{
        boxShadow: "1px 2px 1px #282828c7",
      }}
    >
      <article className="flex justify-center flex-row gap-8 align-middle items-center list-none" >
        <Link href={"/"}>
          <h1>EganowBible</h1>
        </Link>
      </article>
      <article className="flex justify-center flex-row gap-8 align-middle items-center list-none">
        {MenuList.map((item, index) => (
          <Link
            href={item.path}
            key={index}
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <p>{item.name}</p>
            {/* <span>{item.icon}</span> */}
          </Link>
        ))}
      </article>
    </header>
  );
};

export default CustomHeader;
