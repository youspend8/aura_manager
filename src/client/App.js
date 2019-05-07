import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from 'commons/Sidebar';

import Main from 'pages/Main';
import Notice from 'pages/Notice';
import NoticePost from 'pages/NoticePost';
import NoticeWrite from 'pages/NoticeWrite';
import User from 'pages/User';
import UserInfo from 'pages/UserInfo';
import Withdraw from 'pages/Withdraw';
import Manager from 'pages/Manager';
import Visitors from 'pages/Visitors';
import PageHeader from 'commons/PageHeader';
import Review from 'pages/Review';
import ReviewPost from 'pages/ReviewPost';
import ReviewWrite from 'pages/ReviewWrite';

class App extends Component {
  state = {
    toggler: false,
    sidebar: {
      width: '240px'
    },
    content: {
      width: 'calc(100% - 240px)'
    },
    page: 'Dashboard'
  }

  handleSidebar = () => {
    const nextWidth = this.state.toggler ? '240px' : '0px';
    this.setState({
      toggler: !this.state.toggler,
      sidebar: {
        width: nextWidth
      }
    })
  }

  handleContent = () => {
    const nextWidth = this.state.toggler ? 'calc(100% - 240px)' : '100%';
    this.setState({
      toggler: !this.state.toggler,
      content: {
        width: nextWidth
      }
    })
  }

  handleChangePage = (page) => {
    this.setState({page: page})
  }

  render() {
    console.log(this.location)
    return (
      <div class="d-flex flex-wrap" style={{height: "100vh"}}>
        <div class="p-0 d-md-flex" id="sidebar" style={this.state.sidebar}>
          <Sidebar />
        </div>
        <div class="card content-area" style={this.state.content}>
          <PageHeader handleSidebar={this.handleSidebar} handleContent={this.handleContent} />
          
          <Route exact path="/" component={Main} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/manager" component={Manager} />
          <Route path="/visitors" component={Visitors} />
          <Switch>
            <Route path="/review/write" component={ReviewWrite} />
            <Route path="/review/:num/:type" component={ReviewPost} />
            <Route path="/review" component={Review} />
          </Switch>
          <Switch>
            <Route path="/notice/write" component={NoticeWrite} />
            <Route path="/notice/:num" component={NoticePost} /> 
            <Route path="/notice" component={Notice} />
          </Switch>
          <Switch>
            <Route path="/user/:nickname" component={UserInfo} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
