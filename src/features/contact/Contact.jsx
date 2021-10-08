import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import styles from "./Contact.module.css";
import { collection, addDoc } from "firebase/firestore";
import firestore from "../../firebaseConnection/firebase";

export default function Contact({ handleClose }) {
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
    handleClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add a new document with a generated id.
    const docRef = async () =>
      await addDoc(collection(firestore, "contact"), {
        name,
        email,
        phone,
        message,
      });
    docRef()
      .then(() => {
        setMessageSent(true);
        handleClose();
      })
      .catch((err) => {
        setMessageSent(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (
      isEmail(email)
      // && isMobilePhone(phone)
    ) {
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
                // className={`${styles.contact__button} ${styles.contact__button__close}`}
                className={styles.contactCloseButton}
                onClick={handleClose}>
                Close
              </button>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit} className={styles.contactMeForm}>
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
              rows={"3"}
              placeholder={"Message"}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <div>
              {approved ? (
                <button
                  // className={`${styles.contact__button} ${styles.contact__button__close}`}
                  className={styles.sendContactButton}
                  onClick={handleSubmit}>
                  Send
                </button>
              ) : (
                <button
                  // className={`${styles.contact__button} ${styles.contact__button__send}`}
                  className={styles.sendContactButton}
                  onClick={handleSubmit}
                  disabled>
                  <strike>Send</strike>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
