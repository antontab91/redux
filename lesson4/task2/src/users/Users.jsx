import React from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser, updateUser } from './users.action'

const Users = (props) => {
  const { users } = props;

  return (
    <div className="users">
      <button className="users__create-btn">Create user</button>
      <ul className="users__list">
        {users.map((user) => {
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

const mapState = (state) => {
  return {
    users: state.users.usersList,
  }
}

const mapDispatch = (dispatch) => {
  return {
    createUser: dispatch(addUser())
  }
}

const connector = connect(mapState, mapDispatch);
const connectorUsers = connector(Users);

export default connectorUsers;