import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown, Search } from "lucide-react";

const topLinks = ["Online Trading Starts Here"];
const bottomLinks = [
  "BEST BROKERS",
  "GUIDES",
  "BROKERS PREVIEW",
  "PRICE PREDICTION",
  "WHO WE ARE",
  "NEWS",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const LanguageSelector = () => {
    return (
      <div className="flex items-center gap-2 pt-1 cursor-pointer hover:underline">
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="UK Flag"
          className="w-5 h-5 rounded-sm"
        />
        <span className="text-sm font-medium">EN</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    );
  };
  return (
    <nav className="w-full bg-white shadow-md relative z-50 font-sans">
      <div className="hidden md:flex">
        <div className="flex flex-col items-center justify-center w-40 border-r border-gray-200 px-4 bg-[#71b218]">
          <h1 className="text-xl font-bold text-center text-white">
            TRADERS UNION
          </h1>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex justify-between gap-6 items-center border-b border-gray-200 px-6 py-3">
            <div className="flex gap-6">
              {topLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#2a2a2a] font-bold text-xl"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <Search className="mt-1 text-[#71b218] " strokeWidth={2} />
              <div className="text-black font-medium pt-1">Search</div>
              <div className="text-[#a9a9a9] pt-1 font-medium">
                Sign in with
              </div>
              <button className="bg-[#f14436] rounded-md w-8 h-8 text-white font-bold">
                G
              </button>
              <button className=" px-3 py-1 text-sm text-white w-40 font-bold h-8  rounded-xl bg-[#797979]">
                LOGIN
              </button>
              <button className=" px-3 py-1 text-md text-white w-40 font-bold h-8 shadow-md rounded-xl bg-[#71b218]">
                REGISTRATION
              </button>
              <div>
                <LanguageSelector />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-2">
            {bottomLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`flex-1 text-center text-[#71b218] font-bold hover:text-black px-4 ${
                  index !== 0 ? "border-l border-gray-300" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 ">
        <h2 className="text-xl font-bold flex flex-col text-center bg-[#71b218] text-white">
         <span> TRADERS  </span>
         <span> UNION </span>
          </h2>
      
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-18 left-0 w-full bg-gray-50 h-[50vh] px-4 py-4 shadow-md">
          <div className="flex flex-col gap-4">
            {[...topLinks, ...bottomLinks].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-gray-800 py-1 border-b border-gray-200"
              >
                {link}
              </a>
            ))}
            <button className="mt-4 border px-4 py-2 rounded text-sm hover:bg-gray-100">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
