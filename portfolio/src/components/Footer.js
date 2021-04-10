import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    text-align:center;
    padding-top: 20px;
    width: 100%;
    height: 100px;
    background-color:#ecf0f1;
    line-height:2;
    color: #aaa;
`;

const Copyright = styled.p`
    font-size:18px;
    color: #999;
`;


const footer = () => {
    return (
        <Footer>
            <Copyright>© 2021 Copyright <span style={{ color: "#27ae60" }}>Yooncastle</span></Copyright>
        </Footer>
    )
}
export default footer;