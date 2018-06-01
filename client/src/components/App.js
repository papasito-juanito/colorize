/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import {injectGlobal} from 'styled-components'

import Nav from '../components/Nav'
import Home from './home/Home'
import ItemList from './itemList/ItemList'
import NotMatch from './NotMatch'
import WishList from './wishList/WishList'
import MyContent from './review/MyContent'
import MyReviews from './review/MyReviews'
import Signup from './user/Signup'
import Detail from './detail/Detail'
import MyInfo from './MyInfo'

import axios from 'axios';
import { url } from '../config';
import Login from './user/Login'
import withLoginUser from './withLoginUser'

injectGlobal`
  body{
    padding: 0;
    margin:0;
  }
`

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
     <Route {...rest} render={(props) => {
        const {isLoading, isLogined} = rest         
        return isLoading ? <div>loading</div> : isLogined ?
         <Component {...props} {...rest} />
         : <Redirect to ={{
             pathname: '/login',
             state: { from: props.location }
           }}/>
     }} />
 )}

class App extends Component {
    constructor(){
        super()
        this.state = {
            isLogined: false,
            isLoading: true
        }
    }

    handleLoginUser = () => {
        this.setState({
            isLogined: true
        })
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('status')
        this.setState({
            isLogined: false
        })
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
            axios.get(`${url}/api/user/get/check`, {headers: {'token': token}})
            .then(res => {
                console.log('app', res);
                if(res.data.success === true){
                    this.setState({
                        isLoading: false,
                        isLogined: true
                    })
                } else{
                    console.log('appfailfailresresres', res);
                    this.setState({
                        isLoading: false,
                        isLogined: false
                    })
                }
            })
    }
        
    render() {
        console.log('app login', this.state);
        const {isLoading, isLogined} = this.state
        return (
            <Router>
                <div>
                <Nav isLogined={isLogined} handleLogout={this.handleLogout}/>   
                    <Switch> 
                        <Route exact path="/" component={Home}/>
                        <Route path='/review' component={MyReviews} />
                        <Route path="/signup" component={Signup}/>
                        <Route exact path="/items/:id" component={ItemList}/>
                        <Route path="/login" 
                        render={(props)=><Login handleLoginUser={this.handleLoginUser}/>}/>
                        <Route path="/items/detail/:id" 
                        render={(props)=><Detail {...props} isLogined={isLogined}/>} />
                        <PrivateRoute path="/myinfo" isLoading={isLoading} isLogined={isLogined} handleLogout={this.handleLogout} handleLoginUser={this.handleLoginUser} component={MyInfo}/>
                        <PrivateRoute path='/review' isLoading={isLoading} isLogined={isLogined} handleLogout={this.handleLogout}  handleLoginUser={this.handleLoginUser} component={MyReviews} />
                        <PrivateRoute path='/wishlist' isLoading={isLoading} isLogined={isLogined} handleLogout={this.handleLogout} handleLoginUser={this.handleLoginUser} component={WishList} />
                    </Switch>    
                </div>
            </Router>
        );
    }
}

export default App;



