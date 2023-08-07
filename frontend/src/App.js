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

  const createToastDOM = (text) => {
    const notifications = document.querySelector('.notifications');
    const toast = document.createElement('li');
    toast.className = `toast`;
    toast.innerHTML = `<div class="column">
                           <span>${text}</span>
                        </div>`;
    notifications.appendChild(toast);
    setTimeout(() => notifications.removeChild(notifications.firstChild), 3000);
    console.log(notifications);
  }

  return (
    <div className="App">
      <ul className="notifications"></ul>
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
        <Route path="/" element={<Books createToastDOM={createToastDOM}/>} />
        <Route path="/add" element={<Add createToastDOM={createToastDOM}/>} />
        <Route path="/update/:id" element={<Update createToastDOM={createToastDOM}/>} />
      </Routes>
    </div>
  );
}

export default App;
