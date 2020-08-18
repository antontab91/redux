import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {

  const isPrevPageAvailable = (currentPage + 1) !== 1;
  const isNextPageAvailable = (currentPage + 1) * 3 < totalItems;

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn">{isPrevPageAvailable ? "←" : ""}</button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button onClick={goNext} className="btn">{isNextPageAvailable ? "→" : ""}</button>
    </div>
  )
}

export default Pagination;