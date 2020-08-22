import React from 'react';
import { connect } from 'react-redux';

const Filter = ({ filterText }) => {
  return (
    <div className="filter">
      <span className="filter__count">5</span>
      <input type="text" className="filter__input" value={filterText} />
    </div>
  )
}

const mapState = (state) => {
  return {
    filterText: state.users.filterText,
    usersList: state.users.UsersList,
  }
}

const connector = connect(mapState);
const connectedFiler = connector(Filter);

export default connectedFiler;