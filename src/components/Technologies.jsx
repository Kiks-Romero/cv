import { makeStyles, Paper, Typography } from "@material-ui/core";
import StarRating from "./StarRating";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import React from "react";
import Skills from "../json/data.json";
import html from "../img/HTML-5-01.png";
import css from "../img/CSS-3-01.png";
import js from "../img/JavaScript-01.png";
import sass from "../img/Sass-01.png";
import node from "../img/Node-JS-02.png";
import bootstrap from "../img/Bootstrap-01.png";
import wordpress from "../img/Wordpress-02.png";
import git from "../img/Git-06.png";
import github from "../img/GitHub-Icon-01.png";
import iconReact from "../img/React-01.png";
import iconRedux from "../img/Redux-01.png";
import photoshop from "../img/Adobe-Photoshop-CC-01.png";
import iconMaterial from "../img/Material-ui-01.png";

const Technologies = () => {
  const classes = useStyles();

  const logoSelector = (logo) => {
    if (logo === "html") {
      return html;
    } else if (logo === "css") {
      return css;
    } else if (logo === "javascript") {
      return js;
    } else if (logo === "sass") {
      return sass;
    } else if (logo === "nodejs") {
      return node;
    } else if (logo === "bootstrap") {
      return bootstrap;
    } else if (logo === "wordpress") {
      return wordpress;
    } else if (logo === "git") {
      return git;
    } else if (logo === "github") {
      return github;
    } else if (logo === "react") {
      return iconReact;
    } else if (logo === "redux") {
      return iconRedux;
    } else if (logo === "photoshop") {
      return photoshop;
    } else if (logo === "mui") {
      return iconMaterial;
    }
  };

  return (
    <Timeline align="left">
      {Skills.skills.map((item) => {
        return (
          <TimelineItem key={item.key}>
            <TimelineSeparator>
              <img
                src={logoSelector(item.key)}
                alt={item.key}
                className={classes.customlogo}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  {item.skill}
                </Typography>
                <StarRating stars={item.stars} />
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    maxWidth: "200px",
  },
  customlogo: {
    width: "45px",
  },
}));

export default Technologies;
