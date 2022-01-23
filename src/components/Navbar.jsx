import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import logo from "../img/icon-cat.png";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";

import links from "../json/data.json";
import Cajon from "./Cajon";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="logo" />
          <List className={classes.menu}>
            {links.links.map(({ id, text }) => (
              <Link
                key={id}
                to={id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="active"
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          onClick={() => setOpen(false)}
          className={classes.cancelicon}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.links.map(({ id, text }) => {
          return (
            <Link
              key={id}
              className={classes.sidebar}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
            >
              <Cajon text={text} id={id} className={classes.cajon} />
            </Link>
          );
        })}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  logo: {
    height: "5rem",
    objectFit: "contain",
    "&:hover": { cursor: "pointer" },
  },
  toolbar: {
    background: "#fafafa",
    top: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "tomato",
      borderBottom: "3px solid tomato",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  cancelicon: {
    color: "tomato",
    position: "absolute",
    top: 0,
    left: 10,
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "tomato",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
