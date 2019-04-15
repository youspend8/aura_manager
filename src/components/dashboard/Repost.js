import React, { Component } from 'react';

export default class Repost extends Component {
  render() {
    return (
      <div class="card col-lg-3 col-md-6">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            오늘의 신고건수
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body">

        </div>
      </div>
    );
  }
}
