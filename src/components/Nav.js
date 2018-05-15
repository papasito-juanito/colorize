import React from 'react';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';
import { Link } from 'react-router-dom';

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

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

`

const DropDown = styled.div`
    float: inherit;
    overflow: hidden;
    &:hover {
        background-color: red;
        ${DropDownContent}{
            display: block
        }
    }
`
const DropBtn = styled.button`
    font-size: 16px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
`
const StyledLink = styled(Link)`
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
        background-color: #ddd;
    }
    &:visited {
        color: black;
        text-decoration: none;
    }  
`


const Nav = () => {
    return (
        <NavContatiner>
            <NavLeft>Colorize</NavLeft>
            <NaveRightContainer>
                 <DropDown>
                     <DropBtn>My Lips</DropBtn>
                     <DropDownContent>
                         <StyledLink to="/wishlist" style={{ textDecoration: 'none' }}> 위시리스트 </StyledLink>
                         <StyledLink to="/review" style={{ textDecoration: 'none' }}> 내리뷰 </StyledLink>
                         <StyledLink to="/login" style={{ textDecoration: 'none' }}> 로그인 </StyledLink>
                     </DropDownContent>
                 </DropDown>    
                <NaveRightImage src={lipImage}/>
            </NaveRightContainer>
        </NavContatiner>
    );
};

export default Nav;