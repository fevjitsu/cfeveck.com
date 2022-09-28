import React, { useEffect } from "react";
import NavigationMenu from "../features/navigationMenu/NavigationMenu";
import { useCookies } from "react-cookie";
import { CssBaseline } from "@material-ui/core";
import styles from "./Pages.module.css";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import FadeIn from "react-fade-in";
export default function Home() {
  const auth = getAuth();
  const history = useHistory();
  const [cookies] = useCookies(["displayName", "email", "photoURL"]);
  const getFirstName = (fullname = "Guest user") => {
    const name = fullname?.split(" ");
    return name[0];
  };

  const Main = () => {
    return (
      <div className={styles.main}>
        <div>
          <FadeIn delay={500}>
            <h1 className={styles.homeTitle}>Explore</h1>
          </FadeIn>
        </div>
        <div className={styles.subMain}>
          <div>
            <FadeIn delay={500}>
              <p className={styles.homeParagraph}>About Me</p>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={500}>
              <p className={styles.homeParagraph}>Activities</p>
            </FadeIn>
          </div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, [auth, history]);
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationMenu
        title={`Welcome, ${getFirstName(cookies.displayName)}.`}
      />
      <Main />
    </React.Fragment>
  );
}
