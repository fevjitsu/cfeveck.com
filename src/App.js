import React, { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import List from "./features/lists/List";
import Contact from "./features/forms/Contact";
export default function App() {
  let [home, setHome] = useState(true);
  let [about, setAbout] = useState(false);
  let [contact, setContact] = useState(false);
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);
  let [portfolio, setPortfolio] = useState(false);

  const CurrentView = (home, about, contact, portfolio, login, register) => {
    const ShowHome = (home) => {
      if (home) {
        return (
          <div className="animate__animated animate__backInUp">
            <h1>Hi, I'm Chris a freelancing web developer.</h1>
            <h2>
              Have a look through my web app{" "}
              <strike>and share your thoughts</strike>.
            </h2>
          </div>
        );
      } else {
        return null;
      }
    };
    const ShowAbout = (about) => {
      if (about) {
        return (
          <div className="animate__animated animate__backInLeft">
            <h1>A little more about me.</h1>
            <p>
              As a software developer I am often presented with task where I
              deploy solutions. Troubleshooting issues however, is not
              restricted to technology and should be emplored in the community
              to improve the standards of all its members. As a problem solver
              it is my duty to improve my communities to the best of my current
              abilities.
            </p>
          </div>
        );
      } else {
        return null;
      }
    };
    const ShowContact = (contact) => {
      if (contact) {
        return (
          <div className="animate__animated animate__pulse">
            <h1>Let's connect and build [array of build words].</h1>
            <Contact />
          </div>
        );
      } else {
        return null;
      }
    };
    const ShowPortfolio = (portfolio) => {
      if (portfolio) {
        return (
          <div className="animate__animated animate__swing">
            <h1>This is a list of my own projects.</h1>
            <List
              collection={[
                {
                  title: "The Cookbook",
                  paragraph:
                    "A hub of recipies I have tried and would like to share with everyone. ",
                },
                {
                  title: "Mobile Pet Grooming",
                  paragraph:
                    "Let our team of pet care experts give you pets that extra care they deserve. ",
                },
              ]}
            />
          </div>
        );
      } else {
        return null;
      }
    };

    const ShowLogin = (login) => {
      if (login) {
        return (
          <div className="animate__animated animate__bounce">
            <h1>Hi [logged in as]</h1>
          </div>
        );
      } else {
        return null;
      }
    };

    const ShowRegister = (register) => {
      if (register) {
        return (
          <div className="animate__animated animate__bounce">
            <h1>
              <strike>Register to see more content.</strike>
            </h1>
            <h1>
              <em>Content on the way.</em>
            </h1>
          </div>
        );
      } else {
        return null;
      }
    };

    return (
      ShowHome(home) ||
      ShowAbout(about) ||
      ShowContact(contact) ||
      ShowPortfolio(portfolio) ||
      ShowLogin(login) ||
      ShowRegister(register)
    );
  };

  return (
    <div class="container">
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
            <li
              onClick={() => {
                setRegister(true);
                setHome(false);
                setAbout(false);
                setContact(false);
                setPortfolio(false);
                setLogin(false);
              }}
            >
              <strike>Register/Log In</strike>
            </li>
          </ul>
        </nav>
      </header>

      <div class="cover">
        {CurrentView(home, about, contact, portfolio, login, register)}
        <div id="madeby">
          <span>
            Photo by{" "}
            <a
              href="https://twitter.com/CFeveck"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Feveck
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
