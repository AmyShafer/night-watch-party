import React from 'react';
import MemberHome from 'MemberHome.js';
import Profile from 'Profile.js';
import SendInvite from 'SendInvite.js';
import Movies from 'Movies.js';
import Notifications from 'Notifications.js';
import Merch from 'Merch.js';

const Members = () => {
  return (
    <div className="container">
      <MemberHome />
      <Profile />
      <SendInvite />
      <Movies />
      <Notifications />
      <Merch />
    </div>
  );
};

export default Members;