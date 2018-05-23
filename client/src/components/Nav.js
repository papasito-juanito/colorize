import React, {Component} from 'react';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';
import { Link } from 'react-router-dom';
import Login from './user/Login'

const NavContatiner = styled.header`
    background-color: pink;
    height: 10%;
    width:100%
    top:0;
    position: fixed;
    z-index:1;
`

const NavLink = styled(Link)`
    font-size: 2rem
    float: left;
    &:visited {
        color: black;
        text-decoration: none;
    }  
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
    margin: 0;
`
const StyledLink = styled.a`
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

class Nav extends Component {
    constructor(props){
        super()
        this.state = {
            loginClicked: false
        }
    }

    renderLogin = () => {
        this.setState({
            loginClicked: !this.state.loginClicked
        })
    }

    render(){
        console.log('nav', this.state.loginClicked);
        return (
            <NavContatiner>
            <NavLink to="/" style={{ textDecoration: 'none' }}>Colorize</NavLink>
            <NaveRightContainer>
                 <DropDown>
                     <DropBtn>My Lips</DropBtn>
                        {/* 로그인안한사람 */}
                        <DropDownContent>
                            <StyledLink href="/wishlist" style={{ textDecoration: 'none' }}> 위시리스트 </StyledLink>
                            <StyledLink href="/review" style={{ textDecoration: 'none' }}> 
                            리뷰
                            </StyledLink>
                            <StyledLink onClick={this.renderLogin.bind(this)}>login</StyledLink>
                            <StyledLink href="/myinfo" style={{ textDecoration: 'none' }}> 내 정보 </StyledLink>
                        </DropDownContent>
                        {/* 로그인한사람 */}
                        {/* <DropDownContent>
                            <StyledLink to="/wishlist" style={{ textDecoration: 'none' }}> 위시리스트 </StyledLink>
                            <StyledLink to="/review" style={{ textDecoration: 'none' }}> 
                            </StyledLink>
                            <StyledLink to="/login" style={{ textDecoration: 'none' }}> 로그인 </StyledLink>
                        </DropDownContent> */}
                 </DropDown>    
                <NaveRightImage src={lipImage}/>
                {this.state.loginClicked ? <Login renderLogin={this.renderLogin}/> : null}
            </NaveRightContainer>
        </NavContatiner>
      );   
    }
};

export default Nav;