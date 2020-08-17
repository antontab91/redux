import React from 'react';

const Users = () => {
  const usersList = [
    { id: 89, name: 'Hop' },
    { id: 84, name: 'Hop' },
    { id: 81, name: 'Hop' },
    { id: 88, name: 'Hop' }
  ]

  return (
    <div className="users">
      <button className="users__create-btn">Create user</button>
      <ul className="users__list">
        {usersList.map((user) => {
          return (
            <li key={user.id} className="users__list-item">
              <span>User # 232286</span>
              <button className="users__delete-btn">+</button>
            </li>
          )
        })}
        {/* <li className="users__list-item">
          <span>User # 232286</span>
          <button className="users__delete-btn">+</button>
        </li>
        <li className="users__list-item">
          <span>User # 551949</span>
          <button className="users__delete-btn">+</button>
        </li>
        <li className="users__list-item">
          <span>User # 328468</span>
          <button className="users__delete-btn">+</button>
        </li> */}
      </ul>
    </div>
  )
}

export default Users;