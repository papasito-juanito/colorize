import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Signup, Login, Color, Item } from './containers';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Switch>
          <Route path="/login/:id" component={Login}/>
          <Route path="/login" component={Login}/>
        </Switch>
        <Route path="/color" component={Color}/>
        <Route path="/item" component={Item}/>
      </div>
    );
  }
}

export default App;
