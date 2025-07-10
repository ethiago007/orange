import React from 'react'
import orangeLogo from '../assets/image/orangelogo.svg'

function Footer() {
  return (
    <footer>
      {/* Footer Top Section */}
      <div className="pt-[37px] bg-[#2b4722]">
        <div className="app-container">
          <div className="flex flex-1 justify-between pb-6">
            {/* Left Section - Logo and Navigation */}
            <div className="flex flex-1 max-w-[60%]">
              {/* Logo */}
              <div className="mr-50">
                <div className="mb-6">
                  <img src={orangeLogo} alt="Traders Union" className="h-9 w-auto" />
                </div>
              </div>
              
              {/* Navigation Links in Two Columns */}
              <div className="flex text-white text-sm justify-center"> 
                <div className="mr-8">
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">• Our team</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Our methodology</a></li>
                    <li><a href="#" className="hover:text-gray-300">• TU Overall Score</a></li>
                    <li><a href="#" className="hover:text-gray-300">• TU News</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Contacts</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Vacancies</a></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-gray-300">• Best Forex Broker</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Best Prop Trading Firms</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Best Crypto Exchanges</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Live Quotes and Charts</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Interesting Articles</a></li>
                    <li><a href="#" className="hover:text-gray-300">• Sector-Based Rankings</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Section - Social Media */}
            <div className="flex flex-col items-end">
              <div className="space-y-3 mb-6">
                {/* Telegram */}
                <div className="cursor-pointer py-[15px] px-[42px] pl-[50px] text-white text-base font-normal leading-5 rounded-md border-2 border-white/15 bg-[#3e5335] whitespace-nowrap text-left relative min-w-[280px]">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">
                    ✈️
                  </span>
                  Our Telegram Channels ⌄
                </div>
                
                {/* YouTube */}
                <div className="cursor-pointer py-[15px] px-[42px] pl-[50px] text-white text-base font-normal leading-5 rounded-md border-2 border-white/15 bg-[#3e5335] whitespace-nowrap text-left relative min-w-[280px]">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">
                    ▶️
                  </span>
                  Our YouTube Channels ⌄
                </div>
                
                {/* Twitter */}
                <div className="cursor-pointer py-[15px] px-[42px] pl-[50px] text-white text-base font-normal leading-5 rounded-md border-2 border-white/15 bg-[#3e5335] whitespace-nowrap text-left relative min-w-[280px]">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg">
                    🐦
                  </span>
                  Our Twitter Channels ⌄
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="text-right">
                <div className="text-white text-sm mb-3">
                  <p className="font-medium">WE ARE IN SOCIAL MEDIA</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.74.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 cursor-pointer">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 cursor-pointer">
                    <span className="text-white font-bold">X</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-white/70 text-sm pb-4">
            © IAFT Ltd., 2010-2025
          </div>
        </div>
      </div>
      
      {/* Footer Middle Section - Disclaimers */}
      <div className="bg-[#192515] py-[28px]">
        <div className="app-container space-y-[10px]">
          {/* Risk Disclosure */}
          <div className="relative bg-white/[0.07] border-2 border-white/15 rounded-[5px] text-sm leading-5 text-white/65 py-[10px] px-[20px] pl-[50px] mb-[10px]">
            <div className="absolute left-4 top-3 text-yellow-400">
              ⚠️
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-medium mb-2">Risk disclosure:</h3>
                <p>Information on the TradersUnion.com website is for informational purposes only and does not constitute any motive or suggestion to visitors to invest money. Moreover, we hereby warn you that trading on the Forex and CFD markets is always a high risk. According to the statistics, 75-89% of customers lose the funds invested and only 11-25% of traders earn a profit. Trading in futures and options carries substantial risk of loss and is not suitable for every investor.</p>
              </div>
              <a href="#" className="text-white hover:text-gray-300 ml-4 whitespace-nowrap">More ↓</a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="relative bg-white/[0.07] border-2 border-white/15 rounded-[5px] text-sm leading-5 text-white/65 py-[10px] px-[20px] pl-[50px] mb-[10px]">
            <div className="absolute left-4 top-3 text-red-400">
              🚫
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-medium mb-2">Disclaimer:</h3>
                <p>Traders Union (TradersUnion.com) shall not be liable for the consequences of trading decisions made by the Client and for the possible loss of his capital resulting from the use of this website and information published on it.</p>
              </div>
              <a href="#" className="text-white hover:text-gray-300 ml-4 whitespace-nowrap">More ↓</a>
            </div>
          </div>
          
          {/* Disclosure of advertisers */}
          <div className="relative bg-white/[0.07] border-2 border-white/15 rounded-[5px] text-sm leading-5 text-white/65 py-[10px] px-[20px] pl-[50px] mb-[10px]">
            <div className="absolute left-4 top-3 text-blue-400">
              📢
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-medium mb-2">Disclosure of advertisers and revenues:</h3>
                <p>All the services on the Tradersunion.com website are free for you to use. Our team spends thousands of hours per annum researching brokers and gathering information about them to help investors all over the world to choose reliable companies and to avoid fraudsters.</p>
              </div>
              <a href="#" className="text-white hover:text-gray-300 ml-4 whitespace-nowrap">More ↓</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="bg-[#192515]">
        <div className="app-container pt-[14px] pb-[14px]">
          <div className="flex justify-between items-center">
            {/* Left Links */}
            <div className="flex space-x-4 text-white/70 text-sm">
              <a href="#" className="hover:text-white">Terms of Use</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">User Reviews Policy</a>
              <a href="#" className="hover:text-white">Cookies Settings</a>
            </div>
            
            {/* Right Side - Certificates and Copyright */}
            <div className="flex items-center space-x-4">
              {/* Trust badges/certificates placeholder */}
              <div className="flex space-x-2">
                <div className="w-16 h-8 bg-white/10 rounded flex items-center justify-center text-xs text-white">
                  FOR THE
                </div>
                <div className="w-16 h-8 bg-white/10 rounded flex items-center justify-center text-xs text-white">
                  onetrust
                </div>
                <div className="w-16 h-8 bg-blue-600 rounded flex items-center justify-center text-xs text-white">
                  ⭐ GDPR
                </div>
              </div>
              
              <div className="text-white/70 text-sm text-right">
                <p>All rights to the website are owned by IAFT Ltd.,</p>
                <p>Registration number - HE 336186</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer