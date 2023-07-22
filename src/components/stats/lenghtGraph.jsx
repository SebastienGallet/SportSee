import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Line, LineChart, CartesianGrid } from 'recharts';

const StatGraph = ({ data, minSessionLength, maxSessionLength }) => {

  const formatDayOfWeek = (tickItem) => {
    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    const index = tickItem % 7;
    return daysOfWeek[index];
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="desc">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300} minWidth={200}>
      <LineChart
        data={data}
        margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
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
        <Tooltip content={<CustomTooltip />} />

        <Line type="monotone" dataKey="sessionLength" stroke="#fff" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatGraph;