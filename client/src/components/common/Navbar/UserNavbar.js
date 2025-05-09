import React from 'react';
import Profile from 'Profile.js';
import Members from 'Members.js';
import Movies from 'Movies.js';
import Notifications from 'Notifications.js';
import Merch from './page/Merch.js';

const UserHome = () => {
  return (
    <div className="container">
      <UserHome />
      <a href='/user' target='_blank'>Home</a>
      <Profile />
      <Members />
      <Movies />
      <Notifications />
      <Merch />
    </div>
  );
};

export default UserHome;