import Pagination from 'react-js-pagination';
import React from 'react';
export default function ReactPagination ({ activePage, itemsCountPerPage, totalItemsCount, handlePageChange, ...props }) {
  const pageRange = 5;
  return (
    <div className="float-right">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={5}
        onChange={(page) => handlePageChange(page)}
        itemClass='page-item'
        linkClass='page-link'
      />
    </div>
  );
};
