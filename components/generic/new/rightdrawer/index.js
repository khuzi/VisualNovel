import React from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Avatar } from "@material-ui/core";

import { BasicMessage, AssetMessage, QuestionMessage } from "../../../chat";

import classes from "./rightDrawer.module.css";

export function DrawerRight({ drawers, toggleDrawer, tabletWidth }) {
  return (
    <div
      className={`drawer_content`}
      style={{ display: "flex", width: "100%" }}
    >
      <CssBaseline />
      <main
        style={{
          flexGrow: 1,
          color: "#fff",
          padding: "1rem 0",
        }}
      >
        {tabletWidth && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "1rem",
            }}
          >
            <button onClick={() => toggleDrawer("left", true)}>
              Toggle Drawer
            </button>
            <button onClick={() => toggleDrawer("right", true)}>
              Toggle SideBar
            </button>
          </div>
        )}

        <Grid container justify="center">
          <Grid item xs={11}>
            <div>
              <BasicMessage
                txt="Hey, Wade! I saw you updated the files to a new version of the engine.
          Can you throw me a screenshot of the new module? I'm not home right
          now."
                user
              />
            </div>
            <div>
              <BasicMessage
                txt="Yes, Sure! I need some time to open the file. "
                user
              />
            </div>
            <div>
              <BasicMessage txt="Check this link https://334fjk.com/dfjkshdfh-sdfsdf-sgdsgsdgsg" />
            </div>
            <div>
              <BasicMessage
                txt="Thank you so much! I will definitely look at it tonight when I get home and make the necessary adjustments."
                user
              />
            </div>
            <div style={{ margin: "2rem 0" }}>
              <div style={{ height: "5px", background: "#181B21" }}></div>
              <div
                style={{
                  color: "#616776",
                  textAlign: "center",
                  padding: "0.2rem 0.5rem",
                  background: "#181B21",
                  width: "100px",
                  fontSize: "12px",
                  margin: "auto",
                }}
              >
                15 june 2020
              </div>
            </div>
            <div>
              <BasicMessage
                txt="Could you send me the asset you were talking about the day before yesterday?"
                user
              />
            </div>
            <AssetMessage />
            <QuestionMessage />
            <div style={{ height: "200px" }}></div>
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{ position: "absolute", left: "1.2rem", bottom: "12%" }}
              >
                <img src="/assets/upload.svg" />
              </div>
              <input
                style={{
                  width: "100%",
                  padding: "1rem 2.5rem",
                  background: "#16181E",
                  borderRadius: "6px",
                  border: "none",
                  outline: "none",
                  boxShadow: "inset 0px 4px 8px rgba(0, 0, 0, 0.1)",
                  color: "#A8B2CA",
                  marginLeft: "0.5rem",
                }}
                placeholder="Send a message..."
              />
              <div style={{ position: "absolute", right: "0", bottom: "10%" }}>
                <img src="/assets/emoji.svg" />
              </div>
            </div>
            <br />
          </Grid>
        </Grid>
      </main>
      <Drawer
        className={classes.drawer}
        variant={tabletWidth ? "temporary" : "permanent"}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={drawers.right}
        onClose={() => toggleDrawer("right", false)}
        anchor="right"
      >
        <div className={classes.content}>
          <Grid container>
            <Grid item xs={3}>
              <Avatar>
                <img src="/assets/avatar.png" />
              </Avatar>
            </Grid>
            <Grid xs={9}>
              <p
                style={{
                  color: "#CFD7EA",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Wade Warren
              </p>
              <p
                style={{
                  color: "#616776",
                  fontSize: "12px",
                }}
              >
                #Wade Warren
              </p>
              <div
                style={{
                  marginTop: "0.5rem",
                  color: "#CFD7EA",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/assets/blueNinja.svg" style={{ width: "25px" }} />
                <p style={{ marginLeft: "0.5rem" }}>Student - 6.5</p>
              </div>
            </Grid>
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  color: "#CFD7EA",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Contacts
              </p>
              {[
                { src: "/assets/mail.svg", txt: "wadewarren@mail.com" },
                { src: "/assets/phone.svg", txt: "+1 (702) 555-0122" },
                {
                  src: "/assets/location.svg",
                  txt: "United States, Los Angeles",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <img
                    src={item.src}
                    style={{
                      width: i === 2 ? "15px" : "20px",
                      marginRight: ".5rem",
                    }}
                  />
                  <p style={{ color: "#616776" }}>{item.txt}</p>
                </div>
              ))}
            </div>
          </Grid>
          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                color: "#CFD7EA",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              About
            </p>
            <p style={{ color: "#616776", marginTop: "1rem" }}>
              High performance and customizable vegetation. Change color and
              create variations easily, grass density can be increased to
              extreme numbers. Now with pivot wind.
            </p>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                color: "#CFD7EA",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Skills
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              {[
                "Unreal Engine",
                "Programming",
                "CEO",
                "3D Modelling",
                "Management",
              ].map((skill, i) => (
                <div
                  key={i}
                  style={{
                    background: "#1E2128",
                    color: "#616776",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "6px",
                    fontSize: "12px",
                    margin: "0.25rem 0.15rem",
                    boxShadow:
                      "0px 2px 2px rgba(0, 0, 0, 0.3), inset 0px -2px 2px rgba(0, 0, 0, 0.15), inset 0px 2px 2px rgba(255, 255, 255, 0.07)",
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <p
                style={{
                  color: "#CFD7EA",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Tiles
              </p>
              <div style={{ display: "flex" }}>
                {[1, 2, 3].map((tile) => (
                  <div key={tile} style={{ margin: "1rem 0.5rem" }}>
                    <img src="/assets/ninja.svg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
