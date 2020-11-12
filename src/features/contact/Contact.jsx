import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import Recaptcha from "react-recaptcha";

import styles from "./Contact.module.css";
import database from "../../db/firebase";
export default function Contact({ handleClose }) {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA;

  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [approved, setApproved] = useState(false);
  let [messageSent, setMessageSent] = useState(false);
  const handleReset = () => {
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const messageCollection = database.ref(`portfolioApp/messages`);
    messageCollection
      .push({
        name,
        email,
        phone,
      })
      .then(() => {
        handleReset();
        setMessageSent(true);
      })
      .catch((e) => {
        console.log("failed", e);
      });
  };
  useEffect(() => {
    setMessageSent(false);
  }, []);
  useEffect(() => {
    if (isEmail(email) && isMobilePhone(phone)) {
      setApproved(true);
    } else {
      setApproved(false);
    }
  }, [email, phone]);
  return (
    <div>
      <div>
        <div className={styles.button__close}>
          <div>
            {handleClose ? (
              <button
                className={`${styles.contact__button} ${styles.contact__button__close}`}
                onClick={handleClose}
              >
                Close
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              id="formName"
              type="text"
              placeholder={"Name"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            {isEmail(email) ? (
              <input
                id="formEmail"
                type="email"
                placeholder={"Email contact"}
                className={`${styles.input}`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            ) : (
              <input
                id="formEmail"
                type="email"
                placeholder={"Email"}
                value={email}
                className={`${styles.warning} ${styles.input}`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            )}

            {isMobilePhone(phone) ? (
              <input
                id="formPhone"
                type="text"
                placeholder={"Phone contact"}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={styles.input}
              />
            ) : (
              <input
                id="formPhone"
                type="text"
                placeholder={"Phone"}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={`${styles.warning}`}
              />
            )}

            <input
              id="formTextArea"
              as="textarea"
              rows="5"
              placeholder={"Message"}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <div id="recaptchaVerification">
              <Recaptcha sitekey={recaptchaKey} />
            </div>
            <div>
              {approved ? (
                <button
                  className={`${styles.contact__button} ${styles.contact__button__close}`}
                  onClick={handleSubmit}
                >
                  Send
                </button>
              ) : (
                <button
                  className={`${styles.contact__button} ${styles.contact__button__send}`}
                  onClick={handleSubmit}
                  disabled
                >
                  <strike>Send</strike>
                </button>
              )}
              <button
                className={`${styles.contact__button} ${styles.contact__button__reset}`}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {messageSent && (
        <div>
          <h2>Your message was sent!</h2>
        </div>
      )}
    </div>
  );
}
