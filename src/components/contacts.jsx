import React from 'react'

function Contacts() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        {/* Contacts Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-[#e1e1e1] pb-4">
          <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <span className="text-[#8dc63f]">@</span>
          </div>
          <h2 className="text-2xl font-bold">Contacts</h2>
        </div>
        
        {/* Official Site */}
        <div className="support contacts-table-wrap rounded-lg overflow-hidden bg-white shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] w-full mt-[22px] p-[26px_20px]">
          <div className="flex gap-100 items-center">
            <div className="font-medium text-[#555] ">Official site</div>
            {/* <a href="https://www.orangex.com/" className="text-[#000] hover:underline font-bold" target="_blank" rel="noopener noreferrer">
              https://www.orangex.com/
            </a> */}
            
            <a href="#" className="text-[#000] hover:underline font-bold" target="_blank" rel="noopener noreferrer">
              https://www.orangex.com/
            </a>
          </div>
        </div>
        
        {/* Articles Section */}
        <div className="mt-12">
          {/* Articles Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <span className="text-[#8dc63f]">💡</span>
            </div>
            <h2 className="text-lg font-medium">Articles that may help you</h2>
          </div>
          
          {/* Articles List */}
          <div className="space-y-4">
            {/* Article 1 */}
            <div className="border-b border-[#e1e1e1] pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#f5f5f5] text-sm px-3 py-1 rounded-md">For Beginners</span>
                <span className="text-[#333]">→</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Dropee Question Of The Day: A Complete Guide</h3>
              <div className="flex items-center gap-4 text-sm text-[#777]">
                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>June 2025</span>
                </div>
                <span>Alamin Morshed</span>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="border-b border-[#e1e1e1] pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#f5f5f5] text-sm px-3 py-1 rounded-md">For Beginners</span>
                <span className="text-[#333]">→</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Ethereum Cloud Mining Sites: Scam Or Safe - Can You Mine ETH?</h3>
              <div className="flex items-center gap-4 text-sm text-[#777]">
                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>June 2025</span>
                </div>
                <span>Maxim Nechiporenko</span>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="border-b border-[#e1e1e1] pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#f5f5f5] text-sm px-3 py-1 rounded-md">For Beginners</span>
                <span className="text-[#333]">→</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Can You Really Cloud Mine USDT? Real Payouts Or Scam</h3>
              <div className="flex items-center gap-4 text-sm text-[#777]">
                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>June 2025</span>
                </div>
                <span>Maxim Nechiporenko</span>
              </div>
            </div>
            
            {/* Article 4 */}
            <div className="border-b border-[#e1e1e1] pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#f5f5f5] text-sm px-3 py-1 rounded-md">For Beginners</span>
                <span className="text-[#333]">→</span>
              </div>
              <h3 className="text-lg font-medium mb-2">ECOS Cloud Mining 2025: Profitability And Risks Review</h3>
              <div className="flex items-center gap-4 text-sm text-[#777]">
                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>June 2025</span>
                </div>
                <span>Maxim Nechiporenko</span>
              </div>
            </div>
            
            {/* Article 5 */}
            <div className="border-b border-[#e1e1e1] pb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#f5f5f5] text-sm px-3 py-1 rounded-md">For Beginners</span>
                <span className="text-[#333]">→</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Bitdeer Review In 2025</h3>
              <div className="flex items-center gap-4 text-sm text-[#777]">
                <div className="flex items-center gap-1">
                  <span>◷</span>
                  <span>June 2025</span>
                </div>
                <span>Maxim Nechiporenko</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Companies Reviews */}
        <div className="mt-16">
          <div className="rounded-[6px] border-[3px] border-[#e3e3e4] bg-[#f0f1f2] px-6 py-6 pb-[14px] text-center">
            <h3 className="text-lg font-medium mb-6">Check out our reviews of other companies as well</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="bg-[#e6ebfa] text-[16px] text-[#2c64eb] font-bold px-4 py-2 rounded-[15px] flex items-center gap-1 hover:bg-[#d6e0f5]">
                WOOFi <span className="text-xs">→</span>
              </a>
              <a href="#" className="bg-[#e6ebfa] text-[16px] text-[#2c64eb] font-bold px-4 py-2 rounded-[15px] flex items-center gap-1 hover:bg-[#d6e0f5]">
                Coinflare <span className="text-xs">→</span>
              </a>
              <a href="#" className="bg-[#e6ebfa] text-[16px] text-[#2c64eb] font-bold px-4 py-2 rounded-[15px] flex items-center gap-1 hover:bg-[#d6e0f5]">
                Uniswap V3 <span className="text-xs">→</span>
              </a>
              <a href="#" className="bg-[#e6ebfa] text-[16px] text-[#2c64eb] font-bold px-4 py-2 rounded-[15px] flex items-center gap-1 hover:bg-[#d6e0f5]">
                NonKYC <span className="text-xs">→</span>
              </a>
              <a href="#" className="bg-[#e6ebfa] text-[16px] text-[#2c64eb] font-bold px-4 py-2 rounded-[15px] flex items-center gap-1 hover:bg-[#d6e0f5]">
                Jupiter <span className="text-xs">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts