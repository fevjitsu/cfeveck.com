import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Email as EmailIcon, More as MoreIcon } from "@material-ui/icons";
import { selectDisplayName } from "../features/login/loginSlice";
import Header from "../features/header/Header";
import MyModal from "../features/modal/MyModal";
import styles from "./Pages.module.css";
import { useCookies } from "react-cookie";
export default function Home() {
  const [cookies, setCookie] = useCookies(["displayName", "email", "photoURL"]);
  const displayName = useSelector(selectDisplayName) ?? cookies.displayName;
  const [packageOneModalState, setPackageOneModalState] = useState(false);
  const [packageTwoModalState, setPackageTwoModalState] = useState(false);

  return (
    <div>
      <Header title={`Welcome ${displayName} `} />
      <div>
        <img
          className={styles.homeImage}
          src={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fisome.png?alt=media&token=43fc26c0-1d0f-4dc3-be84-2156d6dcafed"
          }
          alt="A pear shaped cartoon version of myself wearing a navy blue tuxedo"
        />
        <main>
          <div>
            <h2>What you'll get here?</h2>
          </div>
          <div className={styles.surface}>
            <p className={styles.paragraph}></p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>The start up package</h3>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fweb-develoment.jpg?alt=media&token=489658aa-b008-450f-b6f7-1b232ea5fe47"
                alt="person's hands typing on laptop."
                onClick={() => setPackageOneModalState(true)}
              />
              <p>
                For those just starting and need a prototype or production build
                of your web or mobile application...
              </p>
              <div>
                <MoreIcon
                  color="action"
                  fontSize="large"
                  onClick={() => setPackageOneModalState(true)}
                  className={styles.icon}
                />

                <a href="mailto:christopher.feveck@gmail.com?subject=The start up package">
                  <EmailIcon
                    color="action"
                    fontSize="large"
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h3>The big package</h3>
              <img
                className={styles.cardImage}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fcoding.jpg?alt=media&token=7fd85228-7984-4a01-ac88-343c0aa00e8d"
                alt="computer screen with programming text"
                onClick={() => setPackageTwoModalState(true)}
              />
              <p>
                For those who already have a rockstar application but need more
                out of it as it grows...
              </p>
              <div className={styles.iconsList}>
                <MoreIcon
                  color="action"
                  fontSize="large"
                  onClick={() => setPackageTwoModalState(true)}
                  className={styles.icon}
                />

                <a href="mailto:christopher.feveck@gmail.com?subject=The big package">
                  <EmailIcon
                    color="action"
                    fontSize="large"
                    className={styles.icon}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.surface}></div>
        </main>
      </div>
    </div>
  );
}
