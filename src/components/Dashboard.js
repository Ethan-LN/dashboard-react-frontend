import React from 'react'
import RadarCharts from './RadarCharts'
import TreeMapCharts from './TreeMapCharts'
import SunBurstChart from './SunBurstChart'
import data from '../assets/data/SunBurstData.json'

export const Dashboard = () => {
  return (
    <div className='dashBoard'>
      {/* <h1>{data}</h1> */}
      <RadarCharts />
      <TreeMapCharts />
      <SunBurstChart data={data}/>
    </div> 
  )
}
