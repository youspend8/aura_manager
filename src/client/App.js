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
import PageHeader from 'commons/PageHeader';

class App extends Component {
  state = {
    toggler: false,
    sidebar: {
      width: '240px'
    },
    content: {
      width: 'calc(100% - 240px)'
    }
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

  render() {
    console.log(this)
    return (
      <div class="d-flex flex-wrap" style={{height: "100vh"}}>
        <div class="p-0 d-md-flex" id="sidebar" style={this.state.sidebar}>
          <Sidebar />
        </div>
        <div class="card content-area" style={this.state.content}>
          <PageHeader page={'Dashboard'} handleSidebar={this.handleSidebar} handleContent={this.handleContent} />
          
          <Route exact path="/" component={() => <Main />}  />
          <Route path="/withdraw" component={() => <Withdraw page={'탈퇴회원목록'} />} />
          <Route path="/manager" component={() => <Manager page={'관리자 처리 내역'} />} />
          <Route path="/visitors" component={() => <Visitors page={'방문자 통계'} />} />
          <Switch>
            <Route path="/notice/:num" component={() => <NoticePost page={'게시글 내용'} />} />
            <Route path="/notice" component={() => <Notice page={'공지사항/이벤트 게시글 관리'} />} />
          </Switch>
          <Switch>
            <Route path="/user/:nickname" component={() => <UserInfo page={'유저정보'} />} />
            <Route path="/user" component={() => <User page={'회원목록'} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
