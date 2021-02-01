import React from 'react'
import Header from '../Header/header';
import styled from 'styled-components';
export default function BaseLayout(props) {
    const {children} = props;
    return (
        <BaseLayoutWrapper>
            <Header/>
            {
                children
            }
                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Mulish', sans-serif;
          background-color:#1E2128;
          
        
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </BaseLayoutWrapper>
    )
}

const BaseLayoutWrapper = styled.div`
background-color: #1E2128;
width: 100%;
height:100%;
`