import React from 'react'

function Regulation() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        {/* Header Section with title and score */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 pb-2.5 border-b border-[#e1e1e1] gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#333] m-0">Regulation and safety</h2>
          <div className="text-lg text-center sm:text-right">
            Score: <span className="text-[#6ab04c] font-bold text-2xl">10</span>/10
          </div>
        </div>

        {/* Description */}
        <div className="mb-7">
          <p className="text-base"><strong>OrangeX</strong> has earned a rating of <strong>10/10</strong>, demonstrating strong security and regulatory compliance. This score suggests that the exchange is generally reliable and offers a solid level of protection for users.</p>
        </div>

        {/* Pros and Cons Section */}
        <div className="rounded-[10px] border border-[#e1e1e1] p-4 sm:p-6 flex flex-col lg:flex-row gap-6 text-lg mt-6">
          {/* Advantages */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">Advantages of OrangeX</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> 2FA
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Tier-1 regulation
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Government-regulated
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> No successful hacks history
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Investor protection fund
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> U.S-regulated
              </li>
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">Disadvantages of OrangeX</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> No facial recognition
              </li>
            </ul>
          </div>
        </div>

        {/* Security Factors */}
        <div className="text-center my-7">
          <h3 className="text-gray-500 font-normal">OrangeX Security Factors</h3>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center my-7">
          <button className="bg-white border border-[#3074f6] text-[#3074f6] py-3 px-4 sm:px-6 rounded flex items-center font-bold hover:bg-gray-50 text-sm sm:text-base">
            LEARN MORE ABOUT REGULATION AND SAFETY <span className="ml-2.5">↓</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Regulation