import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="w-full mt-10  bg-white">
      <div className="mx-auto flex min-h-95  max-w-5/6 flex-col items-center justify-between gap-10  py-12 lg:flex-row ">

        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="group flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              Explore Technologies
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-md border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right / Bottom Image */}
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/banner-stack.png"
            alt="Development technology stack"
            className="w-[260px] object-contain sm:w-[300px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  
  );
}