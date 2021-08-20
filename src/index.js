import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./Landing";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Landing />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
