import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import './scss/app.scss';
import { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice';


export const SearchContext = createContext('')

function App() {
  const [searchInput, setSearchInput] = useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='wrapper'>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      {/* 
      <SearchContext.Provider value={{ searchInput, setSearchInput }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
