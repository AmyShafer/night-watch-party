import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider }  from 'react-redux';

import client from './apolloClient'  // Apollo client config
import store from './utils/store'; // Redux store

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Movies from './pages/Movies';
import MovieGroupHowTo from './pages/MovieGroupHowTo';

// Members Only Pages
import UserHome from './pages/UserHome';
import Profile from './pages/Profile';
import Members from './pages/Members';
import Movies from './pages/Movies';
import Merch from './pages/Merch';
import Notifications from './pages/Notifications';

function PrivateRoute({children }) {
  const loggedIn = userSelector((state) => state.auth.loggedIn);
  return loggedIn ? children : <Navigate to="/login" />;
}

function PublicApp() {
  return {
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login"> element={<Login />} />
        <Route path="/movies"> element={<Movies />} />
        <Route path="MovieGroupHowTo" element={<MovieGroupHowTo />} />
  </>
  );
}

function 

export default App;