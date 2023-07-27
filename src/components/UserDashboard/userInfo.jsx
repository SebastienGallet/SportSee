import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../apiServices'; // Import the API function

function UserInfo() {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserInfo(parseInt(userId))
            .then((userData) => setUser(userData))
            .catch((error) => {
                console.error('Error fetching user data:', error);
                setUser({});
            });
    }, [userId]);
    
    return (
        <div className='user-infos'>
            <h2>Bonjour <span className='firstname'>{user.userInfos?.firstName}</span></h2>
            <p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default UserInfo;
