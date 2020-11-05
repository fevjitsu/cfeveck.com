// import { createSlice } from "@reduxjs/toolkit";
// import { firebase, googleAuthProvider } from "../../db/firebase";
// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: { logged: false, data: undefined },
//   },
//   reducers: {
//     loggedIn: (state, action) => {
//       state.user.logged = action.payload = true;
//     },
//     loggedOut: (state, action) => {
//       state.user.logged = action.payload = false;
//     },

//     setUser: (state, action) => {
//       state.user.data = action.payload;
//     },
//     handleGoogleSignIn: () => {
//       firebase
//         .auth()
//         .signInWithPopup(googleAuthProvider)
//         .then((result) => {
//           // This gives you a Google Access Token.
//           // const token = result.credential.accessToken;
//           // The signed-in user info.
//           const user = result.user;
//           setUser(user);
//         })
//         .catch((e) => {
//           console.log("getting user failed");
//         });
//     },
//     handleSignOut: () => {
//       firebase.auth().signOut();
//     },
//   },
// });

// export const {
//   handleGoogleSignIn,
//   handleSignOut,
//   loggedIn,
//   loggedOut,
//   setUser,
// } = authSlice.actions;
// export const selectLogged = (state) => state.auth.user.logged;
// export const selectUser = (state) => state.auth.user.data;

// export const setUserAsync = () => (dispatch) => {
//   firebase
//     .auth()
//     .signInWithPopup(googleAuthProvider)
//     .then((result) => {
//       // This gives you a Google Access Token.
//       // const token = result.credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       dispatch(setUser(user));
//     })
//     .catch((e) => {
//       console.log("getting user failed");
//     });
// };
// export default authSlice.reducer;
