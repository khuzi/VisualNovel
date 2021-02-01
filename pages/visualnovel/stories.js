import React,{useState} from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CustomRedButton from '../../components/generic/custom.red.button';
import { IsMobileWidth, IsTabletWidth } from '../../components/util/util';
import Story from '../../components/Story/story';
import BaseLayout from '../../components/layouts/base.layout';
export default function Stories() {
    const [story, setStory] = useState(false)
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    return (
        <BaseLayout>

        <StoriesWrapper>
            <Grid className="wrapper" xs={12}>
                <Grid xs={12} container justify="space-between">
                    <Grid xs={12} lg={4} container justify={(mobileWidth|tabletWidth) ? "center" :""}>
                        <div>
                            <CustomRedButton>
                                Back to Stories
                            </CustomRedButton>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={4} container justify="center" style={(mobileWidth|tabletWidth) ? {paddingTop:"20px"}: null}>
                        <div className="tabWrapper">
                            <div className="tab" onClick={()=> setStory(true)} style={!story ? { backgroundColor: "#181A21" } : null}>
                                <div>
                                    Story
                                </div>
                            </div>
                            <div className="tab" onClick={()=> setStory(false)} style={story ? { backgroundColor: "#181A21" } : null}>
                                <div>
                                    Comments
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} lg={4} container justify={(mobileWidth|tabletWidth) ? "center" :"flex-end"} style={(mobileWidth|tabletWidth) ? {padding:"20px"}: null}>
                        <div>
                            <CustomRedButton>
                                Share
                            </CustomRedButton>
                        </div>
                    </Grid>
                </Grid>
                {
                    story ?  <Story/> : null
                }
               
              
            </Grid>
        </StoriesWrapper>
        </BaseLayout>
    )
}
const StoriesWrapper = styled.div`
max-height:100%;
width:100%;
padding:50px 0px;
background-color: #1E2128;
color:#616776;
font-family: 'Mulish', sans-serif;
.wrapper{
    width:95%;
    margin:auto;
    height: 100%;
}
.tab{
    display:flex;
   justify-content:center;
   align-items:center;
   background-color:#C0222C;
   width:160px;
   height:42px;
    font-size:15px;
    font-weight:400;
    color:#CFD7EA;
    cursor: pointer;
}
.tabWrapper{
    display:flex;
}
`
