import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import isEmail from "validator/lib/isEmail";
import database from "../../firebaseConnection/firebase";

export default function MyModal({
  openModal,
  afterOpenModal,
  closeModal,
  title = "Hi, welcome to my site.",
  subtitle = " Subscribe below and get the latest news on what's happening around here.",
  buttonText = "Add me!",
  handleSubmit,
}) {
  let [email, setEmail] = useState("");
  const portfolio = database.ref(`portfolioApp/emailList`);
  const addToEmailList = (email) => {
    portfolio
      .push({ email })
      .then(() => {
        closeModal();
      })
      .catch((e) => {
        console.log("failed::", e);
      });
  };

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <Modal
      className={styles.modal}
      isOpen={openModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal">
      <div className="d-flex justify-content-end p-2">
        <button onClick={closeModal} className={styles.button}>
          close
        </button>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h4>{subtitle}</h4>
        <form
          className={styles.container}
          onSubmit={
            handleSubmit
              ? handleSubmit
              : (e) => {
                  e.preventDefault();
                  if (isEmail(email.trim())) {
                    closeModal();
                    addToEmailList(email);
                  }
                }
          }>
          <input
            className={styles.input}
            placeholder="Enter Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input className={styles.button} type={"submit"} value={buttonText} />
        </form>
      </div>
    </Modal>
  );
}
