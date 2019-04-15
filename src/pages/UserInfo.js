import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserInfoTable from 'components/userInfo/UserInfoTable';
import PageHeader from 'commons/PageHeader';

const myStyle = {
  select: {
    transition: 'border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out',
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    borderRadius: 0,
    boxSizing: 'content-box',
    backgroundColor: 'transparent'
  }
}

export default class UserInfo extends Component {
  state = {
    currentUser: this.props.match.params.nickname,
    repostType: [
      "무분별한 광고 및 도배 행위",
      "음란물 유포 및 게재",
      "욕설 및 폭언"
    ]
  }

  render() {
    return (
      <div class="card-body page-body px-5 d-flex justify-content-center" style={{backgroundColor: '#e1e6ed'}}>
        <div class="col-8 text-center">
          
          <UserInfoTable />

          <form id="RepostForm" class="form-inline justify-content-center">
            <select class="form-control" style={myStyle.select}>
              <option value="0">{this.state.repostType[0]}</option>
              <option value="1">{this.state.repostType[1]}</option>
              <option value="2">{this.state.repostType[2]}</option>
            </select>
            <input type="submit" class="btn btn-danger" value="회원 제재하기"></input>
            <input type="button" class="btn indigo" value="회원정보수정"></input>
          </form>

          <div class="mt-5">
            <a href="#" class="text-danger">회원탈퇴</a>
          </div>

        </div>
      </div>
    );
  }
}