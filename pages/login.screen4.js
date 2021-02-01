import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/generic/custom.button';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';
import CustomRedButton from '../components/generic/custom.red.button';
export default function VerificationStories() {
    return (
        <LoginScreenWrapper>
            <Grid classes={{root:"grid"}}>
                <Grid xs={12} container justify="space-between" style={{height:"10%"}}>
                    <Grid>
                        <CustomRedButton>
                            Back to Stories
                  </CustomRedButton>

                    </Grid>
                    <Grid>
                        <CustomRedButton>
                            Share
                  </CustomRedButton>

                    </Grid>

                </Grid>
                <Grid xs={12}  alignItems="center"  container justify="center" style={{height:"90%"}}>
                    <Grid xs={11} md={6} lg={5}>
                        <Paper classes={{ root: "loginPaper" }}>
                            <div className="wrapper">


                                <div className="heading">
                                    Password

                        </div>
                                <p className="para">
                                    This story is password protected, please type in your password
                        </p>
                                <div style={{ paddingTop: "20px" }}>
                                    <SiteLabelTextField placeholder="Password">
                                    </SiteLabelTextField>

                                </div>
                                <div className="error" style={{ paddingTop: "50px" }}>
                                    Error: Lorem ipsum dolor sit amet!
                        </div>
                                <div style={{ paddingTop: "20px" }} className="buttons">
                                    <Grid xs={6} md={5} lg={4} style={{ margin: "auto" }}>
                                        <CustomButton redButton>
                                            Read Story
                            </CustomButton>
                                    </Grid>
                                </div>
                                <div style={{ paddingTop: "20px" }}>
                                    Happy Reading
                        </div>
                            </div>
                        </Paper>


                    </Grid>
                </Grid>
            </Grid>
        </LoginScreenWrapper>
    )
}
const LoginScreenWrapper = styled.div`
.grid{
    height:92.5vh;
}
background-image:url('/assets/background.png');
max-height:100%;
max-width:100%;

.loginPaper{
    background: #181A21;
    border-radius:10px;
    color:#CFD7EA;
    padding:10px 0px;
    text-align:center;
    padding:50px 0px;

    .heading{
        font-weight:600;
        font-size:20px;
    }
    .para{
        margin-top:20px;
        font-size:16px;
        font-weight:600;
        color:#626877;
    }
    .wrapper{
        width:80%;
        margin:auto;
    }
    .error{
        font-size:16px;
        font-weight:600;
        color:#C0222C;
    }
    .buttons{
        display:flex;
        justify-content:space-between;
    }
}

`