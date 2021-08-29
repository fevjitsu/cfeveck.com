import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    maxHeight: "40%",
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  font: {
    fontSize: "x-large",

    marginBottom: "2rem",
  },
}));

export default function Lister({ tileData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          className={classes.tile}
          style={{ height: "auto" }}>
          <ListSubheader component="div" className={classes.font}>
            <hr />
            To further my research of developer technologies I indulge in udemy.
            These are a few courses I've completed.
            <hr />
          </ListSubheader>
        </GridListTile>
        {tileData &&
          tileData.length > 0 &&
          tileData.map((tile) => (
            <GridListTile data-aos="fade-up" key={tile.id}>
              <img src={tile.src} alt={tile.alt} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.subtitle}</span>}
                actionIcon={
                  <a href={tile.href} target="_blank" rel="noopener noreferrer">
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  </a>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}
