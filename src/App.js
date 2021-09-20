import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Login from "./features/login/Login";
import {
  loginWithGoogleAuth,
  createUserWithEmailAnPassAuth,
  selectIsRegistered,
  selectError,
  setDisplayName,
  setEmail,
} from "./features/login/loginSlice";
import Register from "./features/login/Register";
import { firebase } from "./firebaseConnection/firebase";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const asyncDispatch = useCallback(dispatch, []);
  const isRegistered = useSelector(selectIsRegistered);
  const error = "";
  // useSelector(selectError);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/home");
      } else {
        history.push("/");
      }
    });
  });

  return (
    <React.Fragment>
      {isRegistered ? (
        <main className="main">
          <Login
            error={error}
            handleLoginWithGoogle={() => asyncDispatch(loginWithGoogleAuth())}
          />
        </main>
      ) : (
        <main className="main">
          <Register
            error={error}
            createUserWithEmailAnPassAuth={createUserWithEmailAnPassAuth}
          />
        </main>
      )}
    </React.Fragment>
  );
}
