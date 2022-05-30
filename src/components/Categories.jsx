import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const category = ['All', 'Meat', 'Vegeterian', 'Cheese', 'Grill', 'Spicy'];

  return (
    <div className='categories'>
      <ul>
        {category.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
