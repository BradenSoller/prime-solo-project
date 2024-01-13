import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <div className='register'>
        <button
          type="button"
          className=" btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
          </button>
        </div>
      </center>
      <div className='registerText'>
        <p>Don't have an account ?</p>
      </div>
    </div>
  );
}

export default LoginPage;
