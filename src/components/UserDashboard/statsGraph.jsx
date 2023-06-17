import React from 'react';
import { Bar } from 'react-chartjs-2';

const StatGraph = ({ userData }) => {
    // Récupérer les données de l'utilisateur
    const { sessions } = userData;
  
    const days = sessions.map(session => session.day);
    const weights = sessions.map(session => session.kilogram);
    const calories = sessions.map(session => session.calories);
  
    const data = {
      labels: days,
      datasets: [
        {
          label: 'Poids (kg)',
          backgroundColor: 'black',
          borderRadius: 8,
          borderWidth: 1,
          data: weights,
        },
        {
          label: 'Calories brûlées',
          backgroundColor: 'red',
          borderRadius: 8,
          borderWidth: 1,
          data: calories,
        },
      ],
    };
  
    // Options du graphique
    const options = {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    };
  
    return <Bar data={data} options={options} />;
  };
  
  export default StatGraph;