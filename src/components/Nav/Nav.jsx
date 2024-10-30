import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);

  let history = useHistory()



 

  return (
    <div className="nav">
      <Button
        type='button'
        onClick={() => {
          history.push('/login');
        }}>
        <img height={93} src="/yb-logo.jpg" />
      </Button>
      <Link to="/home">
        <h2 className="nav-title"></h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
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

          <Link className="navLink" to="/login">
            Login / Register
          </Link>
          </>
          

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
