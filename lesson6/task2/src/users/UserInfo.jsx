import React from 'react';
import { connect } from 'react-redux';
import { usersSelectors } from './users.selectors';
import Spinner from './Spinner';

const UserInfo = ({ userInfo }) => {

  // if (!userInfo) {
  //   return <Spinner />
  // }

  return (
    <div className="user">
      <img alt="User Avatar" src="https://avatars0.githubusercontent.com/u/10639145?v=4" className="user__avatar" />
      <div className="user__info">
        <span className="user__name">Apple</span>
        <span className="user__location">Cupertino, CA</span>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    userInfo: usersSelectors(state),
  }
}

const connector = connect(mapState);
const connectedUserInfo = connector(UserInfo);

export default connectedUserInfo;