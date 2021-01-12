import React, { useState } from "react";
import "normalize.css";
import "./App.css";
import PageContent from "./features/pageContent/PageContent";

export default function App() {
  let [home, setHome] = useState(true);
  let [about, setAbout] = useState(false);
  let [contact, setContact] = useState(false);
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);
  let [portfolio, setPortfolio] = useState(false);

  return (
    <div className="App">
      <header>
        <div
          className="button"
          onClick={() => {
            setHome(true);
            setAbout(false);
            setContact(false);
            setPortfolio(false);
            setLogin(false);
            setRegister(false);
          }}
        >
          Home
        </div>
        <nav>
          <ul>
            <li
              className="button"
              onClick={() => {
                setAbout(true);
                setHome(false);
                setContact(false);
                setPortfolio(false);
                setLogin(false);
                setRegister(false);
              }}
            >
              About
            </li>
            <li
              className="button"
              onClick={() => {
                setContact(true);
                setHome(false);
                setAbout(false);
                setPortfolio(false);
                setLogin(false);
                setRegister(false);
              }}
            >
              Contact
            </li>
            <li
              className="button"
              onClick={() => {
                setPortfolio(true);
                setHome(false);
                setAbout(false);
                setContact(false);
                setLogin(false);
                setRegister(false);
              }}
            >
              Portfolio
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <div id="viewContainer">
          {home && <PageContent pageType={"home"} />}
          {about && <PageContent pageType={"about"} />}
          {contact && <PageContent pageType={"contact"} />}
          {portfolio && <PageContent pageType={"portfolio"} />}
          {login && <PageContent pageType={"login"} />}
          {register && <PageContent pageType={"register"} />}
        </div>
        {!contact && !portfolio && (
          <div id="madeBy">
            <a
              href="https://twitter.com/CFeveck"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photo by:&nbsp;Chris Feveck&nbsp;
              <img
                className="photoBy__image"
                src="favicon-32x32.png"
                alt="Chris Feveck"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
