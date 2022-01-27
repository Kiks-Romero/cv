import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@material-ui/core";

const CardPrint = ({ title, link, image }) => {
  const classes = useStyles();
  console.log(title, link, image);
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          image={image}
          className={classes.caratula}
          title="thumbnail"
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
