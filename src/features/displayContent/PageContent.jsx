import React from "react";
import styles from "./Display.module.css";

export default function PageContent({
  title,
  subTitle,
  author,
  category,
  image,
  paragraphs,
  handleClick,
  buttonTitle,
}) {
  return (
    <div className={styles.page__content__root}>
      <div className={styles.page__content__title}>
        {title}{" "}
        <span className={styles.page__content__subTitle}>- {subTitle}</span>
      </div>

      <div className={styles.page__button__container}>
        <button className={styles.page__button} onClick={handleClick}>
          {buttonTitle}
        </button>
      </div>

      <div className={styles.page__content__container}>
        <div>
          <img
            className={styles.page__content__image}
            src={image}
            alt={title}
          />
        </div>
        <div className={styles.page__content__paragraph__container}>
          {paragraphs
            ? paragraphs.map((paragraph, key) => {
                return (
                  <div key={key} className={styles.page__content__paragraph}>
                    {paragraph}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
