import type { Technology } from "../types/types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

type SkillCardProps = {
  technology: Technology;
  yourStack: Technology[];
  setYourStack: Dispatch<SetStateAction<Technology[]>>;
  isSelected: boolean;
};

export default function SkillCard({
  technology,
  setYourStack,
  yourStack,
  isSelected,
}: SkillCardProps) {
  const handleYourStack = () => {
    // if(yourStack.includes(technology)){
    //     return
    // }
    if (isSelected) {
      return toast.error("You Already Added.");
    } else {
      const setStack = [...yourStack, technology];
      setYourStack(setStack);
      toast.success("Successfully Added");
    }
  };

  return (
    <div className="group  rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-600">
          {technology.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-slate-900">{technology.name}</h2>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleYourStack}
        className="mt-6 w-full cursor-pointer rounded-xl bg-slate-950 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 group-hover:tracking-wide"
      >
        Add to Stack
      </button>
    </div>
  );
}
