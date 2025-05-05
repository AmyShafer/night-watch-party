import React from 'react';
import UserHome from 'UserHome.js';
import Profile from 'Profile.js';
import Notifications from 'Notifications.js';
import Members from 'Members.js';
import Movies from 'Movies.js';
import Merch from 'Merch.js';

const SendInvite = () => {
    return (
        <div className = "container" >
          <UserHome />
          <Profile />
          <Notifications />
          <Members />
          <Movies />
          <Merch />
        </div>
    );
}

export default SendInvite;