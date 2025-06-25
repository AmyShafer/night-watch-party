import React from 'react';
import MemberHome from './MemberHome.js';
import Notifications from './Notifications.js';
import Members from './Members.js';
import Movies from './Movies.js';
import Merch from './Merch.js';

const Profile = () => {
    return (
        <div className = "container">
            <MemberHome />
            <Notifications />
            <Members />
            <Movies />
            <Merch />
        </div>
    );
}

export default Profile;