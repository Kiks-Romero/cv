import React from "react";
import { makeStyles } from "@material-ui/styles";

import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoTone from "@material-ui/icons/ContactMailTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import { ListItem, ListItemIcon, Typography } from "@material-ui/core";

const Cajon = (props) => {
  const classes = useStyle();
  return (
    <ListItem component="h5">
      <span>
        <ListItemIcon>
          {props.id === "about" && (
            <InfoTwoToneIcon fontSize="large" className={classes.info} />
          )}
          {props.id === "skills" && (
            <EmojiObjectsTwoToneIcon
              fontSize="large"
              className={classes.light}
            />
          )}
          {props.id === "work" && (
            <BuildTwoToneIcon fontSize="large" className={classes.tool} />
          )}
          {props.id === "contact" && (
            <ContactMailTwoTone fontSize="large" className={classes.mail} />
          )}
        </ListItemIcon>
      </span>
      <Typography>{props.text}</Typography>
    </ListItem>
  );
};

const useStyle = makeStyles((theme) => ({
  light: {
    color: "#ffcc00",
  },
  info: {
    color: "#90caf9",
  },
  tool: {
    color: "#2196f3",
  },
  mail: {
    color: "#388e3c",
  },
}));

export default Cajon;
