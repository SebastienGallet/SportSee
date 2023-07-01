import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeightGraph = ({ data, minWeight, maxWeight, minCalories, maxCalories }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="right" domain={[minWeight, maxWeight]} orientation="right" />
        <YAxis yAxisId="left" hide />
        <Tooltip />
        <Legend />
        <Bar dataKey="weight" fill="black" barSize={10} radius={[10, 10, 0, 0]} yAxisId="right" />
        <Bar dataKey="calories" fill="red" barSize={10} radius={[10, 10, 0, 0]} yAxisId="left" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeightGraph;
