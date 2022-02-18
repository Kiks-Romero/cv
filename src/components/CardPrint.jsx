import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const CardPrint = ({ title, link, image, info }) => {
  const classes = useStyles();
  const [isFliped, setIsFipled] = useState(false);
  return (
    <ReactCardFlip isFlipped={isFliped} flipDirection="horizontal">
      <div>
        <Card className={classes.card}>
          <CardMedia
            image={image}
            className={classes.caratula}
            title="thumbnail"
            onClick={() => setIsFipled(true)}
          />

          <CardContent>
            <Link
              href={link}
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6" className={classes.cardtitle}>
                {title}
              </Typography>
            </Link>
          </CardContent>
        </Card>
      </div>
      <div onClick={() => setIsFipled(false)} className={classes.card}>
        <Card className={classes.card}>
          <CardContent>
            <Link
              href={link}
              color="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6" className={classes.cardtitle}>
                {title}
              </Typography>
            </Link>
            <Typography variant="h6">{info}</Typography>
            <TouchAppIcon />
          </CardContent>
        </Card>
      </div>
    </ReactCardFlip>
  );
};

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },
  caratula: {
    height: 100,
    paddingTop: "56.25%",
  },
  cardtitle: {
    textAlign: "center",
  },
}));

export default CardPrint;
