import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/home'

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
