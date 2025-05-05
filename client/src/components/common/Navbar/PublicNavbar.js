import React from 'react';
import Home from 'Home.js';
import Login from 'Login.js';

const PublicNav = () => {
    return (
        <div className="container">
          <Home />
          <Login />
          <MovieGroupHowTo />
          <Movies />
      </div>
    );
};

export default PublicNav;