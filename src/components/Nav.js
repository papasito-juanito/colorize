import React from 'react';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';

const NavContatiner = styled.header`
    background-color: pink;
    height: 10%;
    width:100%
    top:0;
    position: fixed;
    z-index:1;
`

const NavLeft = styled.h1`
    float: left;
`

const NaveRightContainer = styled.div`
    float: right;
    height:100%
`
const NaveRightImage = styled.img`
    width: 10%
    float: inherit;
`
const NaveRightTexts= styled.h2`
    float:inherit;
`
const NaveRightMy = styled.button`
    float:inherit;
`



const Nav = () => {
    return (
        <NavContatiner>
            <NavLeft>Colorize</NavLeft>
            <NaveRightContainer>
                <NaveRightMy>My Libs</NaveRightMy>
                <NaveRightTexts>로그인, 로그아웃</NaveRightTexts>
                <NaveRightImage src={lipImage}/>
            </NaveRightContainer>
        </NavContatiner>
    );
};

export default Nav;