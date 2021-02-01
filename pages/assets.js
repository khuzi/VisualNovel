import React from 'react'
import Grid from '@material-ui/core/Grid';
import { IsMobileWidth, IsTabletWidth } from '../components/util/util';
import Avatar from '@material-ui/core/Avatar';
import Link from 'next/link'
import styled from 'styled-components';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';
import Card from '../components/generic/card';
import AlertDialog from '../components/generic/open.dialog';
import BaseLayout from '../components/layouts/base.layout';
export default function Assets() {
    const [open, setOpen] = React.useState(false);
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <BaseLayout>
        
        <AssetWrapper>
            <Grid className="wrapper">
                <Grid style={{paddingBottom:"20px"}} xs={12} container alignItems="center" justify="space-between">
                    <Grid xs={12} lg={3} container className="icons" justify={(mobileWidth|tabletWidth) ? "center" :""}>
                        <div style={{ marginRight: "20px" }}>
                            <img src="/assets/folder.svg" />
                        </div>
                        <div style={{ marginRight: "20px" }}>
                            <img src="/assets/earth.svg" />
                        </div>
                        <div>
                            <img src="/assets/network.svg" />
                        </div>
                    </Grid>
                    <Grid xs={12} lg={5} container justify="center" alignItems="center" style={(mobileWidth|tabletWidth) ? {paddingTop:"10px"}: null}>
                        <h3 className="subHeading">
                            Assets
                        </h3>
                        <div className="site">
                            <SiteLabelTextField label={<img src="/assets/search.svg" />} placeholder="search..." />
                        </div>
                    </Grid>
                    <Grid xs={12} lg={4} container justify={(mobileWidth|tabletWidth) ? "center" :"flex-end"} style={(mobileWidth|tabletWidth) ? {padding:"20px"}: null}>
                        <div className="popper" style={{ paddingRight: "30px" }}>
                            <div style={{ paddingRight: "15px" }}>
                                Creation process
                        </div>
                            <div>
                                <img src="/assets/downArrow.svg" />

                            </div>
                        </div>
                        <div className="popper" style={{ paddingRight: "30px" }}>
                            <div style={{ paddingRight: "15px" }}>
                                Training
                        </div>
                            <div>
                                <img src="/assets/downArrow.svg" />

                            </div>
                        </div>
                        <div className="popper">
                            <div style={{ paddingRight: "15px" }}>
                                Planings
                        </div>
                            <div>
                                <img src="/assets/downArrow.svg" />

                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid  container spacing={3} justify={mobileWidth ? "center" :"space-between"}>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card open={open} onClick={handleClickOpen} onClose={handleClose}/>
                       
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                    <Grid style={{maxWidth:"100%"}} item lg={2} md={4}>
                        <Card />
                    </Grid>
                </Grid >
            </Grid>
        </AssetWrapper>
        </BaseLayout>
    )
}

const AssetWrapper = styled.div`
color:#616776;
padding:50px 0px;
.wrapper{
    width:95%;
    margin:auto;
    height: 100%;
}
.subHeading{
        color:#CFD7EA;
        font-weight:600;
        padding-right:20px;
        font-size:20px;
     
}
.site{
    width:70%;
}
.popper{
    display:flex;
    align-items:center;
}

`