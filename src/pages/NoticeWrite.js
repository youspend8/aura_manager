import React, { Component } from 'react';
import NoticeWriteForm from 'components/notice/NoticeWriteForm';

export default class NoticeWrite extends Component {
  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <NoticeWriteForm />
      </div>
    );
  }
}