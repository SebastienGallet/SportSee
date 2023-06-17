import React from 'react';
import { useParams } from 'react-router-dom';
import mockedData from '../../data/mockeddata.json';
import { useEffect, useState } from 'react';

function UserInfo() {
    const { userId } = useParams(); 
    // React-router-dom pour récupérer le paramètre d'identifiant de l'utilisateur
  
    const [user, setUser] = useState({});
  
    // Utiliser les données importées pour récupérer les informations de l'utilisateur
    const userData = mockedData.USER_MAIN_DATA.find((item) => item.id === parseInt(userId));
  
    // Mettre à jour l'état de l'utilisateur avec les données récupérées
    useEffect(() => {
      setUser(userData);
    }, [userData]);

  return (
    <div className='user-infos'>
        <h2>Bonjour <span className='firstname'>{user.userInfos?.firstName}</span></h2>
        <p className='congrats'>Felicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
  )
}

export default UserInfo;