import React from 'react'
import styled from 'styled-components';
import Rating from '@material-ui/lab/Rating';
import AlertDialog from './open.dialog';

export default function Card(props) {



    const {title,assets,rate} = props;
    return (
        <CardWrapper>
            <div className="wrapper">


                <div className="top">
                    <div>
                        {
                            title
                        }
                </div>
                    <div>
                        {
                            assets
                        }
                       
                </div>

                </div>
                <div className="bottom">
                    <div>
                        <Rating className="rating"/>
                    </div>
                    <div className="rateWrapper">
                    <span className="rate">
                       {
                           rate
                       }
                    </span>
                    <img src="/assets/whiteBin.png" style={{cursor:"pointer"}} onClick={props.onClick}>
                    </img>
                    <AlertDialog open={props.open} onClose={props.onClose} onClick={props.onClose}/>
                </div>
                </div>
           

            </div>

        </CardWrapper>
    )
}
const CardWrapper = styled.div`
width:332px;
height:218px;
background-image:url('/assets/card.png');
padding:10px;
font-weight:600;
max-width:100%;
color:#CFD7EA;
.top{
    display:flex;
    justify-content:space-between;
    height:50%;
    
}
.bottom{
  height:50%;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
}
.wrapper{
    height:100%;
}
.rateWrapper{
    display:flex;
    align-items:center;
}
.rating{
    font-size:18px;
    color: #CFD7EA
}
.MuiRating-iconEmpty {
    color: #616776;
}
.rate{
    padding-right:10px;
    font-weight:bold;
    font-size:18px;
}

`