import React from "react";
import research from "../assets/image/tu-research.svg";

function Evaluation() {
  return (
    <div className="my-5 mx-auto mb-[4%]">
      <div className="container mx-auto">
        <h2 className="text-[40px] font-[700] text-black-2 mb-4 ml-[40px]">
          Our Evaluation of OrangeX
        </h2>
      </div>
      {/* CONTAINER */}
      <div 
        className="container mx-auto p-3 mt-7 bg-white rounded-lg shadow-sm max-w-[1200px]"
        style={{
          WebkitBoxShadow: "0 5px 0 #71b219, 17px 17px 31px 0 rgba(0, 0, 0, .04)",
          boxShadow: "0 5px 0 #71b219, 17px 17px 31px 0 rgba(0, 0, 0, .04)"
        }}
      >
        <div className="flex flex-wrap">
          {/* SCORE CARD */}
          <div className="w-full md:w-1/4 p-6">
            <div className="border-3 border-grey-2 rounded-lg bg-grey-3 p-6 flex flex-col items-center">
              <div className="text-green-3 text-[34px]/[40px] font-semibold">8<span className="text-black-2 text-[25px]/[24px] font-semibold">/10 </span></div>

              <div className="w-full bg-gray-200 h-2 my-4 rounded-full">
                {/* RULER */}

                <div
                  className="bg-green-3 h-2 rounded-full "
                  style={{ width: "80%" }}
                ></div>                            
              </div>
              <div className="flex items-center text-gray-600 mt-2">
                <span className="">TU Overall Score</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {/* <div className='text-gray-300 text-5xl mt-4'>TU</div> */}
              <img src={research} alt="research" className="w-10 h-10" />
            </div>
          </div>

          {/* CONTENT */}
          <div className=" w-full md:w-3/4 p-4">
            <p className="mb-4 mt-3 text-[18px]/[24px] text-black-2 font-[400]">
              <span>
                OrangeX is a high-risk cryptocurrency exchange with the{" "}
              </span>
              <span className="font-bold text-black  border-green-4 border-b-3 ">TU Overall Score</span>
              <span> of </span>
              <span className="font-bold">8</span>
              <span> out of </span>
              <span className="font-bold">10</span>
              <span>
                . Having reviewed trading opportunities offered by the company
                and reviews posted by OrangeX clients on our website, Traders
                Union expert{" "}
              </span>
              <span className="text-black border-b-3 border-green-4">
                Anton Kharitonov
              </span>
              <span>
                {" "}
                does not recommend working with this broker, as, according to
                reviews, most clients are not satisfied with the broker.
              </span>
            </p>
            <p className="mb-4 text-[18px]/[24px] text-black-2 font-[400]">
              OrangeX is a secure, regulated crypto trading platform offering
              diverse opportunities and 24/7 support.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Evaluation;
