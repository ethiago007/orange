import React from "react";
import icon1 from "../assets/image/icon1.svg";
import icon2 from "../assets/image/icon2.svg";

function ProsCos() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        <div className="rounded-[10px] border border-[#e1e1e1] p-6 flex flex-wrap gap-6 text-lg mt-6 lg:grid lg:grid-cols-2 lg:gap-x-[30px]">
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-2 mb-5 pb-5 border-b-1 border-[#e1e1e1]">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="logo" />
              </div>
              <h3 className="text-lg font-medium">
                Advantages of trading with OrangeX:
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                High security standards enhanced by a 1,000 BTC compensation
                fund;
              </li>
              <li>Wide choice of cryptocurrencies;</li>
              <li>Availability of regulatory licenses.</li>
            </ul>
          </div>

          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center gap-2 mb-5 pb-5 border-b-1 border-[#e1e1e1]    ">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="logo" />
              </div>
              <h3 className="text-lg font-medium">Disadvantages of OrangeX:</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recent appearance in the market;</li>
              <li>Ongoing development of certain features and products.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProsCos;
