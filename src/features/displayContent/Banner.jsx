import React from "react";
import styles from "./Display.module.css";
export default function Banner({
  isNotice = false,
  title,
  subTitle,
  image,
  buttonTitle,
  handleClick,
}) {
  const HasButton = (buttonTitle) => {
    if (handleClick)
      return (
        <button onClick={handleClick} className={styles.banner__button}>
          {buttonTitle}
        </button>
      );
  };

  if (!isNotice) {
    return (
      <div className={styles.banner__container}>
        <div className={styles.banner__background}>
          <div className={styles.banner__title}>{title}</div>
          <div className={styles.banner__subTitle}>
            {subTitle ? <em>{subTitle}</em> : null}
          </div>
          {image ? (
            <div className={styles.banner__image}>
              <img src={image} alt={title} />
            </div>
          ) : null}
          <div>{HasButton(buttonTitle)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"notice"} onClick={handleClick}>
        {title}
      </div>
    );
  }
}
