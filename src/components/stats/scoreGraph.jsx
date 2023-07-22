import React from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';

const ScoreGraph = ({ todayScore, dataPie }) => {
  // Convertir todayScore en nombre (float) en utilisant parseFloat
  const scoreValue = parseFloat(todayScore);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart
        className="pieChartContent"
        style={{ backgroundColor: "transparent", borderRadius: "5px" }}
      >
        <Pie
          data={dataPie}
          dataKey="value"
          startAngle={-170}
          cx="50%"
          cy="50%"
          endAngle={170}
          innerRadius={80}
          outerRadius={90}
        >
          {dataPie.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <text x={80} y={50} fontWeight={600}>
          Score
        </text>
        <text x="41%" y="45%" fontSize="30px" fontWeight={900}>
          {scoreValue * 100} %
          <tspan
            x="41%" // text position
            y="46%"
            dy={20} // text offset
            fontWeight={500}
            fontSize="16px"
            letterSpacing="0.6"
            fill='#74798C'
          >
            de votre
          </tspan>
          <tspan x="41%" y="46%" dy={40} fontSize="16px" fontWeight={500} fill='#74798C'>
            objectif
          </tspan>
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ScoreGraph;