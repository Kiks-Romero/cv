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
import cv from "../img/CvLuis.pdf";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
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
          <CardContent className={classes.cardcontent}>
            <TypeWriterEffect
              text={info.name}
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#1a237e",
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
              cursorColor="#1a237e"
              typeSpeed={100}
            />
            <Thypography
              variant="h6"
              color="secondary"
              className={classes.sectionText}
            >
              I am a person who likes to learn new topics by my own and I am
              looking for ways to improve my strengths and tackle my weaknesses.
            </Thypography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfbutton}>
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
    color: "#eeeeee",
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
    borderRadius: "25%",
    margin: theme.spacing(5),
  },
  cardcontent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  sectionText: {
    maxWidth: "60vw",
  },
  pdfbutton: {
    position: "absolute",
    bottom: "3rem",
    right: "3rem",
    [theme.breakpoints.down("sm")]: {
      bottom: 10,
      right: "1rem",
    },
    backgroundColor: "#3f51b5",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#eeeeee",
    },
    "& a": {
      color: "#eeeeee",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#3f51b5",
    },
  },
}));

export default About;
