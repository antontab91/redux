
import React from "react";

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage + 1 !== 1;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={goPrev}
        disabled={!isPrevPageAvailable}
      >
        {isPrevPageAvailable && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={!isNextPageAvailable}
      >
        {isNextPageAvailable && "→"}
      </button>
    </div>
  );
};

export default Pagination;