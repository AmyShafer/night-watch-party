import React from 'react';
import Login from './Login.js';
import About from './About.js';
import Movies from './Movies.js';

const MovieGroupHowTo = () => {
    return (
        <div className = "container">
            <Login />
            <About />
            <Movies />
        </div>
    );
}

export default MovieGroupHowTo;