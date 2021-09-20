import React, { useEffect, useState } from "react";
import LogoutButton from "../login/LogoutButton";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { firebase } from "../../firebaseConnection/firebase";
import {
  selectDisplayName,
  selectEmail,
  setEmail,
  setDisplayName,
} from "../login/loginSlice";
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";
import styles from "./Header.module.css";
export default function Header({ title, hasSearch = false }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(true);
  const [cookies, setCookie, deleteCookie] = useCookies(["displayName"]);
  useEffect(() => {
    // set a clean up flag
    let isSubscribed = true;

    firebase.auth().onAuthStateChanged((user) => {
      if (isSubscribed) {
        if (user && user.isAnonymous) {
          setIsDisabled(true);
          setCookie("displayName", "Guest", { path: "/" });
          dispatch(setDisplayName(cookies.displayName));
        } else if (!user) {
          setIsDisabled(true);
        } else {
          setIsDisabled(false);
          if (user.displayName) {
            setCookie("displayName", user.displayName, { path: "/" });
            dispatch(setDisplayName(cookies.displayName));
          } else {
            setCookie("displayName", user.email, { path: "/" });
            dispatch(setDisplayName(cookies.displayName));
          }
        }
      }
    });

    // cancel subscription to useEffect
    return () => (isSubscribed = false);
  });
  return (
    <div className={styles.headerContainer}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        {isDisabled && (
          <p
            className={styles.headerParagraph}
            style={{ marginLeft: "5px", marginRight: "5px" }}>
            As a guest you will have limited access.
          </p>
        )}
      </div>

      <div>
        {hasSearch && <div>other stuff</div>}
        <a href="https://twitter.com/Cfeveck" className="btn">
          <TwitterIcon color="action" fontSize="large" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/fevjitsu" className="btn">
          <GitHubIcon color="action" fontSize="large" />
        </a>
        <button
          className={
            isDisabled ? "btn btn-primary disabled" : "btn btn-primary"
          }
          onClick={() => history.push("/blogs")}
          disabled={isDisabled}>
          Blog
        </button>
        <button
          className={"btn btn-primary"}
          onClick={() => history.push("/home")}>
          Home
        </button>
        <LogoutButton />
      </div>
    </div>
  );
}
