import React from 'react';
import Pagination from './Pagination';
import User from './User';

// это в этой компонетнте я конкечусь к стору 

const UsersList = ({ users, goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  return (
    <div>
      <Pagination />
      <ul>
        <User />
      </ul>
    </div>
  )
}

export default UsersList

