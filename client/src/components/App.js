import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import Nav from '../components/Nav'
import withLoginUser from '../components/withLoginUser'
import Home from './home/Home'
import ItemList from './itemList/ItemList'
import NotMatch from './NotMatch'
import WishList from './wishList/WishList'
import MyContent from './review/MyContent'
// import Login from './user/Login'
import Signup from './user/Signup'
import Detail from './detail/Detail'
import MyInfo from './MyInfo'

import axios from 'axios';
import { url } from '../config';

injectGlobal`
  body{
    padding: 0;
    margin:0;
  }
`

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated ?
                <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        />
    )
}


class App extends Component {
    constructor() {
        super()
        this.state = {
            isLogined: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token) {
            axios.get(`${url}/api/user/get/check`, { headers: { 'token': token } })
                .then(res => {
                    console.log('nav', res);
                    if (res.data.success === true) {
                        this.handleLoginUser()
                    }
                })
        }
    }

    handleLoginUser = () => {
        this.setState({
            isLogined: true
        })
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        this.setState({
            isLogined: false
        })
    }

    render() {
        console.log('app login', this.state.isLogined);

        return (
            <Router>
                <div>
                    <Nav isLogined={this.state.isLogined} handleLoginUser={this.handleLoginUser.bind(this)} handleLogout={this.handleLogout.bind(this)} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/wishList" component={WishList} />
                        <Route path="/review" component={MyContent} />
                        <Route path="/signup" component={Signup} />
                        <Route exact path="/items/:id" component={ItemList} />
                        <Route path="/items/detail/:id" render={(props) => <Detail {...props} isLogined={this.state.isLogined} />} />
                        <Route path="/myinfo" component={MyInfo} />
                        <Route component={NotMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;