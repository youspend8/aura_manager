import React, { Component } from 'react';
import WithdrawTable from 'components/withdraw/WithdrawTable';
import Pagination from 'commons/Pagination';

export default class User extends Component {
  render() {
    return (
      <div class="card content-area">
        <div class="card-header dashboard">
          <h5 class="card-title m-0">
            탈퇴회원목록
          </h5>
        </div>
        <div class="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>

          <form id="search" class="form-inline d-flex justify-content-center">
            <div class="md-form">
              <input type="text" class="form-control text-white" id="searchUser"></input>
              <label for="searchUser">닉네임</label>
            </div>
            <input type="submit" value="검색" class="btn btn-sm indigo ml-3"></input>
          </form>
          
          <WithdrawTable />
          <Pagination />
        </div>
      </div>
    );
  }
}