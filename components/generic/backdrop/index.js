import React from "react";
import classes from "./backdrop.module.css";

export const Backdrop = ({ show, clicked }) =>
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null;
