import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {injectGlobal} from 'styled-components'
import Nav from '../components/Nav'

import Home from './home/Home'
import ItemList from './ItemList/ItemList'
import NotMatch from './NotMatch'
import WishList from './wishList/WishList'
import Review from './review/Review'
import Login from './user/Login'
import Signup from './user/Signup'
import Detail from './detail/Detail'

injectGlobal`
  body{
    padding: 0;
    margin:0;
  }
`

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                <Nav/>   
                    <Switch> 
                        <Route exact path="/" component={Home}/>
                        <Route path="/wishList" component={WishList}/>
                        <Route path="/review" component={Review}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route exact path="/items" component={ItemList}/>
                        <Route path="/items/detail/:id" component={Detail} />
                        {/* <Route path="/items/detail" component={Detail} /> */}
                        <Route component={NotMatch}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
