'use client';
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { lusitana } from "@/app/ui/fonts";

const LeftSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const ojbMenuList: OjbMenuList = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <DashboardCustomizeOutlinedIcon />,
      onClick: () => setActiveItem(0),
    },
    {
      title: "Navigation",
      href: "/dashboard/navigation",
      icon: <NearMeOutlinedIcon />,
      onClick: () => setActiveItem(1), 
    },
    {
      title: "User Mgn't",
      href: "/dashboard/user-management",
      icon: <GroupOutlinedIcon />,
      onClick: () => setActiveItem(2),
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <SettingsSuggestOutlinedIcon />,
      onClick: () => setActiveItem(3),
    },
    
  ];

  const pathname = usePathname();

  return (
    <div
      className="hidden md:flex backdrop-blur-sm bg-[#141a1f] text-white w-[fit-content] h-screen flex-col
    justify-between items-start mr-4 "
    >
      <ul className="w-[100%] mr-4">
        {ojbMenuList.map((element: any, index: any) => (
          <Link
            key={index}
            className={clsx(
              "Custom__List flex justify-start items-center border-spacing-2 p-[4px]" +
                "text-[12px] cursor-pointer mt-4 hover:bg-[#292929] hover:text-white transition-all" +
                "duration-300 ease-in-out  ",
              // activeItem === index &&
              //   "active border-r-4 border-white-500 bg-[#242323]",
              {
                "bg-[#2a8ef2] text-white border-r-[4px] border-white font-bold":
                  pathname === element.href,
              }
            )}
            onClick={element.onClick}
            href={element.href}
          >
            {element.icon}
            <span className={`${lusitana.className} ml-4`}>
              {element.title}
            </span>
          </Link>
        ))}
       <Link href="/" className="flex justify-start items-center mt-10 p-2 cursor-pointer">
             <span className="mr-4">◀️</span> 
             <span>Go Back</span>
       </Link>
      </ul>

      <div className="Custom__List flex justify-center items-center border-spacing-2 p-4">
        {/* <Image src={Avatar} alt="img" width={100} height={100} /> */}
        <div
          className="bg-sky-100 text-blue-600 flex justify-center 
        items-center h-[2.3rem] w-[2.3rem] text-[10px] rounded-[60px] p-3"
        >
          image
        </div>
        <div className="flex flex-col ml-4">
          <span className="text-[12px] font-bold">Elijah ...</span>
          <span className="text-[12px]">Frontend Dev</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
