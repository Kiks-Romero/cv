import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Thypography from "@material-ui/core/Typography";
import work from "../json/data.json";
import { Grid } from "@material-ui/core";
import CardPrint from "./CardPrint";
import imagenExample from "../img/icon-cat.png";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectionContent} id={id}>
        <Thypography variant="h3">{title}</Thypography>
        <Grid container className={classes.grid}>
          {work.examples.map(({ title, link, image, info }) => {
            return (
              <Grid item key={title} xs={12} sm={6} md={4}>
                <div>
                  <CardPrint
                    title={title}
                    link={link}
                    image={imagenExample}
                    info={info}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
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
    padding: theme.spacing(5),
  },
  grid: {
    marginTop: theme.spacing(10),
  },
}));

export default MyWork;
