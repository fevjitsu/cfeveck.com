import React from "react";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Login.module.css";
export default function LogoutButton() {
  let history = useHistory();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        history.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <button onClick={handleLogout}>
        <span> Logout</span>
      </button>
    </div>
  );
}
