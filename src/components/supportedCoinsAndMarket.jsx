import React from 'react'

function SupportedCoinsAndMarket() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        {/* Header Section with title and score */}
        <div className="flex justify-between items-center mb-5 pb-2.5 border-b border-[#e1e1e1]">
          <h2 className="text-[40px] font-bold text-[#000] m-0">Supported coins & markets</h2>
          <div className="text-lg">
            Score: <span className="text-[#6ab04c] font-bold text-2xl">8</span>/10
          </div>
        </div>

        {/* Description */}
        <div className="mb-7">
          <p className="text-base">
            <strong>OrangeX</strong> received a score of <strong>8/10</strong> in this category, reflecting a solid selection of tradable assets and markets. OrangeX supports <strong>389</strong> cryptocurrencies and basic trading types, although some advanced features or asset diversity may be limited compared to leading exchanges.
          </p>
        </div>

        {/* Pros and Cons Section */}
        <div className="rounded-[10px] border border-[#e1e1e1] p-6 flex flex-wrap gap-6 text-lg mt-6 lg:grid lg:grid-cols-2 lg:gap-x-[30px]">
          {/* Advantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Advantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Crypto copy trading available
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Crypto futures available
              </li>
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Disadvantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> Staking not available
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> Crypto options not available
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison section */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-[#555]">OrangeX supported coins and markets vs competitors</h3>
          
          <p className="mt-4 text-[#666] leading-relaxed">
            We compared OrangeX with leading exchanges in terms of supported coins, NFT access, and derivatives like futures and options to help users assess the platform's product range and trading flexibility.
          </p>
          
          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f5f5] text-center">
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-center font-medium text-[#999]">OrangeX</th>
                  <th className="p-4 text-center font-medium text-[#999]">Bybit</th>
                  <th className="p-4 text-center font-medium text-[#999]">MEXC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e1e1e1]">
                  <td className="p-4 text-left text-[#999]">Supported coins</td>
                  <td className="p-4 text-center text-[#999]">389</td>
                  <td className="p-4 text-center text-[#999]">638</td>
                  <td className="p-4 text-center text-[#999]">2275</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center my-7">
          <button className="bg-white border border-[#3074f6] text-[#3074f6] py-3 px-6 rounded flex items-center font-bold hover:bg-gray-50">
            LEARN MORE ABOUT SUPPORTED COINS & MARKETS <span className="ml-2.5">↓</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SupportedCoinsAndMarket