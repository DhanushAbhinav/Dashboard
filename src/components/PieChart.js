import React from 'react'
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        label: 'Portion of Sales',
        data: [44.2, 55.8],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  }

  return <Pie data={data} options={options} />
}

export default PieChart
