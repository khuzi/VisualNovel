import React from "react";

import { Grid, Avatar } from "@material-ui/core";

export function User({ normal }) {
  return (
    <Grid container style={{ marginTop: !normal && "1rem" }}>
      <Grid container item xs={!normal ? 10 : 6} alignItems="center">
        <Grid item>
          <Avatar
            src="/assets/avatar.png"
            style={{
              height: "1.5rem",
              width: "1.5rem",
              marginLeft: !normal && "4rem",
            }}
          />
        </Grid>
        <Grid item style={{ color: "#A8B2CA", marginLeft: "1rem" }}>
          Sam Henry
        </Grid>
      </Grid>
      <Grid item xs={!normal ? 2 : 6} style={{ marginTop: "0.6rem" }}>
        {normal ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "25px",
            }}
          >
            <p style={{ color: "#3F4451", fontSize: "14px" }}>Today 12:30</p>
            <img
              src="/assets/lightcheck.png"
              style={{ width: "20px", height: "20px", marginLeft: "0.2rem" }}
            />
          </div>
        ) : (
          <img src="/assets/plus.png" />
        )}
      </Grid>
    </Grid>
  );
}
