import React, { useEffect, useState } from 'react';
import BarGraph from '../stats/barGraph';
import LenghtGraph from '../stats/lenghtGraph';
import PerfGraph from '../stats/perfGraph';
import ScoreGraph from '../stats/scoreGraph';
import { getUserInfo, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../apiServices.js';

const StatGraph = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [userMainData, setUserMainData] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserInfo(parseInt(userId))
      .then((userMainData) => {
        setUserMainData(userMainData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
        setUser({});
        setLoading(false);
      });
      getUserActivity(parseInt(userId))
        .then((userActivity) => {
          setUserActivity(userActivity.sessions);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
          setUser({});
          setLoading(false);
      });
      getUserAverageSessions(parseInt(userId))
      .then((userAverageSessions) => {
        setUserAverageSessions(userAverageSessions.sessions);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
        setUser({});
        setLoading(false);
      });
      getUserPerformance(parseInt(userId))
        .then((userPerformance) => {
          setUserPerformance(userPerformance.data);
          setLoading(false);
          }
          )
        .catch((error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
          setUser({});
          setLoading(false);
          }
      );
      
  }, [userId]);



  if (loading) {
    return <div>Loading...</div>;
  }


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Récupérer les données de l'utilisateur depuis l'API
  //       const userInfo = await getUserInfo(userId);
  //       const userActivityData = await getUserActivity(userId);
  //       const userAverageSessionsData = await getUserAverageSessions(userId);
  //       const userPerformanceData = await getUserPerformance(userId);
  //       console.log(userActivityData)
  //       setUserData(userInfo.userInfos);
  //       setUserMainData(userInfo);
  //       setUserActivity(userActivityData.sessions); 
  //       setUserAverageSessions(userAverageSessionsData.sessions);
  //       setUserPerformance(userPerformanceData.data);

  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
  //     }
  //   }

  //   fetchData();
  // }, [userId]);

  // Vérifier si les données sont toujours en train d'être chargées
  if ( userMainData === null || userActivity.length === 0) {
    return <div>Chargement...</div>;
  }



  const weights = userActivity.map((session) => session.kilogram);
  const calories = userActivity.map((session) => session.calories);



  const minWeight = Math.min(...weights) - 1;
  const maxWeight = Math.max(...weights) + 1;
  const minCalories = Math.min(...calories) - 50;
  const maxCalories = Math.max(...calories) + 50;

  const customLabels = ['1', '2', '3', '4', '5', '6', '7'];

  const data = userActivity.map((session, index) => ({
    day: customLabels[index],
    weight: session.kilogram,
    calories: session.calories,
    sessionLength: session.sessionLength,
    score: session.hasOwnProperty('todayscore') ? session.todayscore : session.score,
  }));

  const minSessionLength = Math.min(...userAverageSessions.map((session) => session.sessionLength)) - 1;
  const maxSessionLength = Math.max(...userAverageSessions.map((session) => session.sessionLength)) + 1;

  const dataPie = [
    { name: 'Score', value: userMainData.hasOwnProperty('todayscore') ? userMainData.todayscore : userMainData.score, color: '#ff0101' },
    { name: 'Reste', value: 1 - (userMainData.hasOwnProperty('todayscore') ? userMainData.todayscore : userMainData.score), color: 'transparent' },
  ];
  console.log(dataPie)
  

  
  const kindLabels = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Endurance',
    4: 'Force',
    5: 'Rapidité',
    6: 'Énergie',
  };

  const performanceData = userPerformance.map((performance) => ({
    subject: kindLabels[performance.kind],
    value: performance.value,
  }));

console.log(performanceData)

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
          data={userAverageSessions}
          minSessionLength={minSessionLength}
          maxSessionLength={maxSessionLength}
        />
        <PerfGraph performanceData={performanceData} />
        <ScoreGraph todayScore={userMainData.todayScore || userMainData.score} dataPie={dataPie} />

      </div>
    </section>
  );
};

export default StatGraph;