// import React from "react";
// import { useDispatch } from "react-redux";
// import { Button, Container, Grid, Paper } from "@material-ui/core";
// import {
//   handleGoogleSignIn,
//   loggedIn,
//   loggedOut,
//   setUserAsync,
//   setUser,
// } from "./authSlice";
// import { useHistory } from "react-router-dom";
// import HomeIcon from "@material-ui/icons/Home";
// import styles from "./LoginLanding.module.css";
// import { firebase } from "../../db/firebase";
// export default function LoginLanding() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   firebase.auth().onAuthStateChanged((user) => {
//     try {
//       if (user) {
//         dispatch(loggedIn());
//         dispatch(setUserAsync());
//         history.push("/cookbook");
//       } else {
//         dispatch(loggedOut());
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   });
//   return (
//     <Container>
//       <Paper elevation={3} className={styles.buttonContainer}>
//         {" "}
//         <Grid
//           container
//           direction="column"
//           justify="center"
//           alignItems="center"
//           spacing={5}
//         >
//           <Grid item>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => {
//                 dispatch(handleGoogleSignIn());
//               }}
//             >
//               Login with Google
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// }
