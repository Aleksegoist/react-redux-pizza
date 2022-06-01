import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel='...'
        nextLabel='>'
        previousLabel='<'
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={6}
        pageCount={4}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
