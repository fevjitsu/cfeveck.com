import React, { useEffect, useState } from "react";
import CollectionList from "../lists/CollectionList";
import styles from "./Search.module.css";
export default function Add(collection) {
  let [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    alert("submit");
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div>
        <button className={styles.search__component__button} type="submit">
          Submit
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.add__collection__inputs__container}>
          <div>
            <input
              type="text"
              id={"title"}
              className={styles.search__component__input}
              placeholder="title"
            />
          </div>
          <div>
            <textarea
              id={"body"}
              placeholder="body content"
              className={styles.search__component__input}
              rows={5}
            ></textarea>
          </div>
        </div>
      </form>
      <div>{submitted ? <CollectionList collection={collection} /> : null}</div>
    </div>
  );
}
