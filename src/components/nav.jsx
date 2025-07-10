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
      <div className="flex items-center gap-1 pt-1 cursor-pointer hover:underline">
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="UK Flag"
          className="w-4 h-4 rounded-sm"
        />
        <span className="text-xs font-medium">EN</span>
        <ChevronDown className="w-3 h-3" />
      </div>
    );
  };
  
  return (
    <nav className="w-full bg-white shadow-md relative z-50 font-sans">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex w-full">
        <div className="flex flex-col items-center justify-center w-40 border-r border-gray-200 px-4 bg-[#71b218]">
          <h1 className="text-xl font-bold text-center text-white">
            TRADERS UNION
          </h1>
        </div>

        <div className="flex flex-col flex-grow">
          <div className="flex flex-wrap justify-between items-center border-b border-gray-200 px-6 py-3">
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
            <div className="flex flex-wrap gap-2 lg:gap-3 items-center">
              <Search className="text-[#71b218]" strokeWidth={2} />
              <div className="text-black font-medium">Search</div>
              <div className="text-[#a9a9a9] font-medium">
                Sign in with
              </div>
              <button className="bg-[#f14436] rounded-md w-8 h-8 text-white font-bold">
                G
              </button>
              <button className="px-3 py-1 text-sm text-white w-32 xl:w-40 font-bold h-8 rounded-xl bg-[#797979]">
                LOGIN
              </button>
              <button className="px-3 py-1 text-md text-white w-32 xl:w-40 font-bold h-8 shadow-md rounded-xl bg-[#71b218]">
                REGISTRATION
              </button>
              <div>
                <LanguageSelector />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between px-4 lg:px-6 py-2">
            {bottomLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`flex-1 text-center text-[#71b218] font-bold hover:text-black px-2 lg:px-4 text-sm lg:text-base ${
                  index !== 0 ? "border-l border-gray-300" : ""
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Navbar (768px - 1024px) */}
      <div className="hidden md:flex lg:hidden w-full overflow-x-hidden">
        <div className="flex flex-col items-center justify-center w-24 sm:w-32 border-r border-gray-200 px-2 bg-[#71b218]">
          <h1 className="text-base font-bold text-center text-white leading-tight">
            TRADERS<br />UNION
          </h1>
        </div>

        <div className="flex flex-col flex-grow overflow-x-hidden">
          <div className="w-full">
            <div className="flex flex-wrap justify-between items-center border-b border-gray-200 px-2 sm:px-4 py-2">
              <div className="flex gap-2 sm:gap-4">
                <a href="#" className="text-[#2a2a2a] font-bold text-sm sm:text-lg truncate max-w-[180px]">
                  Online Trading Starts Here
                </a>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                <Search className="text-[#71b218]" strokeWidth={2} size={18} />
                <button className="bg-[#f14436] rounded-md w-6 sm:w-7 h-6 sm:h-7 text-white font-bold text-sm">
                  G
                </button>
                <button className="px-1 sm:px-2 py-1 text-xs text-white font-bold h-6 sm:h-7 rounded-lg bg-[#797979]">
                  LOGIN
                </button>
                <button className="px-1 sm:px-2 py-1 text-xs text-white font-bold h-6 sm:h-7 rounded-lg bg-[#71b218]">
                  REGISTER
                </button>
                <LanguageSelector />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between px-4 py-2 text-sm">
              {bottomLinks.map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className={`text-center text-[#71b218] font-bold hover:text-black px-1 text-xs ${
                    index !== 0 ? "border-l border-gray-300" : ""
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full flex items-center justify-between py-3 px-4 max-w-full">
        <div className="bg-[#71b218] text-white px-3 py-2 rounded">
          <h2 className="text-sm font-bold text-center leading-tight">
            TRADERS<br />UNION
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <Search className="text-[#71b218]" strokeWidth={2} size={20} />
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="w-full max-w-screen overflow-x-hidden">

          <div className="w-full px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Top section */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-3">Main Navigation</h3>
              {[...topLinks].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-700 py-2 hover:text-[#71b218] font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* Bottom links */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-800 mb-3">Categories</h3>
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-[#71b218] py-2 hover:text-black font-bold"
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* Auth buttons */}
            <div className="space-y-3 pb-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gray-600 text-sm">Sign in with</span>
                <button className="bg-[#f14436] rounded-md w-8 h-8 text-white font-bold">
                  G
                </button>
              </div>
              <button className="w-full bg-[#797979] text-white py-2 rounded-lg font-bold">
                LOGIN
              </button>
              <button className="w-full bg-[#71b218] text-white py-2 rounded-lg font-bold mb-2">
                REGISTRATION
              </button>
              <div className="flex justify-center pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
