import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function DefinitionCard({
  titles = ["title one", "title two"],
  paragraphs = ["description one", "description 2"],
  withBullets = false,
  mainText = ["main text"],
  buttonTitle = "learn more",
  buttonClick,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {titles[0]}
        </Typography>
        {withBullets ? (
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
            {mainText.map((item) => {
              console.log(item);
              return null;
            })}
          </Typography>
        ) : (
          <Typography variant="h5" component="h2">
            {mainText}
          </Typography>
        )}
        <Typography className={classes.pos} color="textSecondary">
          {titles[1]}
        </Typography>
        <Typography variant="body2" component="p">
          {paragraphs[0]}
          <br />
          {paragraphs[1]}
        </Typography>
      </CardContent>
      <CardActions>
        {buttonClick && (
          <Button size="small" className="button" onClick={buttonClick}>
            {buttonTitle}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
