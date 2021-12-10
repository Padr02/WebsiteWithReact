import React from "react";
import { Button } from "../Button-components/Button";
import useForm from "./useForm"; //custom hooken
import validate from "./validateForm"; // importerar errorhantering
import "./Form.css";

//plockar ut confirmForm från Form
const SignUp = ({ confirmForm }) => {
  //tar nedan från custom hooken och passar vidare validate och confirm
  const { handleChange, values, handleSubmit, error } = useForm(
    validate, //sätter värdet i useForm
    confirmForm
  );

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h1> Create your account</h1>
        <div className="signup-inputs">
          <label htmlFor="username" className="signup-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="signup-input"
            placeholder="Enter your username"
            value={values.username}
            //handleChange uppdaterar values i useForm
            onChange={handleChange}
          />
          {/* error triggas från validateForm */}
          {error.username && <p>{error.username}</p>}
        </div>
        <div className="signup-inputs">
          <label htmlFor="email" className="signup-label">
            Email
          </label>
          <input
            id="email"
            type="emal"
            name="email"
            className="signup-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="signup-inputs">
          <label htmlFor="password" className="signup-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="signup-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="signup-inputs">
          <label htmlFor="password2" className="signup-label">
            Confirm password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="signup-input"
            placeholder="Re-enter your password"
            value={values.password2}
            onChange={handleChange}
          />
          {error.password2 && <p>{error.password2}</p>}
        </div>
        <Button
          buttonStyle="button-outline"
          buttonSize="button-xxl"
          type="submit"
        >
          Sign up
        </Button>
        <span className="signup-login">
          Already have an account? Login
          <a href="http://localhost:3000/services">here</a>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
