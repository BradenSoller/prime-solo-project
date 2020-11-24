import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import useReduxStore from '../../hooks/useReduxStore';

const Nav = (props) => {

  const store = useReduxStore();
  console.log(store)
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {store.user.id && (
          <>
            <Link className="nav-link" to="/info">
              Info Page
            </Link>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Nav;
