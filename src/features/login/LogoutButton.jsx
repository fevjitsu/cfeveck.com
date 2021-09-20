import React from "react";
import { useHistory } from "react-router-dom";
import { firebase } from "../../firebaseConnection/firebase";
export default function LogoutButton() {
  let history = useHistory();
  const handleLogout = async () => {
    await firebase.auth().signOut();
    history.push("/");
  };
  return (
    <button className="btn btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
}
