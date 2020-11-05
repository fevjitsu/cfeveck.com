import React from "react";
import styles from "./Display.module.css";

export default function CardContent({
  id,
  title,
  image,
  notes,
  handleClick,
  buttonTitle,
  name,
  alpha3Code,
  capital,
  region,
  subregion,
  population,
  latlng,
  demonym,
  area,
  flag,
}) {
  image = flag;
  return (
    <div className={styles.card__root}>
      <div className={styles.card__title}>
        {name}-{alpha3Code}
      </div>
      <div className={styles.card__content__container}>
        <div>
          {image ? (
            <img
              className={styles.card__content__image}
              src={image}
              alt={name}
            />
          ) : null}
        </div>
        <div className={styles.card__content__list__container}>
          <ul>
            <li>Capital - {capital}</li>
            <li>
              <span>
                Region - {region}
                <br /> <em>{subregion}</em>
              </span>
            </li>
            <li>Population - {population}</li>
            {notes
              ? notes.map((note, key) => {
                  return (
                    <li key={key} className={styles.card__li}>
                      {note}
                    </li>
                  );
                })
              : null}
          </ul>
          <div>
            {handleClick ? (
              <button
                className={styles.card__content__button}
                onClick={handleClick}
                id={id}
              >
                {buttonTitle}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
