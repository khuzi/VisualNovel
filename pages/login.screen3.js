import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CustomButton from '../components/generic/custom.button';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';

export default function SignUp() {
    return (
        <LoginScreenWrapper>
            <Grid xs={12} container justify="center" alignItems="center" classes={{root:"grid"}}>
                <Grid xs={11} md={6} lg={5}>
                    <Paper classes={{root:"loginPaper"}}>
                        <div className="wrapper">

                        
                        <div className="heading">
                        Nice to meet new People

                        </div>
                        <p className="para">
                        Could you tell us a bit more about yourself?
                        </p>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="Username">
                            </SiteLabelTextField>

                        </div>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="E-mail">
                            </SiteLabelTextField>

                        </div>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="First Name">
                            </SiteLabelTextField>

                        </div>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="Last Name">
                            </SiteLabelTextField>

                        </div>
                        <div style={{paddingTop:"20px"}}>
                            <SiteLabelTextField placeholder="Company Name">
                            </SiteLabelTextField>

                        </div>
                        <div className="error" style={{paddingTop:"50px"}}>
                            Error: Lorem ipsum dolor sit amet!

                        </div>
                        <div style={{paddingTop:"20px"}} className="buttons">
                            <Grid  xs={6} md={5} lg={4} style={{margin:"auto"}}>
                            <CustomButton redButton>
                              Registration
                            </CustomButton>
                            </Grid>
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
height:100%;
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