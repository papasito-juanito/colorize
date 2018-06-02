/* eslint-disable */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';
import { Link, withRouter } from 'react-router-dom';
import Login from './user/Login'

import axios from 'axios';
import { url } from '../config';
import history from '../utils/history';
import neon from '../assets/neon.png';
import './Nav.css';

const NavContainer = styled.header`
    background-color: black;
    height: 10%;
    width: 100vw;
    top:0;
    z-index:4;
    position: fixed
    display: flex;
    flex-direction: row;
    transition: top 0.3s;
`
const NavLink = styled(Link)`
`
const Logo = styled.img`
    object-fit: scale-down;
    max-width: 100%;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const NaveRightContainer = styled.div`
    position: absolute;
    right: 5%
`
const Search = styled.input`
    margin-right: 15%;
`
const MenuWrapper = styled.div`
    overflow: hidden;
    font-size: 3.5rem;
    cursor: pointer

`

const Menu = styled.div`
    color: white
`

const SideNav = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 4;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`

const SideAnchor = styled(Link)`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    &:hover {
        color: #f1f1f1;
    }
`
const LoginAnchor = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    &:hover {
        color: #f1f1f1;
    }
`
const SideClose = styled.a`
    color: #777;
    font: 2rem arial, sans-serif;
    position: absolute;
    right: 5px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 5px;
    cursor: pointer;
`
 
const Overlay = styled.div`
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:4;
    background-color: rgba(0,0,0,0.5);
    transition: 0.5s;
`

class Nav extends Component {
    constructor(props){
        super()
        this.state = {
            closeAll: false,
            isHide: false,
        }
    }

    openNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '20%' 
        ReactDOM.findDOMNode(this.refs.overlay).style.display = 'block'
    }

    closeNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '0px'
        ReactDOM.findDOMNode(this.refs.overlay).style.display = 'none'
    }

    hideHeader= () => {
        var prevScrollpos = window.pageYOffset;
        return function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos >= currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-10%";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.hideHeader());
    }

    render(){
        console.log('navnavnav', this.props);   
        const { isLogined, handleLogout } = this.props
        return (        
            <NavContainer id="navbar">
            <Overlay ref='overlay' onClick={this.closeNav}/>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Logo src={neon} alt={"Colorize"}/>
            </NavLink>
            {/* <Search type="text" placeholder="Search"/> */}
            <form id="demo-2">
	            <input type="search" placeholder="Search"/>
            </form>
            <NaveRightContainer>
                 <MenuWrapper>
                 <Menu onClick={this.openNav} >
                    &#9776;
                 </Menu>
                    {isLogined ? 
                    <SideNav ref="mySidenav" >
                        <SideClose href="javascript:void(0)" onClick={this.closeNav}>&times;</SideClose>
                        <SideAnchor to="/" onClick={this.closeNav}>Home</SideAnchor>
                        <SideAnchor to="/myinfo" onClick={this.closeNav}>My Info</SideAnchor>
                        <SideAnchor to="/wishlist" onClick={this.closeNav}>Wish List</SideAnchor>
                        <SideAnchor to="/review" onClick={this.closeNav}>My Review</SideAnchor>
                        <SideAnchor to={this.props.location.pathname + this.props.location.search} onClick={()=>{this.closeNav(); handleLogout()}}>Logout</SideAnchor>
                    </SideNav> :
                    <SideNav ref="mySidenav" >
                        <SideClose onClick={()=>{this.closeNav()}}>&times;</SideClose>
                        <SideAnchor to="/" onClick={()=>{this.closeNav();}}>Home</SideAnchor>
                        <SideAnchor to={{pathname: "/login", state: {from: {pathname: '/myinfo'}}}} onClick={()=>{this.closeNav();}}>My Info</SideAnchor>
                        <SideAnchor to={{pathname: "/login", state: {from: {pathname: '/wishlist'}}}} onClick={()=>{this.closeNav();}}>Wish List</SideAnchor>
                        <SideAnchor to={{pathname: "/login", state: {from: {pathname: '/review'}}}} onClick={()=>{this.closeNav();}}>My Review</SideAnchor>
                        <SideAnchor replace={true} to={{pathname: "/login", state: {from: this.props.location}} } onClick={()=>{this.closeNav();}}>Login</SideAnchor>
                    </SideNav>
                    }     
                 </MenuWrapper>    
            </NaveRightContainer>
        </NavContainer>
      );   
    }
};

export default withRouter(Nav)

