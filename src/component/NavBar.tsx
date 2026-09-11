// export interface NavBarProps {
//     prop: string
// }

// export default function NavBar({ prop }: NavBarProps) {
    
//     return 
// }



import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50  w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-5/6 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </div>

          <span className="text-sm font-bold text-gray-800">
            Dev<span className="text-pink-500">Stack</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={``}
              className={`text-xs font-medium transition-colors ${
                index === 0
                  ? "text-pink-500"
                  : "text-gray-500 hover:text-pink-500"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-xs font-medium text-gray-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-pink-600 hover:shadow-md active:scale-95">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 shadow-md md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "bg-pink-50 text-pink-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-pink-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-3 flex gap-2 border-t border-gray-100 pt-3">
            <button className="flex-1 rounded-full border border-gray-200 py-2 text-sm font-medium text-gray-600">
              Sign In
            </button>

            <button className="flex-1 rounded-full bg-pink-500 py-2 text-sm font-semibold text-white hover:bg-pink-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}