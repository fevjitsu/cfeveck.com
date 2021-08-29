import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
export default function Map({
  setBounds,
  setCoordinates,
  coordinates,
  places,
  handleChildClicked,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAPS_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(e) => dispatch(handleChildClicked(e))}>
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={place.latitude}
            lng={place.longitude}
            key={i}>
            {isDesktop ? (
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typeography} variant="subtitle2">
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  alt={place.name}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8"
                  }
                />
                <Rating size={"small"} value={Number(place.rating)} readOnly />
              </Paper>
            ) : (
              <LocationOnOutlinedIcon color="secondary" fontSize="large" />
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
