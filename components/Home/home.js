import React from 'react'
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider'
import Banner from '../generic/banner';
import  Card  from '../generic/card';
import {IsMobileWidth,IsTabletWidth} from '../util/util';
export default function HomePage() {
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    return (
        <HomeWrapper>
            <Grid className="wrapper" container xs={12} alignItems="flex-start" >
                <Grid xs={12} md={tabletWidth ? 12:4}>
                    <Grid>
                        <div className="headingWrapper">
                            <div className="subHeading">
                                Cap News
                            </div>
                            <div className={mobileWidth ? "" : "divider"} />
                        </div>
                        <h4>
                            Sync Update 1.07 V
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate leo egestas tempus varius in nec viverra. Vitae enim ornare praesent eu, ac iaculis nunc...
                            Read More
                        </p>
                        <h4>
                            Version control bug fixed
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate leo egestas tempus varius in nec viverra. Vitae enim ornare praesent eu, ac iaculis nunc...
                            Read More
                        </p>
                        <h4>
                            Announcement of additional functions 1.07 V
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate leo egestas tempus varius in nec viverra. Vitae enim ornare praesent eu, ac iaculis nunc...
                            Read More
                        </p>
                    </Grid>
                    <Grid >
                        <div className="headingWrapper">
                            <h3 className="subHeading">
                                Notifications
                            </h3>
                            <div className={mobileWidth ? "" : "divider"} />
                        </div>
                        <div className="notificaitonItem">
                            <img  style={{paddingRight:"18px"}} src="/assets/notification.svg" />
                            <p>
                                Project Game interface test project has been updated. Wade Warren user made a change in the project.
                            </p>
                        </div>
                        <div className="notificaitonItem">
                            <img  style={{paddingRight:"10px"}} src="/assets/ninja.svg" />
                            <p>
                            You got the title of Ninja.
                            </p>
                        </div>
                        <div className="notificaitonItem">
                            <img  style={{paddingRight:"10px"}} src="/assets/warning.svg" />
                            <p>
                            Your limits are coming to an end. Please increase your limits.
                            </p>
                        </div>
                        <div className="notificaitonItem">
                            <img  style={{paddingRight:"10px"}} src="/assets/message.svg" />
                            <p>
                            You received 4 new letters. Go to Chat
                            </p>
                        </div>
                        <div className="notificaitonItem">
                            <img  style={{paddingRight:"10px"}} src="/assets/chat.svg" />
                            <p>
                            Wade Warren commented on the Game interface test project. 
                            </p>
                        </div>

                    </Grid>
                </Grid>
                <Grid  xs={12} md={tabletWidth ? 12:8} container justify="flex-end" style={(mobileWidth|tabletWidth) ?{ paddingTop:"30px"}: null} >
                    <Grid xs={12} md={tabletWidth ? 12:10}>
                        <Grid >
                            <Banner />
                        </Grid>
                        <h4>
                            New releases
                        </h4>
                        <Grid xs={12} container justify={ mobileWidth ? "center" :"space-between" }>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            <Grid style={{paddingBottom:"10px",maxWidth:"100%"}}>
                            <Card title="Nature Enviournments" assets="Assets" rate="Free" />
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HomeWrapper>
    )
}


const HomeWrapper = styled.div`
height:100%;
width:100%;
padding:50px 0px;
.wrapper{
    width:95%;
    margin:auto;
    height: 100%;
}
.headingWrapper{
    display:flex;
    align-items:center;
    height: 100%;
    width:100%;

    .subHeading{
        color:#CFD7EA;
        font-weight:600;
        padding-right:20px;
        font-size:20px;
        
}

.divider{
   width:75%;
    background-color:#16181E;
    height: 2px;
}
}
h4{
    color:#A8B2CA;
  
}
p{
    color: #616776;
}

.notificaitonItem{
    display:flex;
    
    img{
        margin-right:10px;
    }
}


`