import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  
  return (
    <main
      className={`${lusitana.className} 
   `}
    >
      <section
        className="flex justify-around items-center gap-8"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -20%)",
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
              Login EganowBible Page{" "}
            </h1>
            <p className="text-[#399cff] text-[20px] mt-2 ">
            Our robust authentication protocols ensure that your information is safeguarded at all times, allowing you to log in with confidence 
            </p>
          </div>
        </article>
        <article className="">
          <p>
          👥 Connect & Engage: Connect with fellow EgaExplorers, share 
          insights, and be part of a vibrant community that celebrates curiosity.
          </p>
        </article>
      </section>
    </main>
  );
}


