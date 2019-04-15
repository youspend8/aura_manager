import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WithdrawTableBody from './WithdrawTableBody';

export default class UserTable extends Component {
  state = {

  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th style={{fontWeight: '800', fontSize: '18px'}}>#</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>아이디</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>닉네임</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>게시글수</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>탈퇴일</th>
          </tr>
        </thead>
        <tbody>
          <WithdrawTableBody />
        </tbody>
      </table>
    );
  }
}