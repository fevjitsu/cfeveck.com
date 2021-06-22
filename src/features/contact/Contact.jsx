import React, { useEffect, useState } from "react";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import Modal from "react-modal";
import styles from "./Contact.module.css";
import database from "../../firebaseConnection/firebase";
export default function Contact({ handleClose }) {
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [approved, setApproved] = useState(false);
  let [messageSent, setMessageSent] = useState(false);
  const onSubmit = (token) => {};
  const handleReset = () => {
    setEmail("");
    setPhone("");
    setName("");
    setMessage("");
    handleClose();
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
        setMessageSent(true);
      })
      .then(() => {
        handleReset();
      })
      .catch((e) => {
        console.log("failed", e);
      });
  };
  const MessageSentModal = () => {
    return (
      <Modal
        className={`${styles.modal__root}`}
        isOpen={messageSent}
        onRequestClose={() => {
          setMessageSent(false);
        }}
      >
        <div>
          <h2>{`Hi ${name}, your message was sent.`}</h2>
        </div>
        <div>
          <p>
            I will do my best to response as soon as I can. In the mean time
            stay safe and enjoy your day!
          </p>
        </div>
        <div>
          <button
            className={`${styles.contact__button} ${styles.contact__button__close}`}
            onClick={() => {
              setMessageSent(false);
            }}
          >
            close
          </button>
        </div>
      </Modal>
    );
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

<<<<<<< HEAD
            <div id="recaptchaVerification">
              {/* <Recaptcha sitekey={recaptchaKey} /> */}
            </div>
=======
>>>>>>> 195bf678a96667b977a31d80c13ef121900d13ac
            <MessageSentModal />
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
