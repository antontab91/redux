import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import store from '../store';

const UsersList = ({ usersList }) => {
  return (

    <ul className="users">
      {
        usersList.map((user) => {
          return (
            <User key={user.id} name={user.name} age={user.age} />
          )
        })
      }
    </ul>
  )
}

const mapState = (state) => {
  return {
    filterText: state.users.filterText,
    usersList: state.users.usersList,
  }
}

const connector = connect(mapState)
const connectedUsersList = connector(UsersList);

export default connectedUsersList;

















// АЛГО
// она принимает массив пользователей
// возвращает отфильтрованный массив пользователей 