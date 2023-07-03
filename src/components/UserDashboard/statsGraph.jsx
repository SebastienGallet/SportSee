import React from 'react';
import BarGraph from '../stats/barGraph';
import LenghtGraph from '../stats/lenghtGraph';
import PerfGraph from '../stats/perfGraph';
import ScoreGraph from '../stats/scoreGraph';

const StatGraph = ({ userData, userMainData }) => {
  const { sessions, performance } = userData;

  const weights = sessions.map((session) => session.kilogram);
  const calories = sessions.map((session) => session.calories);
  const durations = sessions.map((session) => session.sessionLength);

  const minWeight = Math.min(...weights) - 1;
  const maxWeight = Math.max(...weights) + 1;
  const minCalories = Math.min(...calories) - 50;
  const maxCalories = Math.max(...calories) + 50;
  const minSessionLength = Math.min(...durations) - 1;
  const maxSessionLength = Math.max(...durations) + 1;

  const customLabels = ['1', '2', '3', '4', '5', '6', '7'];

  const data = sessions.map((session, index) => ({
    day: customLabels[index],
    weight: session.kilogram,
    calories: session.calories,
    sessionLength: durations[index],
    score: session.score,
  }));

  const dataPie = [
    { name: 'Score', value: userMainData.score, color: '#ff0101' },
    { name: 'Score', value: 1 - userMainData.score, color: 'transparent' },
  ];

  const todayScore = userMainData.score;

  const kindLabels = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Endurance',
    4: 'Force',
    5: 'Rapidité',
    6: 'Énergie',
  };

  const performanceData = performance.map((item) => ({
    subject: kindLabels[item.kind],
    value: item.value,
  }));

  return (
    <section className="user-stats-graph">
      <div className="maingraph">
        <BarGraph
          data={data}
          minWeight={minWeight}
          maxWeight={maxWeight}
          minCalories={minCalories}
          maxCalories={maxCalories}
        />
      </div>
      <div className="secondgraph">
        <LenghtGraph
          data={data}
          minSessionLength={minSessionLength}
          maxSessionLength={maxSessionLength}
        />
        <PerfGraph performanceData={performanceData} />
        <ScoreGraph todayScore={todayScore} dataPie={dataPie} />
      </div>
    </section>
  );
};

export default StatGraph;
