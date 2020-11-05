import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import Recaptcha from "react-recaptcha";
import {
  hideContact,
  setContactUserName,
  setContactEmail,
  setContactPhone,
} from "./contactSlice";
import styles from "./Contact.module.css";
export default function Contact({ handleClose }) {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA;
  let dispatch = useDispatch();
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [approved, setApproved] = useState(false);

  const handleReset = () => {
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hey, ${name} this submission is a prop.`);
    dispatch(setContactEmail(email));
    dispatch(setContactPhone(phone));
    dispatch(setContactUserName(name));
    dispatch(hideContact());
  };

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
    </div>
  );
}
