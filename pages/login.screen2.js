import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/generic/custom.button';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';

export default function ForgetPassword() {
    return (
        <LoginScreenWrapper>
            <Grid xs={12} container justify="center"  alignItems="center" classes={{root:"grid"}}>
                <Grid xs={11} md={6} lg={5}>
                    <Paper classes={{root:"loginPaper"}}>
                        <div className="wrapper">

                        
                        <div className="heading">
                        Forgot your password?

                        </div>
                        <p className="para">
                        Enter your registration email address and we will send you a link to recover your password.
                        </p>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="E-mail">
                            </SiteLabelTextField>

                        </div>
                        <div className="error" style={{paddingTop:"10px"}}>
                            Error: Lorem ipsum dolor sit amet!

                        </div>
                        <div style={{paddingTop:"20px"}} className="buttons">
                            <Grid xs={6} md={5} lg={4} style={{margin:"auto"}}>
                            <CustomButton redButton>
                              Send me a link
                            </CustomButton>
                            </Grid>
                        </div>

                        <div style={{paddingTop:"20px"}}>
                        Thanks! We sent a password recovery link to your e-mail address.  
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