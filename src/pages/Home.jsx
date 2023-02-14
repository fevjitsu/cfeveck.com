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
      <section className={styles.main}>
        <article className={styles.mainLayout}>
          <div>
            <h1 className={styles.homeTitle}>Basic info about me.</h1>
            <p className={styles.homeParagraph}>
              I am a freelancing web developer and designer. I design and
              implement web apps on the Google Cloud Platform for your business
              needs. Using Google's Cloud platform allows your business to scale
              with tools and services provided by Google.
            </p>
          </div>

          <div>
            <h3>Search engine optimization.</h3>
            <p className={styles.homeParagraph}>
              Improve how your site appears on Google. Search engine
              optimization is the process of making your site better for search
              engines. It's also the job title of a person who does this i.e me.
            </p>
            <h3>Web design.</h3>
            <p className={styles.homeParagraph}>
              If you need help with creating how a client interacts with your
              product I can design mock ups that allow you to envision your
              product with its business logic.
            </p>
            <h3>Web development.</h3>
            <p className={styles.homeParagraph}>
              I will implement and deploy your application or feature using your
              tech stack or mine. This depends on what your needs are from
              development. I use Google Cloud Platform to protect your app as
              well as host it and your application will scale with your
              business' growth.
            </p>
          </div>
        </article>
      </section>
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
