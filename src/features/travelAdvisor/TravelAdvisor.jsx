import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SiteHeader from "../header/Header";
import Header from "./header/Header";
import Map from "./map/Map";
import List from "./list/List";
import { Grid } from "@material-ui/core";
import { selectPlaces, isLoading } from "./travelAdvisorSlice";
import { useSelector, useDispatch } from "react-redux";
import { firebase } from "../../firebaseConnection/firebase";
export default function TravelAdvisor({
  setCoordinates,
  setBounds,
  coordinates,
  handleChildClicked,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const places = useSelector(selectPlaces);

  useEffect(() => {
    if (places && places.length > 0) dispatch(isLoading(false));
  }, [places, dispatch]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <React.Fragment>
      <SiteHeader title="Forage for food" />
      <br />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={places}
            handleChildClicked={handleChildClicked}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
