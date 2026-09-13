export default function Footer() {
  return (
    <footer className="border-t mt-19 border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-500 text-[9px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-bold text-gray-800">
                Dev <span className="text-pink-500">Stack</span>
              </h2>
            </div>

            <p className="mt-4 max-w-sm text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-xs text-gray-500 transition hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-xs text-gray-500 transition hover:text-gray-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-xs text-gray-500 transition hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="sm:block hidden ">
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-700">
              Product
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:block hidden">
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-700">
              Company
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:block hidden">
            <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-700">
              Legal
            </h3>

            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-gray-400 transition hover:text-gray-700"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-gray-700"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-gray-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
