import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAnPassAuth } from "./loginSlice";
import styles from "./Login.module.css";
export default function Login({ handleLoginWithGoogle, error = null }) {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    email.trim();
    pass.trim();
    dispatch(signInWithEmailAnPassAuth(email, pass));
  };
  return (
    <React.Fragment>
      <div className={styles.loginForms}>
        <button className="btn btn-primary" onClick={handleLoginWithGoogle}>
          login with google
        </button>
        <button className="btn btn-primary" onClick={() => setShowLogin(true)}>
          login with email
        </button>
      </div>

      {showLogin && (
        <form onSubmit={handleSubmit} className={styles.loginForms}>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className={styles.input}
            type="password"
            name="pass"
            id="pass"
            onChange={(event) => setPass(event.target.value)}
            required
          />
          <input
            className="btn btn-primary"
            type="submit"
            value="login"
            disabled={email && pass && pass.length > 6 ? false : true}
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      )}
    </React.Fragment>
  );
}
