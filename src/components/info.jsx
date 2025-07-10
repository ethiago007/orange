import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NGN from '../assets/image/ng.svg'

function Info() {
  return (
    <div className="bg-gray-50 component-spacing">
      <div className="app-container">
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6">
          {/* Ranking card */}
          <div className="bg-white rounded-lg border border-gray-200 flex-1 max-w-md mx-auto md:mx-0 mb-4 md:mb-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4">
              <div className="bg-green-50 p-2 rounded-full flex-shrink-0">
                <EmojiEventsIcon className="text-green-800" style={{ fontSize: "28px" }} />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-base font-semibold">Ranked </span>
                <span className="text-green-2 font-semibold">#143</span>
                <span className="text-base font-semibold"> among the </span>
                <a href="#" className="text-blue-600 font-semibold">Best crypto exchanges</a>
                <span className="text font-semibold"> of United Kingdom</span>
              </div>
            </div>
            <div className="bg-gray-2 py-[20px]">
              <div className="text-gray-500 text-xs text-center mb-1">* This information is updated monthly</div>
            </div>
          </div>

          {/* Availability card */}
          <div className="bg-white rounded-lg border border-gray-200 flex-1 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4">
              <div className="bg-green-50 p-2 rounded-full flex-shrink-0">
                <img src="https://flagcdn.com/w40/gb.png" alt="logo" className='w-8 h-8' />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                <span className="text-base font-medium">OrangeX is available in</span>
                <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                  <span className="mr-1">United Kingdom</span>
                  <KeyboardArrowDownIcon style={{ fontSize: "18px" }} />
                </div>
              </div>
            </div>
            <div className="bg-gray-2 py-[20px]">
              <div className="text-gray-500 text-xs text-center mb-1">* Location-based content display</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info