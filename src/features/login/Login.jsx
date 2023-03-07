import React, { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useCookies } from "react-cookie";
import styles from "./Login.module.css";

export default function Login() {
  const [cookies, setCookie] = useCookies(["displayName", "email", "photoURL"]);
  const auth = getAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [showLoginButtons, setShowLoginButtons] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPass)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) history.push("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleLoginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((credientials) => {
      let { user } = credientials;
      console.log(user);
      if (user) {
        history.push("/home");
        setCookie("displayName", user.displayName, {
          path: "/",
          maxAge: 160000,
        });
        setCookie("email", user.email, { path: "/", maxAge: 160000 });
        setCookie("photoURL", user.photoURL, { path: "/", maxAge: 160000 });
        dispatch(setDisplayName(cookies.displayName));
        dispatch(setEmail(cookies.email));
        dispatch(setPhotoUrl(cookies.photoURL));
      }
    });
  };
  const handleGuestLogin = () => {
    signInAnonymously(auth)
      .then((result) => {
        if (result.user.isAnonymous) history.push("/home");
        setCookie("displayName", "Guest user", {
          path: "/",
          maxAge: 160000,
        });
        setCookie(
          "photoURL",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FguestUserImage.png?alt=media&token=d125dbd6-24d5-43c0-9ff5-05c11685c909",
          { path: "/", maxAge: 160000 }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const loginWithEmail = (event) => {
    event.preventDefault();
    loginEmail.trim();
    loginPass.trim();
    signInWithEmailAndPassword(auth, loginEmail, loginPass)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) history.push("/home");
        setCookie("displayName", user.email, {
          path: "/",
          maxAge: 160000,
        });
        setCookie(
          "photoURL",
          "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2FEmailUserIcon.png?alt=media&token=a7d8f428-159b-4af9-aacf-7d60a7230d0c",
          { path: "/", maxAge: 160000 }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  const handleShowSignUp = () => {
    setShowRegister(true);
    setShowLogin(false);
  };
  const handleBackButton = () => {
    setShowRegister(false);
    setShowLogin(false);
  };
  useEffect(() => {
    if (showRegister || showLogin) {
      setShowLoginButtons(false);
    } else {
      setShowLoginButtons(true);
    }
  }, [showLogin, showRegister, showLoginButtons]);
  return (
    <div id={styles.loginContainer}>
      {showLoginButtons && (
        <div id={styles.loginButtonContainer}>
          <button
            className={styles.loginButtonPrimary}
            onClick={handleLoginWithGoogle}>
            <span className={styles.loginButtonIcon}>
              <img
                src="https://img.icons8.com/fluency/40/000000/google-logo.png"
                alt="login with google"
              />
            </span>
            &nbsp;
            <span className={styles.loginButtonText}>sign in using google</span>
          </button>
          {/* <br />
          <button
            className={styles.loginButtonSecondary}
            onClick={handleShowLogin}>
            <span className={styles.loginButtonIcon}>
              <img
                src="https://img.icons8.com/external-bearicons-outline-color-bearicons/40/000000/external-sign-in-call-to-action-bearicons-outline-color-bearicons.png"
                alt="sign in"
              />
            </span>
            &nbsp;
            <span className={styles.loginButtonText}>sign in</span>
          </button> */}
          {/* <br />
          <button
            className={styles.loginButtonSecondary}
            onClick={handleShowSignUp}>
            <span className={styles.loginButtonIcon}>
              <img
                src="https://img.icons8.com/external-bearicons-outline-color-bearicons/40/000000/external-sign-up-call-to-action-bearicons-outline-color-bearicons-2.png"
                alt="sign up"
              />
            </span>
            &nbsp;
            <span className={styles.loginButtonText}>sign up</span>
          </button> */}
          <br />
          <button onClick={handleGuestLogin}>
            <span className={styles.loginButtonIcon}>
              <img
                src="https://img.icons8.com/material-outlined/40/000000/guest-male.png"
                alt="login as guest"
              />
            </span>
            &nbsp;
            <span className={styles.loginButtonText}>login as guest</span>
          </button>
          <br />
        </div>
      )}
      {showLogin && (
        <form onSubmit={loginWithEmail} className={styles.loginForms}>
          <input
            className={styles.input}
            type="email"
            id="loginEmail"
            placeholder="login with your email"
            onChange={(event) => setLoginEmail(event.target.value)}
            value={loginEmail}
            required
          />
          <input
            className={styles.input}
            type="password"
            id="loginPass"
            placeholder="login with your password"
            onChange={(event) => setLoginPass(event.target.value)}
            value={loginPass}
            required
          />
          &nbsp;
          <button type="submit" className={styles.loginButtonPrimary}>
            <span className={styles.loginButtonText}>sign in</span>
          </button>
          &nbsp;
          <button onClick={handleBackButton}>
            <span className={styles.loginButtonText}>back</span>
          </button>
        </form>
      )}
      {showRegister && (
        <form onSubmit={handleSignUp} className={styles.loginForms}>
          <input
            className={styles.input}
            type="email"
            id="registerEmail"
            placeholder="login with your email"
            onChange={(event) => setRegisterEmail(event.target.value)}
            value={registerEmail}
            required
          />
          <input
            className={styles.input}
            type="password"
            id="registerPass"
            placeholder="login with your password"
            onChange={(event) => setRegisterPass(event.target.value)}
            value={registerPass}
            required
          />
          &nbsp;
          <button type="submit" className={styles.loginButtonPrimary}>
            <span className={styles.loginButtonText}>sign up</span>
          </button>
          &nbsp;
          <button onClick={handleBackButton}>
            <span className={styles.loginButtonText}>back</span>
          </button>
        </form>
      )}
    </div>
  );
}
