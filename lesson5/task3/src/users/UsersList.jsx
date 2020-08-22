import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import store from '../store';

const UsersList = () => {
  return (
    <User />
  )
}

const mapState = (state) => {
  return {
    filterText: state.users.filterText,
    usersList: state.users.UsersList,
  }
}

const connector = connect(mapState)
const connectedUsersList = connector(UsersList);

export default connectedUsersList;

















// АЛГО
// она принимает массив пользователей
// возвращает отфильтрованный массив пользователей 