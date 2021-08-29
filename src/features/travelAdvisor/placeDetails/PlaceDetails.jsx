import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
export default function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();
  // if (selected) {
  //   refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://firebasestorage.googleapis.com/v0/b/portfolio-231ae.appspot.com/o/images%2Fno-image.jpg?alt=media&token=c0c48b13-bbc5-4d7d-a563-26818e564ee8"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating size={"small"} value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          style={{ flexDirection: "column" }}>
          {/* <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_ranking}
          </Typography> */}
          {/* {place?.awards?.map((award) => {
            return (
              <Box display="flex" justifyContent="space-between">
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant={"subtitle2"} color={"secondary"}>
                  {award.display_name}
                </Typography>
              </Box>
            );
          })} */}
          <Box display="flex" flexDirection="row">
            {place?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size={"small"}
                label={name}
                className={classes.chip}
                color="secondary"
              />
            ))}
          </Box>

          {place?.address && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}>
              <LocationIcon /> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              className={classes.subtitle}>
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}>
              Trip Advisor
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}>
              Web site
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
