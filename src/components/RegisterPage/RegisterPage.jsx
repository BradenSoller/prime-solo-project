import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <div className='LoginRegister'>
        <button
          type="button"
          className="btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
          >
              Login
          </button>
        </div>
          <div className='AlreadyHaveAnAccount'>
            <p>already have an account ?</p>
          
        </div>
      </center>
    </div>
  );
}

export default RegisterPage;
