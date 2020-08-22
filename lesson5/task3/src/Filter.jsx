import React from 'react';
import { connect } from 'react-redux';
import { handleChange } from './users/users.reducer';

const Filter = ({ filterText, onChange, count }) => {

  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input onChange={onChange} type="text" className="filter__input" value={filterText} />
    </div>
  )
}

const mapState = (state) => {

  return {
    filterText: state.users.filterText,
    usersList: state.users.usersList,
    count: state.users.usersList.length,
  }
}

const mapDispatch = {
  onChange: handleChange,
}

const connector = connect(mapState, mapDispatch);
const connectedFiler = connector(Filter);

export default connectedFiler;