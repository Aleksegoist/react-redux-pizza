import React, { useState } from 'react';

const Categories = () => {
  const [indexCategory, setIndexCategory] = useState(0);

  const onClickCategory = (index) => {
    setIndexCategory(index);
  };
  return (
    <div className='categories'>
      <ul>
        <li
          onClick={() => onClickCategory(0)}
          className={indexCategory === 0 ? 'active' : ''}
        >
          All
        </li>
        <li
          onClick={() => onClickCategory(1)}
          className={indexCategory === 1 ? 'active' : ''}
        >
          Meat
        </li>
        <li
          onClick={() => onClickCategory(2)}
          className={indexCategory === 2 ? 'active' : ''}
        >
          Vegeterian
        </li>
        <li
          onClick={() => onClickCategory(3)}
          className={indexCategory === 3 ? 'active' : ''}
        >
          Cheese
        </li>
        <li
          onClick={() => onClickCategory(4)}
          className={indexCategory === 4 ? 'active' : ''}
        >
          Grill
        </li>
        <li
          onClick={() => onClickCategory(5)}
          className={indexCategory === 5 ? 'active' : ''}
        >
          Spicy
        </li>
      </ul>
    </div>
  );
};

export default Categories;
