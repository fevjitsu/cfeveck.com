import React, { useEffect } from "react";
import Modal from "react-modal";
import { Email as EmailIcon } from "@material-ui/icons";
import styles from "./Modal.module.css";

export default function MyModal({
  openModal,
  afterOpenModal,
  closeModal,
  title,
  subtitle = "Some of the features included...",
  buttonText = "Add me!",
  paragraphs = ["Ex nostrud officia consequat consequat."],
  handleSubmit,
  hasEmail = true,
}) {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  return (
    <Modal
      className={styles.modal}
      isOpen={openModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Package Modal">
      <br />
      <div className={styles.modalButtonTopContainer}>
        &nbsp;
        <button onClick={closeModal} className={styles.button}>
          close
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>{title}</h1>&nbsp;&nbsp;
          {hasEmail && (
            <div>
              <a
                href={`mailto:christopher.feveck@gmail.com?subject=${title}`}
                className={"btn"}>
                <EmailIcon
                  color="action"
                  fontSize="large"
                  className={styles.modalIcon}
                />
              </a>
            </div>
          )}
        </div>

        {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}

        <div className={styles.paragraphContainer}>
          {" "}
          {paragraphs &&
            paragraphs.map((paragraph, key) => {
              return (
                <p key={key} className={styles.modalParagraph}>
                  {paragraph}
                </p>
              );
            })}
        </div>

        <h2>
          For more information and pricing press the email icon and lets
          connect.
        </h2>
        {handleSubmit && (
          <form
            className={styles.container}
            onSubmit={
              handleSubmit
                ? handleSubmit
                : (e) => {
                    e.preventDefault();
                  }
            }>
            <input
              className={styles.input}
              placeholder="Enter Email"
              name="email"
              type="email"
              value={""}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              className={styles.button}
              type={"submit"}
              value={buttonText}
            />
          </form>
        )}
      </div>
    </Modal>
  );
}
