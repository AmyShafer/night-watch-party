import React from 'react';
import About from './About.js'
import MemberHome from './MemberHome.js';
import Profile from './Profile.js';
import Members from './Members.js';
import Movies from './Movies.js';
import Merch from './Merch.js';

const Signup = () => {
    return (
        <div className = "container" >
          <About />
          <MemberHome />
          <Profile />
          <Members />
          <Movies />
          <Merch />
        </div>
    );
}

export default Signup;