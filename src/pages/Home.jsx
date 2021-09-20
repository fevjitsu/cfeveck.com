import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Email as EmailIcon, More as MoreIcon } from "@material-ui/icons";
import {
  selectDisplayName,
  selectEmail,
  setEmail,
  setDisplayName,
} from "../features/login/loginSlice";
import Header from "../features/header/Header";
import MyModal from "../features/modal/MyModal";
import styles from "./Pages.module.css";
export default function Home() {
  const displayName = useSelector(selectDisplayName);
  const dispatch = useDispatch();
  const [packageOneModalState, setPackageOneModalState] = useState(false);
  const [packageTwoModalState, setPackageTwoModalState] = useState(false);

  return (
    <div style={{ backgroundColor: "#f97171" }}>
      <Header title={`Welcome ${displayName} `} />
      <div className="main">
        <img
          className={styles.homeImage}
          src={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fisome.png?alt=media&token=43fc26c0-1d0f-4dc3-be84-2156d6dcafed"
          }
          alt="A pear shaped cartoon version of myself wearing a navy blue tuxedo"
        />
        <main className={styles.container}>
          <div>
            <h2>What you'll get here?</h2>
          </div>
          <div className={styles.surface}>
            <p className={styles.paragraph}>
              As a freelance software developer, I advocate implmenting on a
              serverless platform and will design your application backed by the
              power of Google's Cloud Platform. Securely deliver services to
              your clients with speed and reliability—all on Google's
              infrastructure.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>The start up package</h3>
              <img
                className={styles.cardImage}
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fweb-develoment.jpg?alt=media&token=489658aa-b008-450f-b6f7-1b232ea5fe47"
                alt="person's hands typing on laptop."
                onClick={() => setPackageOneModalState(true)}
              />
              <p>
                For those just starting and need a prototype or production build
                of your web or mobile application...
              </p>
              <div className={styles.iconsList}>
                <MoreIcon
                  color="action"
                  fontSize="large"
                  onClick={() => setPackageOneModalState(true)}
                  className={styles.icon}
                />

                <MyModal
                  title="The start up package"
                  paragraphs={[
                    "Responsive Web application development.",
                    "Mobile app (iOS and Android) development.",
                    "Prototype or production build of the application.",
                    "Application hosting.",
                    "Data storage.",
                    "Google analytics.",
                    "Up to three free revisions.",
                  ]}
                  openModal={packageOneModalState}
                  closeModal={() => setPackageOneModalState(false)}
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

                <MyModal
                  title="The big package"
                  paragraphs={[
                    "Responsive Web application development.",
                    "Mobile app (iOS and Android) development.",
                    "Prototype or production build of the application.",
                    "Application hosting.",
                    "Modifying your existing application.",
                    "Bug fixes.",
                    "Data storage.",
                    "Google analytics and support.",
                    "Up to ten free revisions.",
                    "Custom support options post-deployment.",
                  ]}
                  openModal={packageTwoModalState}
                  closeModal={() => setPackageTwoModalState(false)}
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
          <div className={styles.surface}>
            <p className={styles.paragraph}>
              Whether your business is early in its journey or well on its way
              to digital transformation, Google Cloud can help you solve your
              toughest challenges. Grow from prototype to production without
              having to think about capacity, reliability, or performance.
              Easily capture, manage, process, and visualize data with Google
              Cloud data analytics products to better understand your client
              needs.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
