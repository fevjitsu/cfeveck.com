import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";
import isEmail from "validator/lib/isEmail";
export default function MyModal({ openModal, afterOpenModal, closeModal }) {
  let [email, setEmail] = useState("");
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  useEffect(() => {
    console.log();
  }, [email]);

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
        <h1 className={styles.title}>Hi, welcome to my site.</h1>
        <h4>
          Subscribe below and get the latest news on what's happening around
          here.
        </h4>
        <form
          className={styles.container}
          onSubmit={(e) => {
            e.preventDefault();
            if (isEmail(email.trim())) {
              closeModal();
              console.log("do something::submitted");
            }
          }}>
          <input
            className={styles.input}
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input className={styles.button} type={"submit"} value="Add me!" />
        </form>
      </div>
    </Modal>
  );
}
