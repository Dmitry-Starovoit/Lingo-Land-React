import React, { useState, useEffect } from "react";

import "./Login.css";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(inputEmail.includes("@") && inputPassword.trim().length > 7);
  }, [inputEmail, inputPassword]);

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputEmail, inputPassword);
  };

  return (
    <form className="login" onSubmit={submitHandler}>
      <h2>Log in</h2>

      <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={inputEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div className={`control ${passwordIsValid === false ? "invalid" : ""}`}>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          value={inputPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <div className="actions">
        <button type="submit" className="btn" disabled={!formIsValid}>
          Вхід
        </button>
      </div>
    </form>
  );
};

export default Login;
