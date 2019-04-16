import React, { Component } from 'react';
import NoticeTable from 'components/notice/NoticeTable';
import NoticeSearchForm from 'components/notice/NoticeSearchForm';
import Pagination from 'commons/Pagination';

export default class Notice extends Component {
  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <NoticeSearchForm />
        <NoticeTable />
        <Pagination />
      </div>
    );
  }
}