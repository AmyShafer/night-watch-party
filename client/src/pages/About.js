import React from 'react';
import Home from 'Home.js';
import Login from 'Login.js'
import MovieGroupHowTo from 'MovieGroupHowTo.js';
import Movies from './Movies.js';

const About = () => {
    return (
        <div className="container">
          <Home />
          <Login />
          <MovieGroupHowTo />
          <Movies />
      </div>
    );
};

export default About;