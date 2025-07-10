import React from "react";
import { ChevronRight, Edit, CheckCircle, Star, CircleCheck, Pencil } from "lucide-react";
import orangex from "../assets/image/orangeLogo.PNG";
import ivan from "../assets/image/ivan.png";
import tobi from "../assets/image/tobi.png";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Review = () => {
  return (
    <div className="relative font-sans app-container component-spacing">
      {/* Breadcrumb */}
      <nav className="text-sm text-primary mb-5 flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex items-center flex-wrap">
          <a href="#" className="hover:underline hover:text-black">
            Traders Union
          </a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <a href="#" className="hover:underline hover:text-black">
            Best Crypto Exchanges
          </a>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-600">OrangeX Review</span>
        </div>

        <div className="flex items-center">
          <a
            href="#"
            className="text-gray-600 hover:text-black hover:underline"
          >
            Advertiser Disclosure
          </a>
        </div>
      </nav>

      {/* Review Content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-start w-full gap-6 lg:gap-10">
          {/* First section - Logo and CTA   */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
            <img
              src={orangex}
              alt="logo"
              className="w-full max-w-[300px] shadow-lg rounded-md"
            />

            {/* CTA Button */}
            <div className="mt-5 w-full max-w-[300px]">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 w-full rounded-lg font-[600] text-[18px] lg:text-[20px] transition-colors">
                CHOOSE THE RIGHT
                <br />
                CRYPTO EXCHANGE
              </button>
            </div>
          </div>

          {/* Second section - Title and Details */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-3xl lg:text-5xl text-black-2 font-[700] leading-tight">
              OrangeX Review 2025
            </span>
        
            <div className="flex items-center gap-2 pt-4">
              <div className="bg-[#f6f9f6] p-4 rounded-md w-full">
                <div className="flex flex-col lg:flex-row items-start gap-4">
                  {/* Author section */}
                  <div className="flex items-center gap-2 text-gray-800 pb-4 lg:pb-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={ivan} 
                        alt="Ivan Andriyenko" 
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-xs text-black bg-green p-1 rounded-md flex items-center">
                          <Pencil className="w-4 h-4 text-black inline mr-1" />
                          Written by:
                        </span>
                      </div>
                      <span className="text-sm font-medium py-[5px] border-green-2 border-b-4 hover:text-green-2 ease-in-out duration-300 inline-block">
                        Ivan Andriyenko
                      </span>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 pt-2">Contributor</span>
                        <span className="ml-1 text-gray-400 text-xs">ⓘ</span>
                      </div>
                    </div>
                  </div>

                  {/* Fact checker section */}
                  <div className="flex items-center gap-2 text-gray-800 pb-4 lg:pb-0 lg:pr-5 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={tobi} 
                        alt="Tobi Opeyemi Amure" 
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-xs text-black bg-green p-1 rounded-md flex items-center">
                          <TaskAltIcon sx={{ fontSize: 16 }} className="w-4 h-4 text-black inline mr-1" />
                          Fact-checked by:
                        </span>
                      </div>
                      <span className="text-sm font-medium py-[5px] border-green-2 border-b-4 hover:text-green-2 ease-in-out duration-300 inline-block">
                        Tobi Opeyemi Amure
                      </span>
                      <span className="text-xs text-gray-500 pt-2">Cryptocurrency and stock expert</span>
                    </div>
                  </div>

                  {/* Updated date */}
                  <div className="flex flex-col w-full lg:w-auto text-center lg:text-left">
                    <span className="text-sm text-gray-500">Updated:</span>
                    <span className="text-[16px] lg:text-[18px] font-[400] mt-2 lg:mt-5">June 11, 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
