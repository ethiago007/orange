import React, { useState } from 'react'

function UserReviews() {
  const [activeTab, setActiveTab] = useState('best');
  
  // Sample review data
  const reviews = [
    {
      id: 1,
      username: 'mrd2007',
      rating: 3,
      time: '28 weeks ago',
      content: "I like OrangeX's professional approach, strong security measures, and user-friendly interface. The platform's regulatory compliance and excellent client support make investing in cryptocurrencies easy and efficient.",
      useful: 19
    },
    {
      id: 2,
      username: 'Bamresources',
      rating: 3,
      time: '29 weeks ago',
      content: "OrangeX is a great choice due to its transparency and security. I particularly appreciate its wide range of cryptocurrencies and strong fund protection measures. Registered in multiple jurisdictions, OrangeX offers an intuitive platform and responsive client support for convenient cryptocurrency investments.",
      useful: 19
    },
    {
      id: 3,
      username: 'sgrgawthamraj63',
      rating: 3,
      time: '29 weeks ago',
      content: "OrangeX's strong security measures, including a BTC 1,000 insurance fund and regulatory compliance, combined with its user-friendliness, ensure the safety of my investments.. Its intuitive interface, responsive client support, and the opportunity to manage my assets on a single platform make my trading experience comfortable. I highly recommend OrangeX for its reliability.",
      useful: 19
    }
  ];

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-[#ffc107]' : 'text-[#e0e0e0]'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="component-spacing bg-[#f9f9f9]">
      <div className="app-container">
        <h2 className="text-[40px] font-bold text-[#333] mb-6 flex items-center">
          User Satisfaction
          <span className="bg-gray-300 text-white w-6 h-6 flex items-center justify-center rounded-full ml-3 text-sm">i</span>
        </h2>
        
        <div className="border-t border-gray-200 pt-8">
          {/* Share experience form */}
          <div className="bg-white p-6 rounded-lg mb-8 shadow-sm">
            <h3 className="text-[24px]/[32px] text-black font-semibold mb-6 text-center">Share your experience</h3>
            
            <div className="max-w-xl mx-auto">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-4">
                <textarea 
                  rows="4" 
                  placeholder="LEAVE A MESSAGE..." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button className="w-full bg-blue-1 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                SEND
              </button>
            </div>
          </div>
          
          {/* Review sorting */}
          <div className="flex mb-[40px] relative border-b border-gray-200">
            <button 
              className={`mr-6 pb-3 font-medium ${activeTab === 'best' ? 'text-[#8bc34a] border-b-2 border-[#8bc34a]' : 'text-gray-700'}`}
              onClick={() => setActiveTab('best')}
            >
              Best
            </button>
            <button 
              className={`mr-6 pb-3 font-medium ${activeTab === 'last' ? 'text-[#8bc34a] border-b-2 border-[#8bc34a]' : 'text-gray-700'}`}
              onClick={() => setActiveTab('last')}
            >
              Last
            </button>
            <button 
              className={`mr-6 pb-3 font-medium ${activeTab === 'oldest' ? 'text-[#8bc34a] border-b-2 border-[#8bc34a]' : 'text-gray-700'}`}
              onClick={() => setActiveTab('oldest')}
            >
              Oldest
            </button>
          </div>
          
          {/* Reviews list */}
          <div className="space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="p-6 bg-white rounded-[10px] mb-5 shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)]">
                <div className="flex justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-gray-200 overflow-hidden mr-4 flex items-center justify-center">
                      {/* Placeholder avatar */}
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-blue-500 font-medium mb-1">{review.username}</div>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {review.time}
                  </div>
                </div>
                
                <p className="text-gray-800 mb-4">
                  {review.content}
                </p>
                
                <div className="flex items-center">
                  <div className="bg-[#e8f5e9] text-[#8bc34a] py-1 px-3 rounded-md font-medium mr-4">
                    {review.useful}
                  </div>
                  <button className="text-gray-600 mr-4 hover:text-gray-800">
                    Useful +1
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    Answer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReviews