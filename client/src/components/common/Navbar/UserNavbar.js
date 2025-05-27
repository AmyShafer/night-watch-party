import React from 'react';
import Profile from 'pages/Profile.js';
import Movies from 'pages/Movies.js';
import Members from 'pages/Members';
import Merch from 'pages/Merch.js';
import Notifications from 'Notifications.js';

const UserNavBar = () => {
  return (
    <div className="container">
      <UserHome />
      <a href='/user' target='_blank'>Home</a>
      <Profile />
      <Movies />
      <Members />
      <Merch />
      <Notifications />
    </div>
  );
};

export default UserNavBar;