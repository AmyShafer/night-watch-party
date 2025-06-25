import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicNav from './components/common/Navbar/PublicNavbar.js';
import MemberNavbar from './components/common/Navbar/MemberNavbar.js';

// Public Pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Movies from './pages/Movies.js';
import MovieGroupHowTo from './pages/MovieGroupHowTo.js';
import Signup from './pages/Signup.js';

// Members Only Pages
import MemberHome from './pages/MemberHome.js';
import Profile from './pages/Profile.js';
import Members from './pages/Members.js';
import Merch from './pages/Merch.js';
import Notifications from './pages/Notifications.js';
import SendInvite from './pages/SendInvite.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      {loggedIn ? (
        <MemberNavbar onLogout={handleLogout} />
      ) : (
        <PublicNav />
      )}
      <Routes>
        {!loggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/how-to" element={<MovieGroupHowTo />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/user" element={<UserHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/members" element={<Members />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/invite" element={<SendInvite />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
