import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { IsMobileWidth, IsTabletWidth } from '../util/util';
import Paper from '@material-ui/core/Paper';


export default function Story() {
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    return (
        < Wrapper>
             <Grid xs={12} container justify="center" style={{ marginTop: "10px" }}>
                    <Grid xs={12} md={8}>
                        <img style={{ maxWidth: "100%" }} src="/assets/room.png" />
                    </Grid>
                </Grid>
                <Grid xs={12} container justify="center">
                        <Grid xs={12} md={7}>
                            <Paper classes={{root:"paper"}}>
                                <p>
                                Welcome to this POC, it should show you the general idea and possibilities within our Visual Novel Editor
                                </p>
                            </Paper>
                        </Grid>  
                </Grid>
                <Grid xs={12} style={{marginTop:"10px"}} container justify="center">
                        <Grid xs={12} md={7} container alignItems="center">
                            <div className={(tabletWidth | mobileWidth) ? "mobileChat": "chat"}>
                                <img src="/assets/duoChat.svg"/>
                            </div>
                            <Paper classes={(tabletWidth | mobileWidth) ? {root:"mobileRedPaper"} :  {root:"redPaper"}}>
                               <div>
                                   Option 1
                               </div>
                            </Paper>
                        </Grid>  
                </Grid>
                <Grid xs={12}  style={{marginTop:"10px"}} container justify="center">
                        <Grid xs={12} md={7} container alignItems="center">
                            <div className={(tabletWidth | mobileWidth) ? "mobileChat": "chat"}>
                                <img src="/assets/duoChat.svg"/>
                            </div>
                            <Paper classes={(tabletWidth | mobileWidth) ? {root:"mobileRedPaper"} :  {root:"redPaper"}}>
                               <div>
                                   Option 2
                               </div>
                            </Paper>
                        </Grid>  
                </Grid>
            
        </ Wrapper>
    )
}

const Wrapper = styled.div`
.paper{
    background: #181A21;
    border-radius:10px;
    color:#CFD7EA;
    padding:10px 0px;
    text-align:center;
}
.chat{
    width:8%;
}
.mobileChat{
    display:none;
}
.redPaper{
    background-color:#C0222C;
    border-radius:10px;
    color:#CFD7EA;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:92%;
    padding:20px 0px;
}
.mobileRedPaper{
    background-color:#C0222C;
    border-radius:10px;
    color:#CFD7EA;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width:100%;
    padding:20px 0px;
}

`