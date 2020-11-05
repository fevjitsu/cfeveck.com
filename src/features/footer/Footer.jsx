import React from "react";
import styles from "./Footer.module.css";
export default function Footer({ social, copyright }) {
  const socialLinks = (links) => {
    return links.map((link, key) => {
      return (
        <div key={key}>
          <div>
            <a href={`${link.url}`}>{link.name}</a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <div>{socialLinks(social)}</div>
      </div>

      <div className={styles.copy}>
        <div>&copy;&nbsp;{copyright}</div>
      </div>
    </div>
  );
}
