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



  return (
    <div className="user-dashboard">
      <UserInfo userData={userData} />
      <div className="user-stats">
          <StatGraph
          userId={userId}
          userData={userData}
          userMainData={userData}
        />
        <StatsCard userActivity={userActivity} userPerformance={userPerformance} />
      </div>
    </div>
  );
}

export default UserDashboard;
