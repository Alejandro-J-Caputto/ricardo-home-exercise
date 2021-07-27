import React from "react";
import { useHistory } from "react-router-dom";
import { AnyAction } from "redux";
import useInputs from "../../hooks/useInputs";
import { logIn } from "../../redux/actions/authActions";
import { Validatable } from "../../utils/customValidator";

export const LoginForm: React.FC<{
  theme: boolean;
  authDispatcher: React.Dispatch<AnyAction>;
}> = (props) => {
  const history = useHistory();
  const passwordOpts: Validatable = {
    required: true,
    minLength: 4,
    maxLength: 15,
  };
  const emailOpts: Validatable = {
    required: true,
    type: "email",
    min: 3,
  };
  const nameOpts: Validatable = {
    required: true,
    type: "string",
    min: 3,
  };

  const {
    value: name,
    isValid: nameIsValid,
    containsError: nameContainsError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    focusError: focusErrorName,
  } = useInputs(nameOpts);
  const {
    value: email,
    isValid: emailIsValid,
    containsError: emailContainsError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    focusError: focusErrorEmail,
  } = useInputs(emailOpts);

  const {
    value: password,
    isValid: passwordIsValid,
    containsError: passwordContainsError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
    focusError: focusErrorPassword,
  } = useInputs(passwordOpts);

  let formIsValid = false;
  if (passwordIsValid && emailIsValid && nameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const body = {
      name,
      email,
      isLoggedIn: true,
    };
    localStorage.setItem("user", JSON.stringify(body));
    props.authDispatcher(logIn(body));
    resetPassword();
    resetEmail();
    resetName();
    history.replace('/');
  };

  const emailInputClasses = emailContainsError && "auth__error--input";
  const nameInputClasses = nameContainsError && "auth__error--input";
  const passwordInputClasses = passwordContainsError && "auth__error--input";
  return (
    <form
      onClick={submitHandler}
      className={`auth-form auth-form--login ${props.theme && "dark"}`}
      autoComplete="off"
    >
      <div className="auth-form__head">
        <h2>Dummy Login</h2>
      </div>
      <div className="auth-form-group">
        <input
          type="name"
          className={`auth-form-group__input ${nameInputClasses}`}
          name="name"
          placeholder="Name"
          id="name"
          value={name}
          onFocus={focusErrorName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <label className="auth-form-group__label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="auth-form-group">
        <input
          type="email"
          className={`auth-form-group__input ${emailInputClasses}`}
          name="email"
          placeholder="Email Address"
          id="email"
          value={email}
          onFocus={focusErrorEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label className="auth-form-group__label" htmlFor="email">
          Email Address
        </label>
      </div>
      <div className="auth-form-group">
        <input
          type="password"
          className={`auth-form-group__input ${passwordInputClasses}`}
          name="password"
          placeholder="Password"
          id="password"
          value={password}
          onFocus={focusErrorPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        <label className="auth-form-group__label" htmlFor="password">
          Password
        </label>
      </div>
      <div className="auth-form-group">
        <button disabled={!formIsValid} className="btn btn--auth">
          Login
        </button>
      </div>
    </form>
  );
};
