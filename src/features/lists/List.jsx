import React from "react";
import styles from "./List.module.css";
import _ from "lodash";

export default function List({ collection, unordered }) {
  if (collection) {
    if (collection.length > 0) {
      if (unordered === true) {
        return (
          <ul className={styles.ul__root}>
            {_.map(collection, (item, key) => {
              return (
                <li
                  id={`${item.id}`}
                  key={key}
                  data-aos="fade-up"
                  className={styles.ul__li}
                >
                  <div className={styles.ul__li__headers}>
                    <div
                      className={styles.ul__li__title}
                      style={{ cursor: "pointer" }}
                      onClick={item.handleClick}
                    >
                      {item.url ? (
                        <a href={item.url}>{item.title}</a>
                      ) : (
                        item.title
                      )}
                    </div>

                    {item.handleEditClick && (
                      <div
                        onClick={item.handleEditClick}
                        style={{ cursor: "pointer" }}
                      >
                        edit
                      </div>
                    )}
                    {item.handleDeleteClick && (
                      <div
                        onClick={item.handleDeleteClick}
                        style={{ cursor: "pointer" }}
                      >
                        del
                      </div>
                    )}
                  </div>

                  <div className={styles.ul__li__paragraph}>
                    {item.paragraph}
                  </div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <ol className={styles.ol__root}>
            {_.map(collection, (item, key) => {
              return (
                <li
                  id={`${item.id}`}
                  key={key}
                  data-aos="fade-up"
                  className={styles.ol__li}
                >
                  <div className={styles.ol__li__headers}>
                    <div
                      className={styles.ol__li__title}
                      style={{ cursor: "pointer" }}
                      onClick={item.handleClick}
                    >
                      {item.url ? (
                        <a href={item.url}>{item.title}</a>
                      ) : (
                        item.title
                      )}
                    </div>

                    {item.handleEditClick && (
                      <div
                        onClick={item.handleEditClick}
                        style={{ cursor: "pointer" }}
                      >
                        edit
                      </div>
                    )}
                    {item.handleDeleteClick && (
                      <div
                        onClick={item.handleDeleteClick}
                        style={{ cursor: "pointer" }}
                      >
                        del
                      </div>
                    )}
                  </div>

                  <div className={styles.ol__li__paragraph}>
                    {item.paragraph}
                  </div>
                </li>
              );
            })}
          </ol>
        );
      }
    } else {
      if (unordered === true) {
        return (
          <ul className={styles.ul__root}>
            <li className={styles.ul__li}>
              <div className={styles.ul__li__headers}>
                <div className={styles.ul__li__title}>No results found</div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.ul__li__paragraph}>
                Try searching for something else
              </div>
            </li>
          </ul>
        );
      } else {
        return (
          <ol className={styles.ol__root}>
            <li className={styles.ol__li}>
              <div className={styles.ol__li__headers}>
                <div className={styles.ol__li__title}>No results found</div>
                <div></div>
                <div></div>
              </div>

              <div className={styles.ol__li__paragraph}>
                Try searching for something else
              </div>
            </li>
          </ol>
        );
      }
    }
  }
}
