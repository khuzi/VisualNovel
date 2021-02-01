import React from "react";
import Grid from "@material-ui/core/Grid";
import { IsMobileWidth, IsTabletWidth } from "../util/util";
import Avatar from "@material-ui/core/Avatar";
import { HeaderWrapper } from "./header.style";
import Link from "next/link";

export default function Header() {
  const mobileWidth = IsMobileWidth();
  return (
    <HeaderWrapper>
      <Grid container justify="center">
        <Grid
          wrap="wrap"
          container
          justify="space-between"
          alignItems="center"
          className={mobileWidth ? "mobileNavigation" : "navigation"}
        >
          <div>
            {/* {
                            mobileWidth ? <div><DehazeIcon style={{ fontSize: "28px", color: "#2A336C",cursor:"pointer"}} /> </div>
                                  } */}
            <ul className="navBar">
              <img src="/assets/settings.png" />
              <li>
                <Link href="/">
                  <a> Home </a>
                </Link>
              </li>
              <li>
                <Link href="/assets">
                  <a>Assets </a>
                </Link>
              </li>
              <li>
                <Link href="/visualnovel">
                  <a>Visual Novel </a>
                </Link>
              </li>
              <li>
                <Link href="/Games">
                  <a> Published</a>
                </Link>
              </li>
              <li>
                <Link href="/chat">
                  <a> Chat </a>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <a> Wiki</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={mobileWidth ? "mobileNavRight" : "nav-right"}>
            <img src="/assets/bin.png" />
            <div className="items">
              <Avatar className="avatar" />
            </div>
            <div className="items">
              <Link href="/profile">
                <a>Username</a>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
}
