import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getUserInfo } from '../apiServices.js';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const user12 = await getUserInfo(12);
      const user18 = await getUserInfo(18);

      setUsers([user12, user18]);
    };

    fetchUsers();
  }, []);


  return (
    <div className="users">
      {users.map((user) => (
        <NavLink key={user.data.id} className="link" to={`/users/${user.data.id}`}>
          {user.data.userInfos.firstName}
        </NavLink>
      ))}
    </div>
  );
}

export default Users;
