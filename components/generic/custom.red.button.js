import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function CustomRedButton(props) {
    const {children} = props;
    return (
        <ButtonWrapper>
             <Button classes={{root:"btn"}} variant="contained">
                 {
                     children
                 }

             </Button>
        </ButtonWrapper>
    )
}
const ButtonWrapper = styled.div`
width:100%;
.btn{
    font-family: 'Mulish', sans-serif;
    background-color:#C0222C;
    border-radius:7px;
    font-size:18px;
        font-weight:400;
        color:#CFD7EA;
}
.btn:hover{
    background-color:#C66A78;
}
`