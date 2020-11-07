import React from "react";
import styles from "./PageContent.module.css";

export default function PageContent(pageType) {
  switch (pageType) {
    default:
      <div className={styles.page__content__root}>Home</div>;
      break;
  }
}
