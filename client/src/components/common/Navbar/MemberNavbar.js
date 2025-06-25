import React from 'react';
import { Link } from "react-router-dom"; 
import Profile from '../../../pages/Profile.js';
import Movies from '../../../pages/Movies.js';
import Members from '../../../pages/Members';
import Merch from '../../../pages/Merch.js';
import Notifications from '../../../pages/Notifications.js';

const MemberNavBar = () => {
  return (
    <div className="container">
      <MemberHome />
      <a href='/member' target='_blank'>Home</a>
      <Profile />
      <Movies />
      <Members />
      <Merch />
      <Notifications />
    </div>
  );
};

export default MemberNavBar;