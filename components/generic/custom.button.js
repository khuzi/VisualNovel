import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
export default function CustomButton(props) {
    const {redButton} = props;
    return (
        <ButtonWrapper>
            <Button variant="contained" style={{width:"100%"}} classes={redButton ?{root:"redBtn"} :{root:"btn"}}>
                {
                props.children
            }
            </Button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
font-family: 'Mulish', sans-serif;
width:100%;
.btn{
    background-color:#3F4451;
    color:#ffffff;
    font-weight:700;
    font-size:16px;
    font-family: 'Mulish', sans-serif;
    padding-top:10px;
    padding-bottom:10px;
    text-transform:capitalize;
}
.btn:hover{
    color:black;
}
.redBtn{
    font-family: 'Mulish', sans-serif;
    background-color:#C0222C;
    font-size:16px;
    font-weight:700;
    padding-top:10px;
    padding-bottom:10px;
    text-transform:capitalize;
    color:#CFD7EA;
}
.redBtn:hover{
    background-color:#C66A78;
}
`