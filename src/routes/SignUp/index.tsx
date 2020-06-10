import React, { useState, useCallback } from 'react';

//Styles
import './index.scss';

function SignUp() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    repeatPassword: ''
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
      <input type='password' name="password" value={values.repeatPassword} onChange={handleChange}/>
      <button onClick={handleAuth}>Sign up</button>
    </p>
  );
};

export default SignUp;
