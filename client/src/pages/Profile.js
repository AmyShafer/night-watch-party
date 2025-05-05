import React from 'react';
import UserHome from 'UserHome.js';
import Notifications from 'Notifications.js';
import Members from 'Members.js';
import Movies from 'Movies.js';
import Merch from 'Merch.js';

const Profile = () => {
    return (
        <div className = "container">
            <UserHome />
            <Notifications />
            <Members />
            <Movies />
            <Merch />
        </div>
    );
}

export default Profile;