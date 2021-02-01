import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import CustomButton from './custom.button';
import { IsMobileWidth, IsTabletWidth } from '../util/util';
export default function AlertDialog(props) {
    const mobileWidth = IsMobileWidth();
    const tabletWidth = IsTabletWidth();
    return (
        <div>
            <Dialog

                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent style={{ backgroundColor: "#1E2128" }}>
                    <DialogContentText id="alert-dialog-description">
                        <Wrapper>
                            <div className="header">
                                <div className="title" >
                                    Light Foliage V2
                                </div>
                                <span className='cross'>
                                    <img src="/assets/cancel.svg" onClick={props.onClose} style={{ cursor: "pointer" }} />
                                </span>
                            </div>
                            <div className={mobileWidth ? "mobileWrapper" : "wrapper"}>


                                <div className="">

                                    <div style={{ width: "300px" }}>
                                        <div>
                                            <img style={{ maxWidth: "100%" }} src="/assets/main.image.png" />
                                        </div>
                                        <div className="smallImages" >
                                            <div>
                                                <img style={{ maxWidth: "100%" }} src="/assets/p1.png" />
                                            </div>
                                            <div>
                                                <img style={{ maxWidth: "100%" }} src="/assets/p2.png" />

                                            </div>
                                            <div>
                                                <img style={{ maxWidth: "100%" }} src="/assets/p3.png" />
                                            </div>
                                            <div>
                                                <img style={{ maxWidth: "100%" }} src="/assets/p4.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="edit">
                                    <div style={{ paddingLeft: "20px" }}>

                                        <div className="buttons" style={{ paddingTop: "15px" }}>
                                            <div>
                                                <CustomButton>
                                                    Create New Marketplace Item
                                            </CustomButton>
                                            </div>
                                            <div style={{ paddingTop: "15px" }}>
                                                <CustomButton>
                                                    Edit Marketplace Data
                                            </CustomButton>
                                            </div>
                                            <div style={{ paddingTop: "15px" }}>
                                                <CustomButton>
                                                    Upload Files To Marketplace
                                            </CustomButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Wrapper>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

const Wrapper = styled.div`
font-family: 'Mulish', sans-serif;
    .title{
     font-weight:600;
     size:18px;
     color:#CFD7EA;

    }

.MuiDialog-paperWidthSm {
    max-width: 650px;
}
.wrapper{
    display:flex;
width:100%;
}
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:20px;
}
.smallImages{
    display:flex;
}
.edit{
    width:100%;
    max-width:100%
}
.cross{
    display:flex;
    justify-content:flex-end;
}

`