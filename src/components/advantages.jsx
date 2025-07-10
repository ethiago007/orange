import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { Crown } from 'lucide-react';

const Advantages = () => {
  return (
    <div className='bg-white component-spacing'>
      <div className='app-container'>
        <div className='flex flex-col md:flex-row justify-center gap-3'>
          {/* Minimum deposit card */}
          <div className='bg-white p-4 rounded-lg border-2 border-gray-100 flex-1 max-w-sm mx-auto md:mx-0 mb-4 md:mb-0'>
            <div className='mb-3'>
              <div className='bg-blue-500 p-2 rounded-full inline-flex'>
                <AttachMoneyIcon className='text-white' fontSize="small" />
              </div>
            </div>
            <h3 className='text-base font-medium text-gray-800 mb-1'>Minimum deposit:</h3>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>$10</li>
            </ul>
          </div>

          {/* Trading platform card */}
          <div className='bg-white p-4 rounded-lg border-2 border-gray-100 flex-1 max-w-sm mx-auto md:mx-0 mb-4 md:mb-0'>
            <div className='mb-3'>
              <div className='bg-blue-500 p-2 rounded-full inline-flex'>
                <CandlestickChartIcon className='text-white' fontSize="small" />
              </div>
            </div>
            <h3 className='text-base font-medium text-gray-800 mb-1'>Trading platform:</h3>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>Proprietary web platform</li>
            </ul>
          </div>

          {/* Trading features card */}
          <div className='bg-white p-4 rounded-lg border-2 border-gray-100 flex-1 max-w-sm mx-auto md:mx-0'>
            <div className='mb-3'>
                <div className='bg-blue-500 p-2 rounded-full inline-flex'>
                <Crown className='text-white' size={18} />
              </div>
            </div>
            <h3 className='text-base font-medium text-gray-800 mb-1'>Trading features:</h3>
            <ul className='list-disc pl-5 text-gray-700'>
              <li>Robust security and regulation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages