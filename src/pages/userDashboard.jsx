import React, { useEffect, useState } from 'react';
import StatsCard from '../components/stats/statsCard';
import UserInfo from '../components/UserDashboard/userInfo';
import StatGraph from '../components/UserDashboard/statsGraph';
import { useParams } from 'react-router-dom';
import { getUserData } from '../apiServices';

function UserDashboard() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [userMainData, setUserMainData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { user, userMainData } = await getUserData(userId);
        setUserData(user);
        setUserMainData(userMainData);
      } catch (error) {
      }
    }

    fetchData();
  }, [userId]);

  if (!userData || !userMainData) {
    return <div>Loading...</div>;
  }

  if (!userData.sessions) {
    return <div>No session data available.</div>;
  }

  return (
    <div className="user-dashboard">
      <UserInfo />
      <div className='user-stats'>
        <StatGraph userData={userData} userMainData={userMainData}/>
        <StatsCard />
      </div>      
    </div>
  );
}

export default UserDashboard;
