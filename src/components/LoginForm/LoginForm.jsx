import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import './LoginForm.css'
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
  
    <form className="formPanel" onSubmit={login}>
  
      <div className="LoginCSS">
      <h2>Login</h2>
    </div>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className='LoginUsername'>
        <label htmlFor="username">
          <div className='UsernameText'>
            Username:
          </div>
          <div className='UsernameFeild'>
          <TextField
            placeholder='username'
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div>
        <div className='passwordInput'>
          <label htmlFor="password">
            <div className='passwordText'>
            Password:
            </div>
            <div className='PasswordFeild'>
              <TextField
              placeholder='password'
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            
            </label></div>
      
      </div>
      
      <div>
        <input className="Registerbtn" type="submit" name="submit" value="Log In" />
        </div>
      
      </form>
      
  );
}

export default LoginForm;
