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
    <div className="container">
      <header>
        <h2
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
        </h2>
        <nav>
          <ul>
            <li
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
      <div className="cover">
        <div id="viewContainer">
          {home && <PageContent pageType={"home"} />}
          {about && <PageContent pageType={"about"} />}
          {contact && <PageContent pageType={"contact"} />}
          {portfolio && <PageContent pageType={"portfolio"} />}
          {login && <PageContent pageType={"login"} />}
          {register && <PageContent pageType={"register"} />}
        </div>
        <div id="madeby">
          <a
            id="madeby__link"
            href="https://twitter.com/CFeveck"
            target="_blank"
            rel="noopener noreferrer"
          >
            Photo by:&nbsp;Chris Feveck
          </a>
        </div>
      </div>
    </div>
  );
}
