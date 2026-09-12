import { use, useState } from "react";
import type { Technology } from "../types/types";
import TechCard from "./TechCard";
import YourStack from "./YouStack";
// import YourStack from "./YourStack";

export interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const allTechnologies = use(technologiesPromise);

  const [yourStack, setYourSack] = useState<Technology[]>([]);

  return (
    <>
      <div className="max-w-5/6 mx-auto">
        {/* text tee technology  */}

        <div>
          <h1 className="text-4xl font-bold">
            Explore the <span className="text-[#D91B7E] ">Technologies</span>
          </h1>
          <p className="text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* all cards  */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* All Technologies */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {allTechnologies.map((technology) => (
              <TechCard
                key={technology.id}
                yourStack={yourStack}
                setYourSack={setYourSack}
                technology={technology}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="w-full lg:col-span-3">
            <YourStack setYourStack={setYourSack} yourStack={yourStack} />
          </div>
        </div>
      </div>
    </>
  );
}
