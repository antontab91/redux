import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { goNext, goPrev } from './user.actions';
import {
  usersListSelector,
  currentPageSelector,
} from "./users.selectors";

const UsersList = ({ users, goPrev, goNext, currentPage }) => {

  const totalItems = users.length;
  const itemsPerPage = 3;
  const firstIndexOnPage = currentPage * itemsPerPage;
  const lastIndexOnPage = firstIndexOnPage + itemsPerPage;

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}

      />
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
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = (dispatch) => {
  return {
    goPrev: () => { dispatch(goPrev()) },
    goNext: () => { dispatch(goNext()) },
  }
}

const connector = connect(mapState, mapDispatch);
const connectedUserList = connector(UsersList);


export default connectedUserList;