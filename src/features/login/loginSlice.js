import { createSlice } from "@reduxjs/toolkit";
import { firebase } from "../../firebaseConnection/firebase";
export const loginSlice = createSlice({
  name: "login",
  initialState: {
    displayName: null,
    email: null,
    error: null,
    isRegistered: false,
    isGuest: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    setIsGuest: (state, action) => {
      state.isGuest = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  setDisplayName,
  setEmail,
  setIsRegistered,
  setIsGuest,
  setError,
} = loginSlice.actions;

export const selectDisplayName = (state) => state.login.displayName;
export const selectEmail = (state) => state.login.email;
export const selectIsRegistered = (state) => state.login.isRegistered;
export const selectIsGuest = (state) => state.login.isGuest;
export const selectError = (state) => state.login.error;

export const loginWithGoogleAuth = () => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((userCredential) => {
      dispatch(setEmail(userCredential.user.email));
      dispatch(setDisplayName(userCredential.user.displayName));

      sessionStorage.setItem("displayName", userCredential.user.displayName);
      sessionStorage.setItem("email", userCredential.user.email);
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
export const createUserWithEmailAnPassAuth =
  (email, password) => (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        dispatch(setEmail(userCredential.user.email));
        dispatch(setDisplayName(userCredential.user.email));

        sessionStorage.setItem("displayName", userCredential.user.email);
        sessionStorage.setItem("email", userCredential.user.email);
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
export const signInWithEmailAnPassAuth = (email, password) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      dispatch(setEmail(userCredential.user.email));
      dispatch(setDisplayName(userCredential.user.email));
      sessionStorage.setItem("displayName", userCredential.user.email);
      sessionStorage.setItem("email", userCredential.user.email);
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
export const signInWithGuestAuth = () => (dispatch) => {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      dispatch(setDisplayName("Guest"));
      dispatch(setIsGuest(true));
      sessionStorage.setItem("displayName", "Guest");
      sessionStorage.setItem("email", null);
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};

export default loginSlice.reducer;
