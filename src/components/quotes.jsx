import React from 'react'
import quotesBlue from '../assets/image/quotes-blue.svg'
import profileImg from '../assets/image/ivan.png'

function Quotes() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        <div className="relative p-5 md:p-[50px_60px] rounded-[10px] border-2 border-[rgba(27,84,213,0.1)] bg-[#f4f7fe]">
          {/* Decorative background quote - hidden on mobile, shown on lg screens */}
          <div className="hidden lg:block absolute top-[-25px] left-[50px] z-0">
            <img src={quotesBlue} alt="Quotes" className="w-full h-auto" />
          </div>
          
          {/* Content container with z-index to appear above background */}
          <div className="relative z-[1]">
            {/* Expert advice header with title and expert info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[22px] md:mb-[30px]">
              <h2 className="text-[32px] font-bold text-[#333]">TU Expert Advice</h2>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="mr-4 text-right">
                  <h3 className="text-lg font-medium">Anton Kharitonov</h3>
                  <p className="text-sm text-gray-600">
                    Financial expert and analyst<br />
                    at Traders Union
                  </p>
                </div>
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-blue-500">
                  <img 
                    src={profileImg} 
                    alt="Anton Kharitonov" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Expert advice content */}
            <div className="space-y-6 text-[#333]">
              <p>
                OrangeX is an innovative crypto trading platform, offering a wide choice of assets, including BTC, ETH, and
                other popular cryptocurrencies. Registered in the Czech Republic and licensed by MSB and NFA, the platform
                complies with stringent regulatory rules.
              </p>
              <p>
                With a variety of assets, OrangeX prioritizes user security by maintaining a BTC 1,000 insurance fund and
                24/7 client support.
              </p>
              <p>
                The platform empowers its clients to use advanced trading tools and features, catering to both experienced
                and novice traders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes