import React from 'react';
import { Link } from 'react-router-dom';

const PublicNav = () => {
    return (
        <div className="container">
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
      </div>
    );
};

export default PublicNav;