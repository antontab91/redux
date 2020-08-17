import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';

// это в этой компонетнте я конкечусь к стору 

const UsersList = ({ users }) => {
  const [currentPage, setPage] = useState(0);

  const itemsPerPage = 3;
  const totalItems = users.length
  const goPrev = () => {
    setPage(currentPage - 1)
  }
  const goNext = () => {
    setPage(currentPage + 1)
  }

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

export default UsersList

