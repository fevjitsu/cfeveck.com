import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Blogger from "./features/blog/Blogger";
import MapPage from "./pages/MapPage";
import { CookiesProvider } from "react-cookie";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/blogs">
              <Blogger />
            </Route>

            <Route path="/restaurants">
              <MapPage />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
