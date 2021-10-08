import React from "react";
import { useSelector } from "react-redux";
import Header from "../features/header/Header";
import { selectDisplayName } from "../features/login/loginSlice";
import styles from "./Pages.module.css";
export default function NotFound() {
  const displayName = useSelector(selectDisplayName);
  return (
    <div>
      <Header title="Return to the known by pressing home" />
      <div className={styles.container}>
        <h1>{`Looks like you got lost in the unknown, ${
          displayName ?? "Guest user"
        }.`}</h1>
      </div>
    </div>
  );
}
