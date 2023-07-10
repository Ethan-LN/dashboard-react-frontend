import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Creativity',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Persistence',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Growth Mindset',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Problem Sovling',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Team Work',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Communication',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function RadarCharts() {
  return (
    <RadarChart cx={500} cy={350} outerRadius={150} width={1000} height={800} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  );
}
