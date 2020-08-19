import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (

    <div>
      <ul className="users">
        <User />
      </ul>
    </div>
  )
}

export default UsersList;