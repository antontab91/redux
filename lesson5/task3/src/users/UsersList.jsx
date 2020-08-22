import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import store from '../store';

const UsersList = () => {
  return (

    <ul className="users">
      <User />
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