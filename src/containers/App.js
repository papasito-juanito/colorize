import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {injectGlobal} from 'styled-components'
import Nav from '../components/Nav'

import HomeContainer from './HomeContainer'
import ItemListContainer from './ItemListContainer'
import NotMatch from './NotMatch'


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
                        <Route exact path="/" component={HomeContainer}/>
                        <Route path="/items" component = {ItemListContainer}/>
                        <Route component={NotMatch}/>
                    </Switch>
                </div>
                </Router>

        );
    }
}

export default App;
