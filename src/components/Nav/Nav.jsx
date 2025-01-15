import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { colors } from '@mui/material';


function Nav() {
  const user = useSelector((store) => store.user);

  let history = useHistory()


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
     
  
   
  
      const handleAppointment = () => {
        history.push('/appointments')
        setAnchorEl(null);
      }
  
  
  
     
      



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
            <Link className="navHome" to="/user">
              Home
            </Link>

            <Link className="navSchedule" to="/schedule">
              Schedule
            </Link>

            <Link className="navAppointments" to="/appointments">
              Appointments
            </Link>

            <Link className="navServices" to="/services">
              Services
            </Link>
            <Link className="navAbout" to="/about">
              About
            </Link>



                 {/* <LogOutButton className="navLogOut" /> */}
            <div className='dropDownMenu'>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                
              >
              
           <AccountCircleIcon  sx={{ color: 'black' }} fontSize='large' /> 
                
            </Button>
              <div className='dropDownPlacement'>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  
                }}
               
              >
                <MenuItem onClick={handleAppointment}>Appointments</MenuItem>
                  <MenuItem className='LogoutButtonNav' onClick={handleClose}><LogOutButton/></MenuItem>
                </Menu>
              </div>
</div>
          </>
        )}



      </div>
    </div>
  );
}

export default Nav;
