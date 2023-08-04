import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Books from './Books';
import Add from './Add';
import Update from './Update';

function App() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="App">
      <nav>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className={`hamburger-line ${mobileMenuVisible ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuVisible ? 'active' : ''}`}></div>
          <div className={`hamburger-line ${mobileMenuVisible ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${mobileMenuVisible ? 'visible' : ''}`}>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/add">Add Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
