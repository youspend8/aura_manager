import React, { Component } from 'react';
import NoticeTable from 'components/notice/NoticeTable';
import NoticeSearchForm from 'components/notice/NoticeSearchForm';
import Pagination from 'commons/Pagination';
import { Link } from 'react-router-dom';

export default class Notice extends Component {
  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <NoticeSearchForm />
        <NoticeTable />
        <Pagination />
        <div class="text-center">
          <Link to='/notice/write'>
            <button type="button" class="btn indigo text-white">글쓰기</button>
          </Link>
        </div>
      </div>
    );
  }
}