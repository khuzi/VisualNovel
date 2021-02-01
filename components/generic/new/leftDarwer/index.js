import React, { useState } from "react";
import styled from "styled-components";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import { DrawerRight } from "../rightdrawer";
import { SearchBox } from "../../searchBox";
import { StatusUser } from "../../statusUser";

import { IsTabletWidth, IsMobileWidth } from "../../../util/util";

import classes from "./leftDrawer.module.css";

const Content = () => {
  const tabletWidth = IsTabletWidth();
  const mobileWidth = IsMobileWidth();

  const [drawers, setDrawers] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => {
    setDrawers({ ...drawers, [anchor]: open });
  };

  return (
    <div className={`drawer_content`} style={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant={tabletWidth || mobileWidth ? "temporary" : "permanent"}
        open={drawers.left}
        onClose={() => toggleDrawer("left", false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <SearchBox />
        <div style={{ marginTop: "4rem" }}>
          {["#C0222C", "#F0AC46", "#19BFA0", "#F0AC46", "#C0222C"].map(
            (status) => (
              <StatusUser status={status} />
            )
          )}
        </div>
      </Drawer>
      <DrawerRight
        drawers={drawers}
        tabletWidth={tabletWidth || mobileWidth}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
};

export function DrawerLeft() {
  const tabletWidth = IsTabletWidth();
  const mobileWidth = IsMobileWidth();
  return (
    <>
      <DrawerWrapper>
        <Content />
      </DrawerWrapper>
    </>
  );
}

const DrawerWrapper = styled.div`
  .drawer_content .MuiPaper-root {
    position: static !important;
    background: #1a1d24;
  }
  .drawer_content .MuiDrawer-paper {
    min-height: 100vh !important;
  }
`;
