import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ResponsiveDrawer from "../components/generic/drawer/drawer";
// import CustomDrawer from "../components/generic/custom.drawer";
import BaseLayout from "../components/layouts/base.layout";
import CustomCheckBox from "../components/generic/custom.checkbox";
import SiteLabelTextField from "../components/generic/site.label.textfield/site.label.textfield/site.label.textfield";
import CustomButton from "../components/generic/custom.button";

import CustomDrawer from "../components/generic/customDrawer";

export default function Profile() {
  const [drawer, setDrawer] = useState(false);

  return (
    <BaseLayout>
      <ProfileWrapper>
        <Grid xs={12} classes={{ root: "grid" }} container>
          <Grid xs={0} sm={0} md={3}>
            <CustomDrawer open={drawer} setOpen={setDrawer} />
          </Grid>
          <Grid sm={12} md={9} style={{ paddingBottom: "19px" }}>
            <button onClick={() => setDrawer(!drawer)}>Toggle</button>

            <div className="wrapper">
              <div className="heading">Profile Options</div>
              <div className="checkBoxes">
                <div>
                  <CustomCheckBox label="Public Profile" />
                </div>
                <div className="checkBox">
                  <CustomCheckBox label="Block Project Invitations" />
                </div>
                <div className="checkBox">
                  <CustomCheckBox label="Show Details in Search" />
                </div>
                <div className="checkBox">
                  <CustomCheckBox label="Get news and updates" />
                </div>
              </div>
              <div className="heading">Change E-mail</div>
              <Grid xs={4} className="input">
                <SiteLabelTextField placeholder="New e-mail" />
              </Grid>
              <Grid xs={4} className="input">
                <SiteLabelTextField placeholder="Repeat e-mail" />
              </Grid>
              <Grid xs={2} className="input">
                <CustomButton>Change e-mail</CustomButton>
              </Grid>
              <div className="heading">Change Password</div>
              <Grid xs={4} className="input">
                <SiteLabelTextField placeholder="New password" />
              </Grid>
              <Grid xs={4} className="input">
                <SiteLabelTextField placeholder="Repeat password" />
              </Grid>
              <Grid xs={2} className="input">
                <CustomButton>Change Password</CustomButton>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </ProfileWrapper>
    </BaseLayout>
  );
}
const ProfileWrapper = styled.div`
  /* height:92vh; */
  position: relative;
  width: 100%;
  color: #cfd7ea;
  height: 100%;
  .grid {
    height: 100%;
  }

  .wrapper {
    width: 95%;
    margin: auto;
  }
  .heading {
    font-weight: 600;
    font-size: 22px;
    padding-top: 50px;
  }
  .checkBoxes {
    padding-top: 50px;
    .checkBox {
      padding-top: 20px;
    }
  }
  .input {
    padding-top: 20px;
  }
`;
