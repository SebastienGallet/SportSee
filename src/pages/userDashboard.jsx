import React from 'react';
import StatsCard from '../components/UserDashboard/statsCard';
import UserInfo from '../components/UserDashboard/userInfo';
import StatGraph from '../components/UserDashboard/statsGraph';
import userData from '../data/mockeddata.json';
import 'chart.js/auto';

function UserDashboard() {
  const userIndex = 0;
  const user = userData.USER_ACTIVITY[userIndex];

  return (
    <div className="user-dashboard">
      <UserInfo />
      <div className='user-stats'>
        <section className='user-stats-graph'>
          <StatGraph userData={user} />
        </section>
        <StatsCard />
      </div>      
    </div>
  );
}

export default UserDashboard;
