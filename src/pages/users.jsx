import React from 'react';
import { NavLink } from 'react-router-dom';

function Users() {
  return (
    <div className="users">
        <h2>Users</h2>
        <NavLink to="/users/12">Karl</NavLink>
        <NavLink to="/users/18">Cecilia</NavLink>
    </div>
  )
}

export default Users;