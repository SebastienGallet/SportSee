import React from 'react';
import { NavLink } from 'react-router-dom';

function Users() {
  return (
    <div className="users">
        <NavLink className="link" to="/users/12">Karl</NavLink>
        <NavLink className="link" to="/users/18">Cecilia</NavLink>
    </div>
  )
}

export default Users;