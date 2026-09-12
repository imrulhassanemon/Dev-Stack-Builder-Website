import { use } from "react";
import type { Technology } from "../types/types";
import TechCard from "./TechCard";

export interface TechnologyesProps {
  TechnologiesPromise: Technology[];
}

export default function Technologies({ TechnologiesPromise }: TechnologyesProps) {
  console.log(TechnologiesPromise);
  const allTechnologies = use(TechnologiesPromise)
  console.log(allTechnologies);
  return (
    <>
      <div className="max-w-5/6 mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Explore the <span className="text-[#D91B7E] ">Technologies</span></h1>
        <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-12 ">
          <div className="grid-cols-3 items-center justify-center gap-8 lg:grid col-span-9">
            {
            allTechnologies.map((technology => <TechCard technology={technology}></TechCard> ))
          }
          </div>
          <div className="col-span-3">
            hello
          </div>
        </div>
      </div>
    </>
  );
}
