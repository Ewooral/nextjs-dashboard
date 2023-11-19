import { lusitana } from "@/app/ui/fonts";
import CustomGrid from "@/components/customGrid/CustomGrid";
import CustomRegisterForm from "@/components/customRegisterForm/CustomRegisterForm";

export default function Page() {
  return (
    <main
      className={`${lusitana.className} 
   `}
    >
      <section
        className="flex justify-center flex-col items-center gap-8"
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
            <h1 className="text-[#ffffff] text-3xl text-center">
             Register as a new member!{" "}
            </h1>
            <p className="text-[#399cff] mb-4 text-center text-[14px] mt-2 ">
              Step into the world of boundless possibilities <br /> at
              EgaNowBible where every click opens up new  <br /> horizons of discovery.{" "}
            </p>
          </div>
          <CustomRegisterForm />
        </article>
        <article className="">
          <p>
            👥 Connect & Engage: Connect with fellow EgaExplorers, share<br />
            insights, and be part of a vibrant community that celebrates
            <br /> curiosity.
          </p>
        </article>
       
      </section>
    </main>
  );
}
