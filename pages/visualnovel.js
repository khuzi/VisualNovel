import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import SiteLabelTextField from '../components/generic/site.label.textfield/site.label.textfield/site.label.textfield';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BaseLayout from '../components/layouts/base.layout';
import { IsMobileWidth, IsTabletWidth } from '../components/util/util';
import Link from 'next/link';

export default function VisualNovel() {
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    return (
        <BaseLayout>
      
        <VisualWrapper>
          <Grid className="wrapper" xs={12}>
              <Grid xs={12} container alignItems="center" >
                  <Grid xs={12} lg={4} container justify={(mobileWidth|tabletWidth) ? "center" :""}>
                      <div style={{paddingRight:"20px"}}>
                          <img src="/assets/redbook.png"/>
                      </div>
                      <div>
                      <img src="/assets/book.png"/>
                      </div>

                  </Grid>
                  <Grid xs={12} lg={4} container justify="center" style={(mobileWidth|tabletWidth) ? {paddingTop:"20px"}: null}>
                  <div className="site">
                            <SiteLabelTextField label={<img src="/assets/search.svg" />} placeholder="search..." />
                        </div>
                  </Grid>
                  <Grid xs={12} lg={4} container justify={(mobileWidth|tabletWidth) ? "center" :"flex-end"} style={(mobileWidth|tabletWidth) ? {paddingTop:"20px"}: null}>
                  <div className="popper" >
                            <div style={{ paddingRight: "15px" }}>
                                Category
                            </div>
                            <div>
                                <img src="/assets/downArrow.svg" />
                            </div>
                        </div>
                  </Grid>
              </Grid>
              <Grid xs={12} container justify="center">
                  <Grid xs={12} md={10} lg={8}>
                      <Paper classes={{root:"paper"}}>
                          <div className="paperWrapper">
                              <div className="heading">
                                  Title
                              </div>
                              <div className="para">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                              </div>
                              <div>
                             <div >
                           <Link href="/visualnovel/stories">
                              <Button  classes={{root:"btn"}} variant="contained">
                                  <div className="book">
                                  <img src="/assets/openbook.png"/>
                                  <div className="text">
                                    
                                      READ
                                  </div>
                                  </div>
                              </Button>
                              </Link>
                              <Button classes={{root:"outLine"}}  variant="outlined">
                                  <div className="book">
                                  <img src="/assets/arrow.png"/>
                                  <div className="text">
                                     Share
                                  </div>
                                  </div>
                              </Button>
                              </div>
                          </div>
                          <div >
                              <Button classes={{root:"tag"}} style={{marginRight:"20px",marginTop:"20px"}} variant="contained">
                                  Tag 1
                              </Button>
                              <Button classes={{root:"tag"}} style={{marginRight:"20px",marginTop:"20px"}} variant="contained">
                                  Tag 2
                              </Button>
                              <Button classes={{root:"tag"}} style={{marginRight:"20px",marginTop:"20px"}}  variant="contained">
                                  Tag 3
                              </Button>
                          </div>
                        </div>
                      </Paper>
                  </Grid>

              </Grid>
          </Grid>
        </VisualWrapper>
        </BaseLayout>
        
    )
}


const VisualWrapper = styled.div`
height:93vh;
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
.site{
    width:100%;
}
.popper{
    display:flex;
    align-items:center;
    
}
.paper{
    background: #181A21;
    border-radius:10px;
    color:#CFD7EA;
    padding:15px 0px;
    margin-top:40px;
   .heading{
        font-weight:600;
        font-size:28px;
    
    }
    .para{
        padding-top:15px;
        font-size:16px;
        font-weight:600;
        color:#626877;
    }
}
.paperWrapper{
    width:95%;
    margin:auto;
}
.btn{
    background-color:#C0222C;
    border-radius:7px;
    margin-right:20px;
    margin-top:20px;
}
.btn:hover{
    background-color:#C66A78;
}
.book{
    display:flex;
    align-items:center;
    .text{
        font-size:25px;
        font-weight:400;
        color:#CFD7EA;
        padding-left:10px;
    }
}
.outLine{
    border:3px solid #C0222C;
    padding:3px 15px;
    margin-top:20px;
}
.outLine:hover{
    border:3px solid #C66A78;
}
.tag{
    font-weight:600;
    font-style:14px;
    padding:2px 30px;
    background-color:#616776;
}
`