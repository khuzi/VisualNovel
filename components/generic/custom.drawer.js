import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Divider } from "@material-ui/core";
import { IsMobileWidth, IsTabletWidth } from "../util/util";

export default function CustomDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const mobileWidth = IsMobileWidth();
  const tabletWidth = IsTabletWidth();
  return (
    <DrawerWrapper>
      <div className="wrapper">
        <Grid className="avatarWrapper">
          <Avatar className="avatar" src="/assets/avatar.png" />
          <div className="name">Courtney Henry</div>
        </Grid>
        <Divider style={{ marginTop: "30px" }} />
        <Grid className="items">
          <img className="icon" src="/assets/profile.svg" />

          <div className="itemName">Profile Options</div>
        </Grid>
        <Grid className="items">
          <img className="icon" src="/assets/resume.svg" />

          <div className="itemName">Resume</div>
        </Grid>
        <Grid className="items">
          <img className="icon" src="/assets/chat2.svg" />

          <div className="itemName">Chat Option</div>
        </Grid>
        <Grid className="items">
          <img className="icon" src="/assets/bell.svg" />

          <div className="itemName">Notification</div>
        </Grid>
      </div>
    </DrawerWrapper>
  );
}

const DrawerWrapper = styled.div`
  background-color: #1a1d24;
  height: 100%;
  width: 350px;
  max-width: 100%;
  z-index: 1;
  .wrapper {
    width: 90%;
    margin: auto;
    height: 100%;
  }
  .avatarWrapper {
    display: flex;
    align-items: center;
    .avatar {
      width: 50px;
      height: 50px;
    }
    .name {
      font-size: 18px;
      padding-left: 20px;
    }
  }
  .items {
    display: flex;
    align-items: center;
    padding: 15px;
  }
  .itemName {
    font-size: 18px;
    margin-left: 20px;
  }
  .icon {
    width: 30px;
  }
`;
