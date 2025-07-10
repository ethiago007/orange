import React from 'react'

function DepositAndWithdrawal() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        {/* Header Section with title and score */}
        <div className="flex justify-between items-center mb-5 pb-2.5 border-b border-[#e1e1e1]">
          <h2 className="text-[40px] font-bold text-[#000] m-0">Deposit and withdrawal</h2>
          <div className="text-lg">
            Score: <span className="text-[#6ab04c] font-bold text-2xl">8</span>/10
          </div>
        </div>

        {/* Description */}
        <div className="mb-7">
          <p className="text-base"><strong>OrangeX</strong> received a <strong>8/10</strong> rating for its deposit and withdrawal services. While OrangeX covers basic payment options, the platform lacks some widely used methods that could improve user flexibility.</p>
        </div>

        {/* Pros and Cons Section */}
        <div className="rounded-[10px] border border-[#e1e1e1] p-6 flex flex-wrap gap-6 text-lg mt-6 lg:grid lg:grid-cols-2 lg:gap-x-[30px]">
          {/* Advantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Advantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Bank cards accepted for instant deposits
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Many cryptocurrencies for deposits and withdrawals
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> No deposit fees
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Bank transfers for deposits and withdrawals
              </li>
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Disadvantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> No Google Pay option
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> No PayPal option
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> No P2P transfer option
              </li>
            </ul>
          </div>
        </div>

        {/* Deposit and withdrawal options section */}
        <div className="mt-8 flex items-center">
          <div className="w-7 h-7 rounded-full bg-[#f5f5f5] flex items-center justify-center mr-3">
            <span className="text-[#999] text-lg">?</span>
          </div>
          <h3 className="text-lg font-medium text-[#999]">Deposit and withdrawal options</h3>
        </div>
        
        {/* Options description */}
        <div className="mt-6 text-[#999]">
          <p>OrangeX supports the following deposit and withdrawal options: Bank Wire, Bank Card, Crypto.</p>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center my-7">
          <button className="bg-white border border-[#3074f6] text-[#3074f6] py-3 px-6 rounded flex items-center font-bold hover:bg-gray-50">
            LEARN MORE ABOUT DEPOSIT AND WITHDRAWAL <span className="ml-2.5">↓</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DepositAndWithdrawal