import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext }) => {
  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn">{"←"}</button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} className="btn">{"→"}</button>
    </div>
  )
}

export default Pagination;