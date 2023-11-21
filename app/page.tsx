"use client";
import { CustomButton } from "@/components/customButton/CustomButton";
import { CustomButtonA } from "@/components/customButton/customButtonA";
import { lusitana } from "@/app/ui/fonts";
import { CustomCheckbox } from "@/components/customCheckbox/CustomCheckbox";
import CustomGrid from "@/components/customGrid/CustomGrid";
import Counter from "@/components/otherComponents/Counter";

export default function Page() {
  return (
    <main
      className={`${lusitana.className} 
   `}
    >
      <section
        className="flex flex-col justify-around items-center gap-8"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -1%)",
        }}
      >
        <article
          className="bg-[#0d2b49] rounded-[9px] border border-[#0059b2] p-[1.5rem]"
          style={{
            boxShadow: "0 1px 4px #0059b2, inset 0 2px 4px #0d2b49",
          }}
        >
          <div>
            <h1 className="text-[#ffffff] text-3xl">
              Welcome to EganowBible - Your Ultimate Destination for Endless
              Discoveries!{" "}
            </h1>
            <p className="text-[#399cff] text-[20px] mt-2 ">
              Step into the world of boundless possibilities at EgaNowBible
              where every click opens up new horizons of discovery.{" "}
            </p>
          </div>
        </article>
        <article className="">
          <p>
            👥 Connect & Engage: Connect with fellow EgaExplorers, share
            insights, and be part of a vibrant community that celebrates
            curiosity.
          </p>
          <CustomButton name="Login" />
          <CustomButtonA name="Register" />
        </article>
        {/* GRID */}
        {/* This is for rows */}
        <article className="grid grid-cols-3 gap-1 container p-7 mx-auto text-center">
          <CustomGrid />
        </article>
        {/* This is for columns */}
        <article className="grid grid-rows-3 grid-flow-col gap-1 container p-7 mx-auto text-center">
          <CustomGrid />
        </article>
        <article>
          <CustomCheckbox />
        </article>
        <article>
          <Counter />
        </article>
      </section>
    </main>
  );
}
