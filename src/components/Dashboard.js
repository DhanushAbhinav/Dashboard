import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="charts-container">
        <div className="chart-item">
          <h3>Sales vs Orders</h3>
          <LineChart />
        </div>
        <div className="chart-item">
          <h3>Portion of Sales</h3>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
