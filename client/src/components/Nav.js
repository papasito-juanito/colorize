// Global import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import axios from 'axios';
import { Button } from 'antd';

// Local import
import { url } from '../config';
import history from '../utils/history';
import Login from './user/Login'
import lipImage from '../assets/lipImage.png';
import neon from '../assets/neon.png';
import profile from '../assets/profile.png';
import { Avatar } from 'antd';
import './Nav.css';




const NavContainer = styled.header`
  background-color: black;
  height: 70px;
  width: 100%;
  top:0;
  z-index:4;
  position: fixed
  display: flex;
  flex-direction: row;
  transition: top 0.3s;
  align-items: center;

  @media (max-width: 768px) {
      height: 50px;
  }
`
const NavLink = styled(Link)`
`

const Logo = styled.img`
  object-fit: scale-down;
  max-width: 50%;
  max-height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const NavRightContainer = styled.div`
  // border: solid blue 3px;
  height: 100%;
  position: absolute;
  right: 15px;
  cursor: pointer;
  vertical-align: middle;
`
const Search = styled.input`
  margin-right: 15%;
`

const Menu = styled.div`
  object-fit: scale-down;
  margin-left: 2%
	// border: solid red 3px;
`

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
`

const SideAnchor = styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size:2.5vw
  font-size:calc(12px + 1.5vw);
  font-family: 'Roboto';
  font-weight: 200;
  color: white;
  display: block;
  transition: 0.1s;
  &:hover {
      color: white;
      text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
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
  color: white;
  font: 2rem arial, sans-serif;
  position: absolute;
  right: 5px;
  text-decoration: none;
  text-shadow: 0 1px 0 #fff;
  top: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    text-shadow: 0 0 5px #EB509F, 0 0 10px #EB509F, 0 0 20px #EB509F, 0 0 30px #EB509F, 0 0 40px #EB509F;
}
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
      item: [],
      selectedID: [],
      value: '',
    }
  }

  // getData = () => {
  //   axios.get(`${url}/api/item/get/search`)
  //   .then((response) => {
  //     this.setState({ item: response.data.rows });
  //   })
  // }
  
  // handleSearch = () => {
  //   const { value, item } = this.state;
  //   const filteredItems = item.filter((i) => i.label.toLowerCase().includes(value));
  //   console.log(filteredItems, "%^#$%^#$%*%^*^");
  //   this.getID(filteredItems);
  // }

  openNav = () => {
    ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '20vw' 
    ReactDOM.findDOMNode(this.refs.overlay).style.display = 'block'
    if(document.body.clientWidth<='1024'){
      ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '30vw' 
    }
    if(document.body.clientWidth<='414'){
      ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '60vw' 
    }
    if(document.body.clientWidth<='375'){
      ReactDOM.findDOMNode(this.refs.mySidenav).style.width = '60vw' 
    }
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

  // getID = (filteredItems) => {
  //   var link = '';
  //   const elements = filteredItems;
  //   // var elements = document.getElementsByClassName("undefined cell-enabled cell-selected");
  //   for (var i=0; i<elements.length; i++) {
  //     link = link + elements[i].id + '&';
  //   }
  //   console.log('777777777777&&&&&&&&&&7^%^&$654^',link);
  //  link = link.slice(0, -1);
  //   if(link.length === 0){
  //     alert('선택하신상품이없습니다')
  //   } else {
  //     window.location.href = `/items/${link}?sort=rating`;
  //     // this.props.history.push(`/items/${link}?sort=rating`);
  //   }
  // }

  componentDidMount(){
    // this.getData();
    window.addEventListener('scroll',this.hideHeader());
  }

  render(){
    console.log('######this.state.selectedID@#@#@######', this.state.selectedId);
      console.log('navnavnav', this.props);   
      const { isLogined, handleLogout } = this.props
      return (        
        <NavContainer id="navbar">
        <Overlay ref='overlay' onClick={this.closeNav}/>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Logo src={neon} alt={"Colorize"}/>
        </NavLink>
        <Menu>
        <Avatar size="large" icon="user" onClick={this.openNav} />
        </Menu>
        
        {/* <Search type="text" placeholder="Search"/> */}
          {/* <input type="search" placeholder="Search" /> */}
          {/* <div className="search-container">
            <Autocomplete
              items={this.state.item}
              className="search-bar"
              shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={item => item.label}
              type="search"
              renderItem={(item, highlighted) => {
                return (<div
                  key={item.id}
                  style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                >
                  {item.label}
                </div>)       
              }
              } 
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              onSelect={value => this.setState({ value })}
            />
            <Button onClick={this.handleSearch} className="search-button" shape="circle" icon="search" />
          </div> */}
          <NavRightContainer>
              {isLogined ? 
              <SideNav ref="mySidenav" >
                <SideClose href="javascript:void(0)" onClick={this.closeNav}>&times;</SideClose>
                <SideAnchor ref='Anchor' to="/" onClick={this.closeNav}>Home</SideAnchor>
                <SideAnchor ref='Anchor' to="/myinfo" onClick={this.closeNav}>My Info</SideAnchor>
                <SideAnchor ref='Anchor' to="/wishlist" onClick={this.closeNav}>Wish List</SideAnchor>
                <SideAnchor ref='Anchor' to="/review" onClick={this.closeNav}>My Review</SideAnchor>
                <SideAnchor ref='Anchor' to={this.props.location.pathname + this.props.location.search} onClick={()=>{this.closeNav(); handleLogout()}}>Logout</SideAnchor>
              </SideNav> :
              <SideNav ref="mySidenav" >
                <SideClose onClick={()=>{this.closeNav()}}>&times;</SideClose>
                <SideAnchor ref='Anchor' to="/" onClick={()=>{this.closeNav();}}>Home</SideAnchor>
                <SideAnchor ref='Anchor' to={{pathname: "/login", state: {from: {pathname: '/myinfo'}}}} onClick={()=>{this.closeNav();}}>My Info</SideAnchor>
                <SideAnchor ref='Anchor' to={{pathname: "/login", state: {from: {pathname: '/wishlist'}}}} onClick={()=>{this.closeNav();}}>Wish List</SideAnchor>
                <SideAnchor ref='Anchor' to={{pathname: "/login", state: {from: {pathname: '/review'}}}} onClick={()=>{this.closeNav();}}>My Review</SideAnchor>
                <SideAnchor ref='Anchor' replace={true} to={{pathname: "/login", state: {from: this.props.location}} } onClick={()=>{this.closeNav();}}>Login</SideAnchor>
              </SideNav>
              }     
        </NavRightContainer>
      </NavContainer>
    );   
  }
};

export default withRouter(Nav)
