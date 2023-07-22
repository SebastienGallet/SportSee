import React, { useEffect, useState } from 'react';
import StatsCard from '../components/stats/statsCard';
import UserInfo from '../components/UserDashboard/userInfo';
import StatGraph from '../components/UserDashboard/statsGraph';
import { useParams } from 'react-router-dom';
import {
  getUserInfo,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../apiServices.js';

function UserDashboard() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Récupérer les données de l'utilisateur depuis l'API
        const userInfo = await getUserInfo(userId);
        const userActivityData = await getUserActivity(userId);
        const userAverageSessionsData = await getUserAverageSessions(userId);
        const userPerformanceData = await getUserPerformance(userId);

        setUserData(userInfo.data.userInfos);
        setUserActivity(userActivityData);
        setUserAverageSessions(userAverageSessionsData);
        setUserPerformance(userPerformanceData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className="user-dashboard">
      {userData && <UserInfo userData={userData} />}
      <div className="user-stats">
        {userData && (
          <StatGraph
          userId={userId}
          userData={userData}
          userMainData={userData}
        />
        )}
        {userData && <StatsCard userActivity={userActivity} userPerformance={userPerformance} />}
      </div>
    </div>
  );
}

export default UserDashboard;
