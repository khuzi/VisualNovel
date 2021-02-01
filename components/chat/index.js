import React from "react";

import { User } from "../generic/user";

import classes from "./chat.module.css";

export function BasicMessage({ txt, user }) {
  return (
    <div className={classes.basic_message}>
      {user && <User normal />}
      <div className={classes.txt}>
        <p>{txt}</p>
      </div>
    </div>
  );
}

export function AssetMessage() {
  return (
    <div
      style={{
        maxWidth: "351px",
        background: "#2E333C",
        borderRadius: "0px 6px 6px 6px",
        padding: "0.5rem",
        color: "#CFD7EA",
        marginLeft: "2.5rem",
      }}
    >
      Yes, Sure! I need some time to open the file.
      <div
        style={{
          display: "flex",
          background: "#252930",
          borderRadius: "6px",
          alignItems: "center",
          marginTop: "0.5rem",
          height: "56px",
        }}
      >
        <div style={{ margin: "1rem" }}>
          <img src="/assets/asset.svg" style={{ marginTop: "0.2rem" }} />
        </div>
        <div>
          <p
            style={{
              color: "#A8B2CA",
              fontSize: "16px",
              margin: "0 0 0.2rem 0",
            }}
          >
            Assets Files Long Name
          </p>
          <p style={{ color: "#616776", fontSize: "14px", margin: "0" }}>
            Unreal Engine
          </p>
        </div>
      </div>
    </div>
  );
}

export function QuestionMessage() {
  return (
    <div
      style={{
        background: "#2E333C",
        borderRadius: "0px 6px 6px 6px",
        padding: "0.5rem",
        color: "#CFD7EA",
        marginLeft: "2.5rem",
        marginTop: "0.5rem",
        marginBottom: "1rem",
        display: "inline-block",
      }}
    >
      Did you see the project yesterday? What do you think?
      <div
        style={{
          marginLeft: "1rem",
          paddingLeft: "0.5rem",
          color: "#616776",
          borderLeft: "2px solid #616776",
          fontSize: "14px",
          marginTop: "0.2rem",
        }}
      >
        Thank you so much! I will definitely look at it tonight when I get home
        and make the necessary adjustments.
      </div>
    </div>
  );
}
