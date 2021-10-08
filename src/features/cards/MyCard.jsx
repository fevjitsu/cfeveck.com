import React from "react";
import styles from "./MyCards.module.css";
export default function MyCard({
  title,
  src,
  alt,
  buttons = [{ name: undefined, handleClick: undefined }],
  paragraphs,
}) {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardTitle}>{title}</h1>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={src} alt={alt} />
      </div>
      {buttons && (
        <div className={styles.cardButtonContainer}>
          {buttons.map((button, index) => {
            return (
              <span key={index}>
                <button
                  className={styles.cardButton}
                  onClick={button.handleClick}>
                  {button.name}
                </button>
              </span>
            );
          })}
        </div>
      )}
      {paragraphs && (
        <div className={styles.cardParagraphs}>
          {paragraphs.map((paragraph, index) => {
            return (
              <p key={index} className={styles.cardParagraph}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
