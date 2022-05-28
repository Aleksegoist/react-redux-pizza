import React from 'react';

const Header = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div class='header__logo'>
          <img width='38' src='./img/pizza-logo.svg' alt='Pizza logo' />
          <div>
            <h1>kakish Pizza</h1>
            <p>Пицца, как пицца, ничего особенного</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
