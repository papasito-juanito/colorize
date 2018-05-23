import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {injectGlobal} from 'styled-components'
import Nav from '../components/Nav'

import Home from './home/Home'
import ItemList from './ItemList/ItemList'
import NotMatch from './NotMatch'
import WishList from './wishList/WishList'
import Review from './review/Review'
// import Login from './user/Login'
import Signup from './user/Signup'
import Detail from './detail/Detail'
import MyInfo from './MyInfo'

injectGlobal`
  body{
    padding: 0;
    margin:0;
  }
`

class App extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <Router>
                <div>
                <Nav/>   
                    <Switch> 
                        <Route exact path="/" component={Home}/>
                        <Route path="/wishList" component={WishList}/>
                        <Route path="/review" component={Review}/>
                        <Route path="/signup" component={Signup}/>
                        <Route exact path="/items/:id" component={ItemList}/>
                        <Route path="/items/detail/:id" component={Detail} />
                        <Route path="/myinfo" component={MyInfo}/>
                        <Route component={NotMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
