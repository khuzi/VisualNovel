import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/generic/custom.button';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';

export default function LoginScreen() {
    return (
        <LoginScreenWrapper>
            <Grid xs={12} container justify="center" alignItems="center" classes={{root:"grid"}}>
                <Grid xs={11} md={6} lg={5}>
                    <Paper classes={{root:"loginPaper"}}>
                        <div className="wrapper">

                        
                        <div className="heading">
                            Hello my name is Sync

                        </div>
                        <p className="para">
                        Who are you? Do we already know each other?
                        </p>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="login or email">
                            </SiteLabelTextField>

                        </div>
                        <div style={{paddingTop:"20px"}}>
                        <SiteLabelTextField placeholder="Password">
                            </SiteLabelTextField>
                        </div>
                        <div className="error" style={{paddingTop:"10px"}}>
                            Error: Lorem ipsum dolor sit amet!

                        </div>
                        <div style={{paddingTop:"20px"}} className="buttons">
                            <div style={{width:"47%"}}>
                            <CustomButton redButton>
                                Yes, To Login!
                            </CustomButton>
                            </div>
                          <div style={{width:"47%"}}>
                          <CustomButton >
                               No, To Register!  
                            </CustomButton>
                          </div>
                        </div>

                        <div style={{paddingTop:"20px"}}>
                        Forget your password?    
                        </div>
                        </div>
                    </Paper>


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
display:flex;
align-items:center;
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