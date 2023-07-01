import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Line, LineChart, CartesianGrid } from 'recharts';

const StatGraph = ({data, minSessionLength, maxSessionLength }) => {

  const formatDayOfWeek = (tickItem) => {
    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const index = tickItem % 7;
    return daysOfWeek[index];
  };

  return (
    <ResponsiveContainer width="33%" height={350}>
      <div style={{ position: 'relative', minHeight: '400px' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', color: '#fff', fontWeight: 'bold' }}>
          Durée des sessions
        </div>
        <LineChart
          width={400}
          height={350}
          data={data}
          margin={{top: 8, right: 8, left: 8, bottom: 8}}
          style={{ backgroundColor: 'red', borderRadius: '10px' }}
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0} />
          <XAxis
            dataKey="day"
            tickFormatter={formatDayOfWeek}
            axisLine={false}
            tickLine={false} 
            tick={{ fill: '#fff' }}
          />
          <YAxis hide={true} />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#fff" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </ResponsiveContainer>
  );
};

export default StatGraph;
