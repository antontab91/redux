import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';

// это в этой компонетнте я конкечусь к стору 

const UsersList = () => {
  const [currentPage, setPage] = useState(0);

  const goPrev = () => {
    setPage(currentPage - 1)
  }

  const goNext = () => {
    setPage(currentPage + 1)
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul>
        <User />
      </ul>
    </div>
  )
}

export default UsersList

