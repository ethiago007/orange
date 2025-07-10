import React from 'react'

function Summary() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        <h2 className="text-[40px] font-bold text-[#333] mb-6">OrangeX Summary</h2>

        {/* Risk disclaimer box */}
        <div className="rounded-[9px] border-2 border-[#2c64eb] bg-[#fafafa] p-5 sm:p-[30px] shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] mb-8">
          <div className="flex items-start">
            <div className="text-[#2c64eb] text-xl mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-[18px] leading-[1.6] text-[#333]">
                Your capital is at risk. CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. A high percentage of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.
              </p>
            </div>
          </div>
        </div>

        {/* Trading parameters table */}
        <div className="border border-[#e1e1e1] rounded-[10px]">
          {/* Trading platform */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">💻</span>
              <span className="font-medium">Trading platform:</span>
            </div>
            <div className="w-[60%]">Proprietary web platform</div>
          </div>

          {/* Accounts */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📊</span>
              <span className="font-medium">Accounts:</span>
            </div>
            <div className="w-[60%]">Accounts for trading cryptocurrencies and derivatives</div>
          </div>

          {/* Account currency */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">🔥</span>
              <span className="font-medium">Account currency:</span>
            </div>
            <div className="w-[60%]">USDT, BTC, ETH, USDC, etc.</div>
          </div>

          {/* Deposit / Withdrawal */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">💵</span>
              <span className="font-medium">Deposit / Withdrawal:</span>
            </div>
            <div className="w-[60%]">Bank cards, bank transfers, and crypto wallets</div>
          </div>

          {/* Minimum deposit */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📌</span>
              <span className="font-medium">Minimum deposit:</span>
            </div>
            <div className="w-[60%]">USDT 10</div>
          </div>

          {/* Leverage */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">⚖️</span>
              <span className="font-medium">Leverage:</span>
            </div>
            <div className="w-[60%]">Up to 1:200</div>
          </div>

          {/* PAMM-accounts */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">💼</span>
              <span className="font-medium">PAMM-accounts:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No
            </div>
          </div>

          {/* Min Order */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📝</span>
              <span className="font-medium">Min Order:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No
            </div>
          </div>

          {/* Commission */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">💱</span>
              <span className="font-medium">Commission:</span>
            </div>
            <div className="w-[60%]">
              <div>Spot: 0,1%-0,1%</div>
              <div>Futures: 0,02%-0,05%</div>
            </div>
          </div>

          {/* Instruments */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📈</span>
              <span className="font-medium">Instruments:</span>
            </div>
            <div className="w-[60%]">389 supported coins, Futures, Perpetual contracts.</div>
          </div>

          {/* Margin Call / Stop Out */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📊</span>
              <span className="font-medium">Margin Call / Stop Out:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No
            </div>
          </div>

          {/* Liquidity provider */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">🏢</span>
              <span className="font-medium">Liquidity provider:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No
            </div>
          </div>

          {/* Mobile trading */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📱</span>
              <span className="font-medium">Mobile trading:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Yes
            </div>
          </div>

          {/* Affiliate program */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">➕</span>
              <span className="font-medium">Affiliate program:</span>
            </div>
            <div className="w-[60%] flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Yes
            </div>
          </div>

          {/* Order execution */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">📋</span>
              <span className="font-medium">Order execution:</span>
            </div>
            <div className="w-[60%]">Limit and market</div>
          </div>

          {/* Trading features */}
          <div className="flex border-b border-[#e1e1e1] p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">⭐</span>
              <span className="font-medium">Trading features:</span>
            </div>
            <div className="w-[60%]">Robust security and regulation</div>
          </div>

          {/* Contests and bonuses */}
          <div className="flex p-4">
            <div className="w-[40%] flex items-center">
              <span className="mr-2">🎁</span>
              <span className="font-medium">Contests and bonuses:</span>
            </div>
            <div className="w-[60%]">CandyLand airdrops</div>
          </div>
        </div>
        
        {/* Learn more button */}
        <div className="flex justify-center mt-8">
          <button className="border border-[#2c64eb] text-[#2c64eb] font-medium rounded-md py-3 px-6 flex items-center hover:bg-[#f0f5ff] transition-colors">
            LEARN MORE ABOUT TRADING PARAMETERS
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary