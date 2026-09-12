import { use, useState } from "react";
import type { Technology } from "../types/types";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

export default function Technologies({ technologiesPromise }: TechnologiesProps) {
  const allTechnologies = use(technologiesPromise);

  const [yourStack, setYourSack] = useState<Technology[]>([]);

  return (
    <>
      <div className="max-w-5/6 mx-auto">
        <div>
          <h1 className="text-4xl font-bold">Explore the <span className="text-[#D91B7E] ">Technologies</span></h1>
          <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-5 lg:grid-cols-12 ">
          <div className="grid-cols-3 items-center justify-center gap-8 lg:grid col-span-9">
            {allTechnologies.map((technology) => (
              <TechCard key={technology.id} yourStack={yourStack} setYourSack={setYourSack} technology={technology} />
            ))}
          </div>
          {/* right nav bar  */}
          <div className="col-span-3 ">
            <YourStack setYourStack={setYourSack} yourStack={yourStack}></YourStack>
          </div>
        </div>
      </div>
    </>
  );
}
