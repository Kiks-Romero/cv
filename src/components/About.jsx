import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Thypography from "@material-ui/core/Typography";
import picture from "../img/profile.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import TypeWriterEffect from "react-typewriter-effect";
import info from "../json/data.json";
import cv from "../img/profile.jpg";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  console.log(info.name);
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Thypography variant="h3">{title}</Thypography>
        <Card className={classes.card}>
          <CardMedia
            image={picture}
            className={classes.media}
            title="picture"
          />
          <CardContent className={classes.content}>
            <TypeWriterEffect
              text={info.name}
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "tomato",
              }}
              startDelay={100}
              cursorColor="black"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text={info.work}
              textStyle={{
                fontSize: "1.2rem",
                fontWeight: "500px",
                color: "black",
              }}
              startDelay={2500}
              cursorColor="tomato"
              typeSpeed={100}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbuttom}>
              <a href={cv} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectionContent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    width: "250px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "50%",
    margin: theme.spacing(5),
  },
}));

export default About;
