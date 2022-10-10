
import Navbar from './component/navbar'
import PostTile from './component/post-tile'

import './App.css';

function App() {
  var posts = [
    <PostTile></PostTile>,
    <PostTile></PostTile>,
    <PostTile></PostTile>,
    <PostTile></PostTile>,
    <PostTile></PostTile>,
    <PostTile></PostTile>
  ]

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">{posts}</div>
    </div>
  );
}

export default App;
