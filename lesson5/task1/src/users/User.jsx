import React from 'react';

const User = ({ name, age }) => {
  return (
    <li className="user">
      <span className="user__name">Bob</span>
      <span className="user__age">21</span>
    </li>
  )
}

export default User;