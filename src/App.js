import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import './scss/app.scss';
import { createContext } from 'react';

export const SearchContext = createContext('')

function App() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
