import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';
import { Link } from 'react-router-dom';
import Login from './user/Login'

import axios from 'axios';
import { url } from '../config';

const NavContatiner = styled.header`
    background-color: black;
    height: 10%;
    width: 100vw;
    top:0;
    z-index:1;
    position: fixed
    display: flex;
    flex-direction: row;
    transition: top 0.3s;
`

const Colorize = styled.div`
    margin: auto
    text-align: center;
`

const NavLink = styled(Link)`
   
    font-size: 3rem
    &:visited {
        color: white;
        text-decoration: none;
    }  
`

const NaveRightContainer = styled.div`
    position: absolute;
    right: 5%
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
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
`

const SideAnchor = styled.a`
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
    z-index:1
    background-color: rgba(0,0,0,0.5);
    transition: 0.5s;
`

class Nav extends Component {
    constructor(props){
        super()
        this.state = {
            loginClicked: false,
            isLogined: false,
            closeAll: false,
            isHide: false
        }
    }

    openNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '20%' 
        ReactDOM.findDOMNode(this.refs.overlay).style.display = 'block'
    }

    closeNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '0px'
        ReactDOM.findDOMNode(this.refs.overlay).style.display = 'none'
        // this.setState({
        //     closeAll: true
        // })
    }

    renderLogin = () => {
        this.setState({
            loginClicked: !this.state.loginClicked,
            // isLogined: this.state.isLogined ? false : this.state.isLogined
        })
    }

    handleLoginUser = () => {
        this.setState({
            isLogined: true
        })
    }

    hideNav = () => {
        var prevScrollpos = window.pageYOffset;
        return function() {
            var currentScrollPos = window.pageYOffset;
            console.log('current', currentScrollPos);
            if (prevScrollpos >= currentScrollPos) {
                console.log('IFIFIFIFIFIFIFIcurrent', currentScrollPos);
                document.getElementById("navbar").style.top = "0";
            } else {
                console.log('prev', prevScrollpos);
                document.getElementById("navbar").style.top = "-10%";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        this.setState({
            isLogined: false
        })
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        window.addEventListener('scroll',this.hideNav());
        if(token){
            axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
            .then(res => {
                console.log('nav', res);
                if(res.data.success === true){
                    this.setState({
                        isLogined: true
                    })
                }
            })
        }
    }

    render(){
        console.log('loginedloginedloginedloginedlogined', this.state.isLogined);
        return (        
            <NavContatiner id="navbar">
            <Overlay ref='overlay' onClick={this.closeNav}/>
            <Colorize>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span>Colorize</span></NavLink>
            </Colorize>
            <NaveRightContainer>
                 <MenuWrapper>
                 <Menu onClick={this.openNav} >
                    &#9776;
                 </Menu>
                    {this.state.isLogined ? 
                    <SideNav ref="mySidenav" >
                        <SideClose href="javascript:void(0)" onClick={this.closeNav}>&times;</SideClose>
                        <SideAnchor href="/">Home</SideAnchor>
                        <SideAnchor href="/myinfo">My Info</SideAnchor>
                        <SideAnchor href="/wishlist">Wish List</SideAnchor>
                        <SideAnchor href="/review">My Review</SideAnchor>
                        <SideAnchor onClick={()=>{this.closeNav(); this.handleLogout()}}>Logout</SideAnchor>
                    </SideNav> :
                    <SideNav ref="mySidenav" >
                        <SideClose onClick={()=>{this.closeNav()}}>&times;</SideClose>
                        <SideAnchor href="/">Home</SideAnchor>
                        <SideAnchor onClick={()=>{this.renderLogin(); this.closeNav()}}>My Info</SideAnchor>
                        <SideAnchor onClick={()=>{this.renderLogin(); this.closeNav()}}>Wish List</SideAnchor>
                        <SideAnchor onClick={()=>{this.renderLogin(); this.closeNav()}}>My Review</SideAnchor>
                        <SideAnchor onClick={()=>{this.renderLogin(); this.closeNav()}}>Login</SideAnchor>
                    </SideNav>
                    }     
                 </MenuWrapper>    
                {this.state.loginClicked ? 
                <Login renderLogin={this.renderLogin} 
                    handleLoginUser={this.handleLoginUser}
                /> : null}
            </NaveRightContainer>
        </NavContatiner>
      );   
    }
};

export default Nav;

