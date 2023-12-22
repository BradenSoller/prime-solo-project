import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <img height={93} src="/yb-logo.jpg"/>
      <Link to="/home">
        <h2 className="nav-title"></h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/schedule">
              Schedule
            </Link>
            
            <Link className="navLink" to="/appointments">
              Appointments
            </Link>

            <Link className="navLink" to="/services">
              Services
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>

         

            <LogOutButton className="navLink" />
          </>
        )}

       
      </div>
    </div>
  );
}

export default Nav;
