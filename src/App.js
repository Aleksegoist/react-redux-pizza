import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import './scss/app.scss';

function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='wrapper'>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home searchInput={searchInput} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
