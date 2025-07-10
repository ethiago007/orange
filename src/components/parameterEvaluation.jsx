import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ParameterEvaluation() {
  // Data for the parameters
  const parameters = [
    { name: "User Satisfaction", score: 6.0, color: "#ffc107" },
    { name: "Regulation and safety", score: 10.0, color: "#8bc34a" },
    { name: "Commissions and fees", score: 8.8, color: "#8bc34a" },
    { name: "Deposit and withdrawal", score: 5.5, color: "#ffc107" },
    { name: "Markets and tradable assets", score: 5.0, color: "#ffc107" },
  ];

  return (
    <div className="w-full px-[15px] mb-10 mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1250px] 2xl:max-w-[1254px]">
      <div className="md:bg-white md:rounded-[6px] md:shadow-[17px_17px_31px_0_rgba(0,0,0,0.04)] md:p-[50px]">
        <h2 className="text-[40px] font-bold text-[#333] mb-8">OrangeX Key Parameters Evaluation</h2>
        
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-[100px]">
          {/* Parameter list on the left */}
          <div className="space-y-4">
            {parameters.map((param, index) => (
              <div key={index} className="flex items-center border-b border-gray-100 pb-4 last:border-0">
                <div className="flex-1 pr-[32px] sm:pr-[98px] min-h-[31px] cursor-pointer transition-all duration-150 ease-in-out relative text-black font-medium">
                  {param.name}
                </div>
                <div 
                  className="flex items-center border-2 justify-center w-12 h-8 rounded-md text-black font-semibold"
                  style={{
                    borderColor: param.score >= 8 ? '#8bc34a' : '#ffc107', 
                    backgroundColor: param.score >= 8 ? 'rgba(139, 195, 74, 0.3)' : 'rgba(255, 193, 7, 0.3)'
                  }}
                >
                  {param.score}
                </div>
                <div className="ml-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Radar Chart on the right */}
          <div className="mt-8 lg:mt-0 flex mr-[50px]  justify-center">
            <div className="w-[350px] h-[350px]">
              <RadarChartComponent parameters={parameters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Radar chart component using Chart.js
function RadarChartComponent({ parameters }) {
  const data = {
    labels: [
      'USER SATISFACTION',
      'SAFETY',
      'COMMISSIONS AND FEES',
      'DEPOSIT AND WITHDRAWAL',
      'MARKETd TRADABLE ASSETS'
    ],
    datasets: [
      {
        label: 'OrangeX Parameters',
        data: [6.0, 10.0, 8.8, 5.5, 5.0],
        backgroundColor: 'rgba(139, 195, 74, 0.4)',
        borderColor: '#8BC34A',
        borderWidth: 2,
        pointBackgroundColor: '#8BC34A',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#8BC34A',
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };
  
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          backdropColor: 'transparent',
          color: '#666'
        },
        grid: {
          color: '#e0e0e0'
        },
        angleLines: {
          color: '#e0e0e0'
        },
        pointLabels: {
          font: {
            size: 11
          },
          color: '#666'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#333',
        bodyColor: '#333',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        caretSize: 10,
        cornerRadius: 5,
        displayColors: false
      }
    },
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    }
  };

  return <Radar data={data} options={options} />;
}

export default ParameterEvaluation