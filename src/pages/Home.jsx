import React, { useEffect } from "react";
import Header from "../features/header/Header";
import { useCookies } from "react-cookie";
import { CssBaseline } from "@material-ui/core";
import styles from "./Pages.module.css";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
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
          <h1 className={styles.homeTitle}>
            Hi, I'm Chris a freelance web developer.
          </h1>
          <p className={styles.homeParagraph}>
            As a web developer, I advocate implmenting on a serverless platform
            and will design your application backed by the power of Google's
            Cloud Platform. Securely deliver services to your clients with speed
            and reliability—all on Google's infrastructure.
          </p>

          <p className={styles.homeParagraph}>
            Whether your business is early in its journey or well on its way to
            digital transformation, Google Cloud can help you solve your
            toughest challenges. Grow from prototype to production without
            having to think about capacity, reliability, or performance. Easily
            capture, manage, process, and visualize data with Google Cloud data
            analytics products to better understand your client needs.
          </p>
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
      <Header title={`Welcome, ${getFirstName(cookies.displayName)}.`} />
      <Main />
    </React.Fragment>
  );
}
