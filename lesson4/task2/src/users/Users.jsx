import React from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from './users.action'

const Users = ({ users, createUser, deleteUser }) => {

  const onCreateUser = () => {
    const id = Math.round(Math.random() * 100000);
    const newUser = {
      id,
      name: "User",
    }
    createUser(newUser)
  }

  return (
    <div className="users">
      <button onClick={() => onCreateUser()} className="users__create-btn">Create user</button>
      <ul className="users__list">
        {
          users.map((user) => {
            return (
              <li className="users__list-item" key={user.id}>
                <span>{`${user.name} # ${user.id}`}</span>
                <button
                  className="users__delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  +
            </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}



const mapState = state => {
  return {
    users: state.users.usersList,
  }
}

// const mapDispatch = {
//   createUser: addUser,
//   deleteUser: removeUser,
// };
const mapDispatch = (dispatch) => {
  return {
    createUser: (user) => dispatch(addUser(user)),
    deleteUser: (id) => dispatch(removeUser(id)),
  }
};

const connector = connect(mapState, mapDispatch);
const connectedUsers = connector(Users);

export default connectedUsers;

