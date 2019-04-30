import React, { Component } from 'react';
import ReviewWriteForm from 'components/review/ReviewWriteForm';

export default class ReviewWrite extends Component {
  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <ReviewWriteForm />
      </div>
    );
  }
}