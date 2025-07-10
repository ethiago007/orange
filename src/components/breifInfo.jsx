import React, { useState } from "react";
import NGN from "../assets/image/ng.svg";

function BriefInfo() {
  const [activeTab, setActiveTab] = useState("Crypto");

  // Exchange data for different categories
  const exchangeData = {
    Crypto: [
      {
        id: 1,
        name: "BYBIT",
        position: 1,
        color:
          " border-yellow-1 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT EXCHANGE",
      },
      {
        id: 2,
        name: "MEXC",
        position: 2,
        color:
          " border-grey-4 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT EXCHANGE",
      },
      {
        id: 3,
        name: "OKX",
        position: 3,
        color:
          " border-red-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT EXCHANGE",
      },
      {
        id: 4,
        name: "BINANCE",
        position: 4,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT EXCHANGE",
      },
      {
        id: 5,
        name: "BITGET",
        position: 5,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT EXCHANGE",
      },
    ],
    Forex: [
      {
        id: 6,
        name: "Forex Exchange 1",
        position: 1,
        color:
          " border-yellow-1 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 7,
        name: "Forex Exchange 2",
        position: 2,
        color:
          " border-grey-4 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 8,
        name: "Forex Exchange 3",
        position: 3,
        color:
          " border-red-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 9,
        name: "Forex Exchange 4",
        position: 4,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 10,
        name: "Forex Exchange 5",
        position: 5,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
    ],
    Stocks: [
      {
        id: 11,
        name: "Stock Exchange 1",
        position: 1,
        color:
          " border-yellow-1 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 12,
        name: "Stock Exchange 2",
        position: 2,
        color:
          " border-grey-4 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 13,
        name: "Stock Exchange 3",
        position: 3,
        color:
          " border-red-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 14,
        name: "Stock Exchange 4",
        position: 4,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
      {
        id: 15,
        name: "Stock Exchange 5",
        position: 5,
        color:
          " border-lightgrey-2 rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-b-[5px]",
        site: "VISIT BROKER",
      },
    ],
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Exchange card component
  const ExchangeCard = ({ exchange }) => {
    return (
      <div
        className={`border rounded-lg p-4 flex flex-col items-center ${exchange.color}`}
      >
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                exchange.position === 1
                  ? "bg-yellow-400"
                  : exchange.position === 2
                  ? "bg-blue-400"
                  : exchange.position === 3
                  ? "bg-orange-400"
                  : "bg-gray-200"
              }`}
            >
              {exchange.position}
            </div>
            {/* Image placeholder - to be added by user */}
            <div className="w-24 h-8 mx-4 bg-gray-100 flex items-center justify-center">
              {exchange.name}
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors mt-2">
         {exchange.site}
        </button>
        <p className="text-xs text-gray-500 mt-2">Your capital is at risk.</p>
      </div>
    );
  };

  return (
    <div className="component-spacing">
      <div className="app-container">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black-2">
          Brief Look at OrangeX
        </h2>
      
        {/* CONTENT */}
        <div className="mt-3">
          <p className="mb-4 text-base sm:text-[18px]/[24px] text-black-2 font-[400]">
            <span>
              OrangeX is a professional crypto trading platform, offering deep
              liquidity and excellent user experience. It supports a wide range of{" "}
            </span>
            <span>cryptocurrencies, including </span>
            <span className="text-black border-green-4 border-b-3">BTC</span>
            <span> and </span>
            <span className="text-black border-green-4 border-b-3">ETH </span>
            <span>
              {" "}
              and boasts robust security measures. Additionally, OrangeX provides
              24/7 client support. Registered in{" "}
            </span>{" "}
            <span>
              the Czech Republic, OrangeX holds MSB (Money Serves Business) and{" "}
            </span>
            <span className="text-black border-green-4 border-b-3">NFA</span>
            <span>
              {" "}
              licenses, ensuring compliance with regulatory standards.{" "}
            </span>
            <span> (the National Futures Association) licenses in the U.S. </span>
          </p>
        </div>
        
        {/* CONTAINER */}
        <div className="mt-7 bg-white rounded-[0_9px_9px_0] overflow-hidden shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] border-2 border-[#2c64eb] border-l-[5px]">
        <div className="flex flex-wrap">
          <div className="w-full">
            {/* FIRST SECTION */}
            <div className="bg-blue-2 p-4 sm:p-6 flex flex-col">
              {/* TEXT AREA */}
              <div>
                <span className="text-base sm:text-[18px]/[30px] font-[600]">
                  We've identified your country as{" "}
                  <span className="text-black font-bold">UK </span>{" "}
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="logo"
                    className="w-8 h-6 inline-block pb-1"
                  />
                </span>

                <span>
                  <p className="pt-4 sm:pt-6">
                    We have thoroughly analyzed all companies legally providing
                    trading services in your country and created a ranking of
                    the best ones. Our analysis highlights companies that offer
                    optimal working conditions, uphold a strong reputation, and
                    consistently receive the highest number of positive reviews
                    from traders on our website.
                  </p>
                </span>
              </div>
            </div>
            {/* SECOND SECTION */}
            <div className="p-6">
              {/* Title with flag */}
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold">
                  Explore the 5 top-rated companies in UK{" "}
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="logo"
                    className="w-8 h-6 inline-block pb-1"
                  />
                  :
                </h3>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-end mb-6">
                <div className="flex space-x-8 ">
                  {["Forex", "Crypto", "Stocks"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`pb-2 px-4 font-medium cursor-pointer duration-300 hover:text-green-600 ${
                        activeTab === tab
                          ? "text-green-600 border-b-2 border-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exchange Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {exchangeData[activeTab].map((exchange) => (
                  <ExchangeCard key={exchange.id} exchange={exchange} />
                ))}
              </div>

              {/* See full list link */}
              <div className="flex justify-end mt-6">
                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center"
                >
                  See the full list of recommended companies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BriefInfo;
