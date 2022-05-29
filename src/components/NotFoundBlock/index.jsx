import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😜</span>
        <br />
        Your Cart Is Empty
      </h1>
      <p className={styles.descr}>This page was not found</p>
    </div>
  );
};

export default NotFound;
