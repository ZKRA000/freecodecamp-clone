
import Navbar from './component/navbar'
import Home from './pages/home'

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // var posts = [
  //   <PostTile></PostTile>,
  //   <PostTile></PostTile>,
  //   <PostTile></PostTile>,
  //   <PostTile></PostTile>,
  //   <PostTile></PostTile>,
  //   <PostTile></PostTile>
  // ]

  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
