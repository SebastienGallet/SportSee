import React from 'react';
import StatsCard from '../components/stats/statsCard';
import UserInfo from '../components/UserDashboard/userInfo';
import StatGraph from '../components/UserDashboard/statsGraph';
import userData from '../data/mockeddata.json';
import 'chart.js/auto';
import { useParams } from 'react-router-dom';

function UserDashboard() {
  const { userId } = useParams();
  const userIndex = userData.USER_ACTIVITY.findIndex(
    user => user.userId === parseInt(userId)
  );
  const user = userData.USER_ACTIVITY[userIndex];
  const userPerformance = userData.USER_PERFORMANCE[userIndex];
  const userMainData = userData.USER_MAIN_DATA[userIndex];



  user.performance = userPerformance.data;


  user.sessions.forEach((session, index) => {
    session.sessionLength = userData.USER_AVERAGE_SESSIONS[userIndex].sessions[index].sessionLength;
  });
  

  return (
    <div className="user-dashboard">
      <UserInfo />
      <div className='user-stats'>
        <StatGraph userData={user} userMainData={userMainData}/>
        <StatsCard />
      </div>      
    </div>
  );
}

export default UserDashboard;
