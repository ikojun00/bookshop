import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Books from './Books';
import AddBooks from './AddBooks';

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
        <Route path="/add" element={<AddBooks />} />
      </Routes>
    </div>
  );
}

export default App;
