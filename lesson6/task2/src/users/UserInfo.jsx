import React from 'react';
import { connect } from 'react-redux';
import * as usersSelectors from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userData, isFetching }) => {

  if (!userData) {
    return null
  }
  if (isFetching) {
    return <Spinner />
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    userData: usersSelectors.selectUserData(state),
    isFetching: usersSelectors.selectIsFetching(state),
  }
}

const connector = connect(mapState);
const connectedUserInfo = connector(UserInfo);

export default connectedUserInfo;