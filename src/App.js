import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./features/Navigation";
import DefinitionCard from "./features/pageContent/DefinitionCard";
import MediaCard from "./features/pageContent/MediaCard";
import { Container, Box, Paper, Grid } from "@material-ui/core";
import Contact from "./features/contact/Contact";
export default function App() {
  let [home, setHome] = useState(true);
  let [about, setAbout] = useState(false);
  let [contact, setContact] = useState(false);
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);
  let [portfolio, setPortfolio] = useState(false);
  let [page, setPage] = useState("home");
  const navigator = {
    handleHome: () => {
      setHome(true);
      setAbout(false);
      setContact(false);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
    },
    handleAbout: () => {
      setAbout(true);
      setContact(false);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
      setHome(false);
    },
    handleContact: () => {
      setContact(true);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
      setHome(false);
      setAbout(false);
    },
    handleLogin: () => {
      setLogin(true);
      setRegister(false);
      setPortfolio(false);
      setHome(false);
      setAbout(false);
      setContact(false);
    },
    handleRegister: () => {
      setRegister(true);
      setPortfolio(false);
      setHome(false);
      setAbout(false);
      setContact(false);
      setLogin(false);
    },
    handlePortfolio: () => {
      setPortfolio(true);
      setHome(false);
      setAbout(false);
      setContact(false);
      setLogin(false);
      setRegister(false);
    },
  };
  const DisplayHome = () => (
    <Container className="home__container">
      <Box className="page__main">
        <div>
          <div className="paper__title">Hi, I'm Chris.</div>
          <hr />
          <div className="paper__subtitle">
            <div>
              <DefinitionCard
                titles={[
                  "Software Developer, VR enthusist.",
                  "Nature lover, aspiring scuba diving enthusist.",
                ]}
                mainText={[
                  "Welcome to my web app, a potluck of projects and passions.",
                ]}
                paragraphs={[
                  "Enjoy my content. It may be neither here nor there hence putluck.",
                  "",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="page__main__image__container">
          <div className="page__main__image">
            <img
              className="page__image"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8"
              alt="temp"
            />
          </div>
        </div>
      </Box>
    </Container>
  );
  const DisplayAbout = () => (
    <Container className="home__container">
      <Box className="page__main">
        <Paper elevation={3}>
          <div className="paper__title">Hi, I'm Chris.</div>
          <div className="paper__subtitle">
            Welcome to my web app, a potluck of experiments and interests.
          </div>
        </Paper>
      </Box>

      <Grid container spacing={3}>
        <Grid item>
          <DefinitionCard />
        </Grid>
      </Grid>
    </Container>
  );
  const DisplayContact = () => (
    <Container className="home__container">
      <Box className="page__main">
        <Paper elevation={3}>
          <Contact />
        </Paper>
      </Box>

      <Grid container justify={"center"} alignContent={"center"} spacing={3}>
        {/* <Grid item>
          <DefinitionCard titles={['']} mainText={[]} paragraphs={[]} />
        </Grid> */}
      </Grid>
    </Container>
  );
  const DisplayPortfolio = () => (
    <Container className="home__container">
      <Grid container justify={"center"} alignContent={"center"} spacing={3}>
        <Grid item>
          <MediaCard
            title={"Superior Atmosphere"}
            description={
              "At Superior Atmosphere, it is our goal to provide the most cost and energy-efficient solutions for ac problems, including air conditioning installations and HVAC services. Our superior strategy, we can determine whether a servicing or a new installation is required."
            }
            image={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fsa.png?alt=media&token=0cc1cf90-3449-4465-92de-c5b9a40b1e6b"
            }
            buttonTitle={"learn more"}
            link={"http://superior-atmosphere.com/"}
          />
        </Grid>
      </Grid>
    </Container>
  );
  const DisplayPage = (page) => {
    switch (page) {
      case "home":
        return DisplayHome();
      case "about":
        return DisplayAbout();
      case "contact":
        return DisplayContact();
      case "login":
        return <div>login</div>;
      case "register":
        return <div>register</div>;
      case "portfolio":
        return DisplayPortfolio();
      default:
        return <div>spinner</div>;
    }
  };

  useEffect(() => {
    if (home) {
      setPage("home");
      setHome(true);
      setAbout(false);
      setContact(false);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
    }

    if (about) {
      setPage("about");
      setHome(false);
      setAbout(true);
      setContact(false);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
    }

    if (contact) {
      setPage("contact");
      setHome(false);
      setAbout(false);
      setContact(true);
      setLogin(false);
      setRegister(false);
      setPortfolio(false);
    }

    if (login) {
      setPage("login");
      setHome(false);
      setAbout(false);
      setContact(false);
      setLogin(true);
      setRegister(false);
      setPortfolio(false);
    }

    if (register) {
      setPage("register");
      setHome(false);
      setAbout(false);
      setContact(false);
      setLogin(false);
      setRegister(true);
      setPortfolio(false);
    }

    if (portfolio) {
      setPage("portfolio");
      setHome(false);
      setAbout(false);
      setContact(false);
      setLogin(false);
      setRegister(false);
      setPortfolio(true);
    }
  }, [home, about, contact, login, register, portfolio, page]);

  return (
    <div className="App">
      <Navigation {...navigator} />
      {DisplayPage(page)}

      <div id="madeBy">
        <a
          href="https://twitter.com/CFeveck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo by:&nbsp;Chris Feveck&nbsp;
          {/* <img
            className="photoBy__image"
            src="favicon-32x32.png"
            alt="Chris Feveck"
          /> */}
        </a>
      </div>
    </div>
  );
}
