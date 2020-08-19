import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goNext, goPrev } from './user.actions';

const UsersList = ({ users, goPrev, goNext, currentPage }) => {

  const totalItems = users.length;
  const itemsPerPage = 3;
  const firstIndexOnPage = currentPage * itemsPerPage;
  const lastIndexOnPage = firstIndexOnPage + itemsPerPage;

  return (
    <div>
      <Pagination />
      <ul className="users">

        {
          users.slice(firstIndexOnPage, lastIndexOnPage)
            .map((user) => {
              return <User key={user.id} name={user.name} age={user.age} />
            })
        }

      </ul>
    </div>
  )
}


const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.currentPage,
  }
}

const mapDispatch = (dispatch) => {
  return {
    goPrev: () => { dispatch(goPrev()) },
    goNext: () => { dispatch(goNext()) },
  }
}

const connector = connect(mapState, mapDispatch);
const connectedUserList = connector(UsersList);


export default connectedUserList;