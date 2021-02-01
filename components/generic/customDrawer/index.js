import React, { useEffect } from "react";

import { Grid, Avatar, CardHeader } from "@material-ui/core";

import { Backdrop } from "../backdrop";
import { SearchBox } from "./searchBox";

import classes from "./cuctomDrawer.module.css";

import { IsMobileWidth } from "../../util/util";

const StatusUser = ({ status }) => {
  return (
    <CardHeader
      style={{ color: "#A8B2CA" }}
      avatar={
        <div style={{ position: "relative" }}>
          <Avatar
            style={{
              width: "35px",
              height: "35px",
            }}
          >
            <img src="/assets/avatar.png" />
          </Avatar>
          <div
            style={{
              position: "absolute",
              right: "5%",
              bottom: "-5%",
              background: status,
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid #1A1D24",
            }}
          ></div>
        </div>
      }
      title="Jenny Wilson"
      subheader={
        <p style={{ color: "#616776", margin: "0", padding: "0" }}>
          Live Performance
        </p>
      }
    />
  );
};

const DrawerContent = () => {
  return (
    <>
      <SearchBox />
      <div style={{ marginTop: "4rem" }}>
        {["#C0222C", "#F0AC46", "#19BFA0", "#F0AC46", "#C0222C"].map(
          (status) => (
            <StatusUser status={status} />
          )
        )}
      </div>
    </>
  );
};

export default function CustomDrawer({ open, setOpen }) {
  const mobileWidth = IsMobileWidth();

  if (!mobileWidth) {
    return (
      <div
        style={{ width: "280px" }}
        className={`${classes.customDrawer} ${classes.open}`}
      >
        <DrawerContent />
      </div>
    );
  } else {
    return (
      <>
        <Backdrop show={open} clicked={() => setOpen(false)} />
        <div
          style={{ width: "240px" }}
          className={
            open
              ? `${classes.customDrawer} ${classes.open}`
              : `${classes.customDrawer} ${classes.close}`
          }
        >
          <DrawerContent />
        </div>
      </>
    );
  }
}
