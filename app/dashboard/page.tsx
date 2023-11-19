import { lusitana } from "@/app/ui/fonts";
import CustomGridA from "@/components/customGrid/CustomGridA";
import CustomOverlay from "@/components/overlays/CustomOverlay";

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} p-3`}>Dashboard</h1>
      <article className="grid grid-rows-2 grid-flow-col gap-3 container text-start p-3">
        <CustomGridA />
      </article>
    </main>
  );
}
