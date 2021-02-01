import React from 'react';
import styled from 'styled-components';
export default function Banner(props) {
    const {children} = props;
    return (
        <BannerWrapper>
           {
               children
           } 
        </BannerWrapper>
    )
}
const BannerWrapper = styled.div`
width:100%;
background-image:url('/assets/add.png') ;
background-repeat: no-repeat;
height: 300px;

` 