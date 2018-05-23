import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import lipImage from '../assets/lipImage.png';
import { Link } from 'react-router-dom';
import Login from './user/Login'

const NavContatiner = styled.header`
    background-color: black;
    height: 10%;
    width:100%
    top:0;
    position: fixed;
    z-index:1;
    display: felx;
    flex-direction: row;
`

const Colorize = styled.div`
    margin: auto
    text-align: center;

`

const NavLink = styled(Link)`
    font-size: 5rem
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


class Nav extends Component {
    constructor(props){
        super()
        this.state = {
            loginClicked: false,
            isLogined: false
        }
    }

    openNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '250px' 
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav = () => {
        ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '0px'
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

    render(){
        console.log('nav', this.state.loginClicked);
        return (
            <NavContatiner>
            <Colorize>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
            <span>Colorize</span></NavLink>
            </Colorize>
            <NaveRightContainer>
                 <MenuWrapper>
                 <Menu onClick={this.openNav} >
                    &#9776;
                 </Menu>     
                    <SideNav ref="mySidenav" >
                        <SideClose href="javascript:void(0)" onClick={this.closeNav}>&times;</SideClose>
                        <SideAnchor href="/wishlist">Wish List</SideAnchor>
                        <SideAnchor href="/review">My Review</SideAnchor>
                        <SideAnchor href="/myinfo">My Page</SideAnchor>
                        <SideAnchor onClick={this.renderLogin.bind(this)}>{this.state.isLogined ? 'Logout' : 'Login'}</SideAnchor>
                    </SideNav>
                 </MenuWrapper>    
                {this.state.loginClicked ? <Login renderLogin={this.renderLogin} handleLoginUser={this.handleLoginUser}/> : null}
            </NaveRightContainer>
        </NavContatiner>
      );   
    }
};

export default Nav;

