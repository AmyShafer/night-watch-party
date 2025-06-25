import React from 'react';
import Login from './Login.js';
import About from './About.js';

const Home = () => {
    return (
        <div className = "container">
            <Login />
            <About />
        </div>
    );
}

export default Home;