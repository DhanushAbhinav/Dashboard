import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = () => {
  const data = {
    labels: ['6/30/2024', '7/6/2024', '7/13/2024', '7/20/2024', '7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 3, 2, 2, 1],
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Sales',
        data: [1404, 1200, 1000, 800, 600],
        borderColor: '#20B2AA',
        backgroundColor: 'rgba(32, 178, 170, 0.2)',
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Line data={data} options={options} />
}

export default LineChart
