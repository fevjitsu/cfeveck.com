import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Page from "./features/pageContent/Page";
import NavigationMenu from "./features/Navigation/NavigationMenu";
import Signature from "./features/pageSignature/Signature";
import { Container, Grid } from "@material-ui/core";
import { showContact, hideContact } from "./features/contact/contactSlice";
export default function App() {
  let [home, setHome] = useState(true);
  let [about, setAbout] = useState(false);
  let [contact, setContact] = useState(false);
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);
  let [portfolio, setPortfolio] = useState(false);
  let dispatch = useDispatch();
  const handleGoHome = () => {
    setHome(true);
    setAbout(false);
    setContact(false);
    setPortfolio(false);
    setLogin(false);
    setRegister(false);
    dispatch(hideContact());
  };
  const handleGoAbout = () => {
    setAbout(true);
    setHome(false);
    setContact(false);
    setPortfolio(false);
    setLogin(false);
    setRegister(false);
    dispatch(hideContact());
  };
  const handleGoContact = () => {
    setContact(true);
    setHome(false);
    setAbout(false);
    setPortfolio(false);
    setLogin(false);
    setRegister(false);
    dispatch(showContact());
  };
  const handleGoPortfolio = () => {
    setPortfolio(true);
    setHome(false);
    setAbout(false);
    setContact(false);
    setLogin(false);
    setRegister(false);
    dispatch(hideContact());
  };
  return (
    <Container>
      <NavigationMenu
        handleGoHome={handleGoHome}
        handleGoAbout={handleGoAbout}
        handleGoContact={handleGoContact}
        handleGoPortfolio={handleGoPortfolio}
      />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={"general_margin"}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Page
            home={home}
            about={about}
            contact={contact}
            portfolio={portfolio}
            login={login}
            register={register}
          />
        </Grid>
        <Signature />
      </Grid>
    </Container>
  );
}
