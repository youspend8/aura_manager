import React, { Component } from 'react';

export default class PopReview extends Component {
  render() {
    return (
      <div class="card col-3">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            인기글 랭킹
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body">
          <div class="d-flex">
            <div class="w-50 text-center">TITLE</div>
            <div class="w-50 text-center">CATEGORY</div>
          </div>
          <div class="d-flex">
            <div class="w-50 text-center">TITLE</div>
            <div class="w-50 text-center">CATEGORY</div>
          </div>
          <div class="d-flex">
            <div class="w-50 text-center">TITLE</div>
            <div class="w-50 text-center">CATEGORY</div>
          </div>
        </div>
      </div>
    );
  }
}
