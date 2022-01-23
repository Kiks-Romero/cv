import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Thypography from "@material-ui/core/Typography";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Thypography variant="h3">{title}</Thypography>
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
}));

export default MyWork;
