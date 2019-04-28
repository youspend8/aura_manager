import React, { Component } from 'react';
import NoticeTable from 'components/manager/ManagerTable';
import Pagination from 'commons/Pagination';

export default class Manager extends Component {
  render() {
    return (
      <div class="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <NoticeTable />
        <Pagination />
      </div>
    );
  }
}