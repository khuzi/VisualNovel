import React, { useState } from "react";

import { Grid } from "@material-ui/core";

import { User } from "../../user";

import classes from "./searchBox.module.css";

export function SearchBox() {
  const [isUsers, setUsers] = useState(false);
  return (
    <>
      <Grid
        className={classes.root}
        container
        justify="space-around"
        alignItems="center"
        style={{
          boxShadow: isUsers
            ? "0px 0px 10px rgba(0, 0, 0, 0.4), 0px 10px 10px rgba(0, 0, 0, 0.15)"
            : "",
        }}
      >
        {isUsers && (
          <Grid
            item
            xs={1}
            style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
          >
            <svg
              onClick={() => setUsers(false)}
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M18.446 14.0214C18.9479 13.5195 18.9479 12.7051 18.446 12.2031L14.5064 8.26355L18.446 4.32395C18.9479 3.82203 18.9479 3.0076 18.446 2.50568L16.6277 0.687403C16.1258 0.185484 15.3114 0.185483 14.8095 0.687403L10.8699 4.627L6.93028 0.687403C6.42836 0.185483 5.61392 0.185483 5.112 0.687402L3.29373 2.50568C2.79181 3.0076 2.79181 3.82203 3.29373 4.32395L7.23332 8.26355L3.29373 12.2031C2.79181 12.7051 2.79181 13.5195 3.29373 14.0214L5.112 15.8397C5.61392 16.3416 6.42836 16.3416 6.93028 15.8397L10.8699 11.9001L14.8095 15.8397C15.3114 16.3416 16.1258 16.3416 16.6277 15.8397L18.446 14.0214Z"
                  fill="#616776"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.91748"
                  y="0.310974"
                  width="19.9052"
                  height="19.9052"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Grid>
        )}
        <Grid item xs={isUsers ? 9 : 11} className={classes.search}>
          <input onClick={() => setUsers(true)} />
        </Grid>
        {isUsers && [1, 2, 3, 4, 5].map((user) => <User key={user} />)}
      </Grid>
    </>
  );
}
