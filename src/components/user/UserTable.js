import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserTableBody from './UserTableBody';

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
            <th style={{fontWeight: '800', fontSize: '18px'}}>권한</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>상태</th>
          </tr>
        </thead>
        <tbody>
          <UserTableBody />
        </tbody>
      </table>
    );
  }
}