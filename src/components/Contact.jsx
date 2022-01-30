import { makeStyles } from "@material-ui/core/styles";
import Thypography from "@material-ui/core/Typography";
import React from "react";
import Chip from "@material-ui/core/Chip";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Thypography variant="h3">{title}</Thypography>
        <Chip
          variant="outlined"
          color="secondary"
          icon={<LinkedInIcon />}
          label="www.linkedin.com/in/luis-kique-romero"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<EmailIcon />}
          label="luiskique94@gmail.com"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<PhoneAndroidIcon />}
          label="5531331678"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<GitHubIcon />}
          label="Kiks-Romero"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<LocationOnIcon />}
          label="México"
        />
      </div>
      <Thypography variant="h6" className={classes.footer}>
        El Kicks - 2022
      </Thypography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "20vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectionContent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  footer: {
    background: "#333",
    color: "#fff",
    textAlign: "center",
  },
}));

export default Contact;
