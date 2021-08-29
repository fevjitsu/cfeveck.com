import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../placeDetails/PlaceDetails";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { selectChild, selectisLoading } from "../travelAdvisorSlice";
export default function List({ places }) {
  const classes = useStyles();
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState("");
  const child = useSelector(selectChild);
  const isLoading = useSelector(selectisLoading);

  return (
    <div className={classes.container}>
      <Typography variant="h4">Nearby food sources</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <React.Fragment>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, index) => (
              <Grid item key={`place_item_${index}`} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(child) === index}
                />
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
}
