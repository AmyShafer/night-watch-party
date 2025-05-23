import React from 'react';
import Login from 'Login.js';
import About from 'About.js';
import MovieGroupHowTo from './MovieGroupHowTo.js';
import Movies from './Movies.js';

const Home = () => {
    return (
        <div className = "container">
            <Login />
            <About />
            <MovieGroupHowTo />
            <Movies />
        </div>
    );
}

export default Home;