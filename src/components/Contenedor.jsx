import React from "react";

import Footer from "./Footer";
import About from "./About";
import Navbar from "./Navbar";
import SkillList from "./SkillList";
import MyWork from "./MyWork";
import Contact from "./Contact";

import { makeStyles } from "@material-ui/styles";

const Contenedor = () => {
  const classes = makeStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="About Me" id="about" dark={true} />
      <SkillList title="My Coding Journey" id="skills" dark={false} />
      <MyWork title="My Work" id="work" dark={true} />
      <Contact title="Contacto" id="contact" dark={false} />
      <Footer title="Footer" id="footer" dark={true} />
    </div>
  );
};

export default Contenedor;
