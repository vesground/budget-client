import React, { useState, useCallback } from 'react';

//Styles
import './index.scss';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = useCallback((event: any) => {
    const { value, name } = event.target;
    setValues((state: any) => ({ ...state, [name]: value }));
  }, [setValues]);

  const handleAuth = useCallback(() => {
    console.log('credentials', values)
  }, [values]);

  return (
    <p className='no'>
      <input type='email' name="email" value={values.email} onChange={handleChange}/>
      <input type='password' name="password" value={values.password} onChange={handleChange}/>
      <button onClick={handleAuth}>Sign in</button>
    </p>
  );
};

export default Login;
