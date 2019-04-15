import React, { Component } from 'react';
import NoticeTableBody from './ManagerTableBody';

export default class ManagerTable extends Component {
  state = {

  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th style={{fontWeight: '800', fontSize: '18px'}}>순번</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>관리자이름</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>처리일자</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>처리내용</th>
          </tr>
        </thead>
        <tbody>
          <NoticeTableBody />
        </tbody>
      </table>
    );
  }
}