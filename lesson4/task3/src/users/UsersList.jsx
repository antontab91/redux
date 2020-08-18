import React from 'react';
import Pagination from './Pagination';
import User from './User';
import { connect } from 'react-redux';
import { goNext, goPrev } from './user.actions';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {

  const itemsPerPage = 3;
  const totalItems = users.length
  const firstIndexOnCurrentPage = currentPage * itemsPerPage; //0*3 = 0 первый индекс на первой странице, 1*3 =3 первый индекс на второй странице ... и тд . и так на каждой текущей странице 
  const lastIndexOnCurrentPage = firstIndexOnCurrentPage + 3; // +3 к каждому первому индексу = последний индекс текущей страницы 

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}

      />
      <ul>
        {
          users.slice(firstIndexOnCurrentPage, lastIndexOnCurrentPage).map((user) => {
            return (
              <User key={user.id} name={user.name} age={user.age} />
            )
          })
        }
      </ul>
    </div>
  )
}

const mapState = state => {
  return {
    users: state.usersList,
    currentPage: state.currentPage,
  }
};
const mapDispatch = (dispatch) => {
  return {
    goNext: () => { dispatch(goNext()) },
    goPrev: () => { dispatch(goPrev()) }
  }
};

// const mapDispatch = {
//   goNext,
//   goPrev
// };

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;

