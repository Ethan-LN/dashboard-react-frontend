import React from 'react'
import RadarCharts from './RadarCharts'
import TreeMapCharts from './TreeMapCharts'

export const Dashboard = () => {
  return (
    <div className='dashBoard'>
      <RadarCharts />
      <TreeMapCharts />
    </div> 
  )
}
