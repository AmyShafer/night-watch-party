import React from 'react';
import MemberHome from './MemberHome.js';
import Profile from './Profile.js';
import Notifications from './Notifications.js';
import Members from './Members.js';
import Merch from './Merch.js';

const Movies = () => {
    return (
        <div className = "container">
            <MemberHome />
            <Profile />
            <Notifications />
            <Members />
            <Movies />
            <Merch />
        </div>
    );
}

export default Movies;