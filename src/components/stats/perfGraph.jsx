import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const perfGraph = ({ performanceData }) => {
  return (
    <ResponsiveContainer width="33%" height={350} minWidth={400}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performanceData}
        style={{ backgroundColor: '#282D30', borderRadius: '10px' }}
      >
        <PolarGrid gridType="polygon" stroke="#fff" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#fff' }} />
        <PolarRadiusAxis tick={null} />
        <Radar name="Performance" dataKey="value" stroke="none" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default perfGraph;
