import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <div className='registerUserText'>
      <h2>Register User</h2>
    </div>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          <div className='UsernameRegisterText'>
            Username:
          </div>
          <div className='usernameRegisterField'>
            <TextField
              placeholder='username'
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <div className='RegisterPasswordText'>
            Password:
          </div>
          <TextField
            className='RegisterPasswordFeild'
            placeholder='password'
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="RegisterRegisterbtn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
