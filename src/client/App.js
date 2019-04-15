import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from 'commons/Sidebar';

import Main from 'pages/Main';
import Notice from 'pages/Notice';
import User from 'pages/User';
import UserInfo from 'pages/UserInfo';
import Withdraw from 'pages/Withdraw';
import Manager from 'pages/Manager';
import Visitors from 'pages/Visitors';
import NoticePost from 'pages/NoticePost';

class App extends Component {
  state = {
    width: ''
  }
  
  openSide = () => {
    this.setState({width: '240px'});
  }

  closeSide = () => {
    this.setState({width: '60px'});
  }

  render() {
    return (
      <div class="d-flex flex-wrap" style={{height: "100vh"}}>
        <div class="p-0 d-md-flex" id="sidebar" style={this.state}>
          <Sidebar />
        </div>
        <Route exact path="/" component={Main} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/manager" component={Manager} />
        <Route path="/visitors" component={Visitors} />
        <Switch>
          <Route path="/notice/:num" component={NoticePost} />
          <Route path="/notice" component={Notice} />
        </Switch>
        <Switch>
          <Route path="/user/:nickname" component={UserInfo} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    );
  }
}

export default App;
