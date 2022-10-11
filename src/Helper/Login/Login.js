import React, { useEffect, useState } from 'react';

import Card from '../Wrapper/UI/Card/Card';
import classes from './Login.module.css';
import Button from '../Wrapper/UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("RUN Everytime"); // Run every time when this componenent will update.but if we pass blank [] depenedany then it will run only once component mount time.
  });

  useEffect(() => {
    const identifire = setTimeout(() => {
      console.log("Checking from Validity....");
      setFormIsValid( //  this called side effect function, because this will run after state update inside useEffect.
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500)

    // We can also return function like anonymous arrow funtion.this is known as cleanup
    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifire); // clear the last timer,
    } // this function will run before setFormIsValid in next time. when ever useEffect called and run setFormIsValid
    // cleanup funtion will run before next sideeffect function (setFormIsValid) except firsttime.

  }, [enteredEmail, enteredPassword]);// Without adding dependancy/[] in useEffect it run only once on page load/ or component mount time.
  // When we add dependancy in useEffect, that means useEffect will run each time when dependancy will update.
  // Rerun when dependancy will change.
  // useEffect will not working incase of, http request, local storage, timer, instead we are updating the state.
  //

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
