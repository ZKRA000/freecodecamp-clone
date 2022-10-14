import Header from './component/header'
import Footer from './component/footer'
import Home from './pages/home'
import Posts from './pages/posts'

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/posts' element={<Posts />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
