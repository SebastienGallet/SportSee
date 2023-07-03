import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeightGraph = ({ data, minWeight, maxWeight}) => {


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const weight = payload[0].payload.weight;
      const calories = payload[0].payload.calories;
      return (
        <div style={{ background: 'red', color: '#fff', padding: '5px', border: '1px solid #ccc' }}>
          <p>{`${weight} kg`}</p>
          <p>{`${calories} kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="legend">
        <h3>Activité quotidienne</h3>
        <div className="legend-item">
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <span className='black-circle'></span>
            Poids (kg)
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <span className='red-circle'></span>
            Calories (kcal)
          </p>
        </div>
      </div>
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
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="weight" fill="black" barSize={10} radius={[10, 10, 0, 0]} yAxisId="right" />
          <Bar dataKey="calories" fill="red" barSize={10} radius={[10, 10, 0, 0]} yAxisId="left" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightGraph;
