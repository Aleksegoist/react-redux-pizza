import React, { useState } from 'react';

const Categories = () => {
  const [indexCategory, setIndexCategory] = useState(0);

  const category = ['All', 'Meat', 'Vegeterian', 'Cheese', 'Grill', 'Spicy'];

  const onClickCategory = (index) => {
    setIndexCategory(index);
  };

  return (
    <div className='categories'>
      <ul>
        {category.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={indexCategory === index ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
