import React from 'react'
import ivanImage from '../assets/image/ivan.png'
import tobiImage from '../assets/image/tobi.png'
import drjohnsonImage from '../assets/image/drjohnson.png' 

function Article() {
  return (
    <div className="component-spacing">
      <div className="app-container">
        <h2 className="text-[40px] font-bold text-[#000] mb-6">Team that worked on the article</h2>
        
        <div className="space-y-5 md:space-y-[30px]">
          {/* Ivan Andriyenko */}
          <div className="flex flex-col items-start relative min-h-[180px] pt-[160px] px-[20px] pb-[20px] border-[3px] border-[#d9ebd8] bg-[#f3f7f2] rounded-[10px] mt-[16px] pb-[17px] mr-[15px] text-black text-base leading-[24px] md:pt-[180px] md:px-[50px] md:pb-[30px] lg:pt-[30px] lg:pr-[50px] lg:pb-[30px] lg:pl-[200px]">
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-6 lg:top-1/2 lg:-translate-y-1/2">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <img src={ivanImage} alt="Ivan Andriyenko" className="w-full h-full object-cover" />
                <a href="#" className="absolute bottom-0 right-0 bg-[#0077B5] p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-28 sm:mt-2 lg:mt-0">
              <h3 className="text-xl font-bold w-[16%] pb-[1px] border-b-[3px] border-[rgba(113,178,25,0.5)]">Ivan Andriyenko</h3>
              <p className="text-gray-600 text-sm mb-4 mt-[4px]">Author at Traders Union</p>
              <p className="text-base">
                Ivan is a financial expert and analyst specializing in Forex, crypto, and stock trading. He prefers conservative 
                trading strategies with low and medium risks, as well as medium-term and long-term investments. He has been 
                working with financial markets for 8 years. Ivan prepares text materials for novice traders. He specializes in 
                reviews and assessment of brokers, analyzing their reliability, trading conditions, and features.
              </p>
              <p className="mt-4">
                <a href="#" className="text-black pb-[1px] border-b-[3px] border-[rgba(113,178,25,0.5)] transition-colors duration-300 ease-in-out hover:text-gray-700">Learn about our editorial policies.</a>
              </p>
            </div>
          </div>

          {/* Dr. BJ Johnson */}
          <div className="flex flex-col items-start relative min-h-[180px] pt-[160px] px-[20px] pb-[20px] border-[3px] border-[#d9ebd8] bg-[#f3f7f2] rounded-[10px] mt-[16px] pb-[17px] mr-[15px] text-black text-base leading-[24px] md:pt-[180px] md:px-[50px] md:pb-[30px] lg:pt-[30px] lg:pr-[50px] lg:pb-[30px] lg:pl-[200px]">
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-6 lg:top-1/2 lg:-translate-y-1/2">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <img src={drjohnsonImage} alt="Dr. BJ Johnson" className="w-full h-full object-cover" />
                <a href="#" className="absolute bottom-0 right-0 bg-[#0077B5] p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-28 sm:mt-2 lg:mt-0">
              <h3 className="text-xl font-bold w-[15%] pb-[1px] border-b-[3px] border-[rgba(113,178,25,0.5)]">Dr. BJ Johnson</h3>
              <p className="text-gray-600 text-sm mb-4 mt-[4px]">Developmental English Editor</p>
              <p className="text-base">
                Dr. BJ Johnson is a PhD in English Language and an editor with over 15 years of experience. He earned his degree 
                in English Language in the U.S and the UK. In 2020, Dr. Johnson joined the Traders Union team. Since then, he has 
                created over 100 exclusive articles and edited over 300 articles of other authors.
              </p>
            </div>
          </div>

          {/* Tobi Opeyemi Amure */}
          <div className="flex flex-col items-start relative min-h-[180px] pt-[160px] px-[20px] pb-[20px] border-[3px] border-[#d9ebd8] bg-[#f3f7f2] rounded-[10px] mt-[16px] pb-[17px] mr-[15px] text-black text-base leading-[24px] md:pt-[180px] md:px-[50px] md:pb-[30px] lg:pt-[30px] lg:pr-[50px] lg:pb-[30px] lg:pl-[200px]">
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8 lg:left-6 lg:top-1/2 lg:-translate-y-1/2">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                <img src={tobiImage} alt="Tobi Opeyemi Amure" className="w-full h-full object-cover" />
                <a href="#" className="absolute bottom-0 right-0 bg-[#0077B5] p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-28 sm:mt-2 lg:mt-0">
              <h3 className="text-xl font-bold w-[21%] pb-[1px] border-b-[3px] border-[rgba(113,178,25,0.5)]">Tobi Opeyemi Amure</h3>
              <p className="text-gray-600 text-sm mb-4 mt-[5px]">Cryptocurrency and stock expert</p>
              <p className="text-base">
                Tobi Opeyemi Amure is an editor and expert writer with over 7 years of experience. In 2023, Tobi joined the 
                Traders Union team as an editor and fact checker, making sure to deliver trustworthy and reliable content. The 
                topics he covers include trading signals, cryptocurrencies, Forex brokers, stock brokers, expert advisors, binary 
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article