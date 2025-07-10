import React from 'react'

function Commission() {
  return (
    <div className="py-7">
      <div className="container mx-auto w-[89%]">
        {/* Header Section with title and score */}
        <div className="flex justify-between items-center mb-5 pb-2.5 border-b border-[#e1e1e1]">
          <h2 className="text-[40px] font-bold text-[#000] m-0">OrangeX commissions and fees</h2>
          <div className="text-lg">
            Score: <span className="text-[#6ab04c] font-bold text-2xl">8.75</span>/10
          </div>
        </div>

        {/* Description */}
        <div className="mb-7">
          <p className="text-base"><strong>OrangeX</strong> has earned a rating of <strong>8.75/10</strong> for its trading fees. This makes it a highly attractive choice for active traders seeking to reduce costs, as OrangeX is a platform with minimal crypto trading costs.</p>
        </div>

        {/* Pros and Cons Section */}
        <div className="rounded-[10px] border border-[#e1e1e1] p-6 flex flex-wrap gap-6 text-lg mt-6 lg:grid lg:grid-cols-2 lg:gap-x-[30px]">
          {/* Advantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Advantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Futures fees below industry average
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> Spot fee below industry average
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2.5 font-bold">✓</span> No deposit fee
              </li>
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-lg font-medium mb-4">Disadvantages</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> Withdrawal fee may be applied
              </li>
              <li className="flex items-center">
                <span className="text-red-600 mr-2.5 font-bold">✕</span> P2P fee applied
              </li>
            </ul>
          </div>
        </div>

        {/* Trading Fees Section */}
        <div className="mt-8">
          <ul className="list-disc pl-5">
            <li className="text-lg text-[#555] font-medium">What are OrangeX trading fees?</li>
          </ul>
          
          <p className="mt-4 text-[#666] leading-relaxed">
            We analyzed OrangeX's crypto fees and compared them to the top two competitors, both of which hold high average positions in our rankings. To establish a comprehensive benchmark, we also calculated the average fee score based on an evaluation of over 100 cryptocurrency exchanges.
          </p>
        </div>

        {/* Trading Fees vs Competitors */}
        <div className="text-center my-7">
          <h3 className="text-gray-500 font-normal">OrangeX trading fees vs competitors</h3>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center my-7">
          <button className="bg-white border border-[#3074f6] text-[#3074f6] py-3 px-6 rounded flex items-center font-bold hover:bg-gray-50">
            LEARN MORE ABOUT COMMISSIONS AND FEES <span className="ml-2.5">↓</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Commission