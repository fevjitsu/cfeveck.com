import React, { useEffect } from "react";
import NavMenu from "../features/header/NavMenu";
import { useCookies } from "react-cookie";
import { CssBaseline } from "@material-ui/core";
import styles from "./Pages.module.css";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
// import { Fade } from "@mui/material";
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
            <div className={styles.mainBoxLayout}>
              <div>
                {/* <Fade in={true} appear={false}> */}
                <h1>About Me.</h1>
                {/* </Fade> */}
                {/* <Fade> */}
                <p>
                  I am a freelancing web developer and designer. I design and
                  implement web apps on the Google Cloud Platform for your
                  business needs. Using Google's Cloud platform allows your
                  business to scale with tools and services provided by Google.
                </p>
                {/* </Fade> */}
              </div>
              <hr />
              <div className={styles.mainBoxLayoutUL}>
                <div>
                  <h3>Search engine optimization.</h3>
                  <ul>
                    <li>Improve how your site appears on Google.</li>
                    <li>
                      Search engine optimization is the process of making your
                      site better for search engines.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Web Design.</h3>
                  <ul>
                    <li>
                      Customize how your client interacts with your online
                      product by creating a workflow that works for your
                      business.
                    </li>
                    <li>
                      Design mock ups that allow you to envision your product.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Web Development.</h3>
                  <ul>
                    <li>
                      I will implement and deploy your application or feature
                      using Microsoft's Azure or Google's Cloud Platform.
                    </li>
                    <li>
                      Scale your operations based on your business criteria. If
                      you need more computing power for the holidays then scale
                      up. When you need to you can scale down. Think of how cost
                      effective this will be.
                    </li>
                    <li>
                      Protect your application with cloud based security that
                      way you can focus on creating new features or promotions
                      for your application.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
      <NavMenu title={`Welcome, ${getFirstName(cookies.displayName)}.`} />
      <Main />
    </React.Fragment>
  );
}
