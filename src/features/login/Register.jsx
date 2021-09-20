import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsRegistered, signInWithGuestAuth } from "./loginSlice";
import styles from "./Login.module.css";
export default function Register({
  createUserWithEmailAnPassAuth,
  error = null,
}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    email.trim();
    pass.trim();
    dispatch(createUserWithEmailAnPassAuth(email, pass));
  };

  return (
    <div className="d-flex flex-column">
      <form onSubmit={handleSubmit} className={styles.loginForms}>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Sign up using your email"
        />
        <input
          className={styles.input}
          type="password"
          name="pass"
          id="pass"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          required
          placeholder="Create your password (must be more than 6 characters)"
        />
        <input
          className="btn btn-primary"
          type="submit"
          value="Sign up"
          disabled={email && pass && pass.length > 6 ? false : true}
        />

        <button
          className="btn btn-primary"
          onClick={() => dispatch(setIsRegistered(true))}>
          Registered?
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(signInWithGuestAuth())}>
          Guest user
        </button>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
}
