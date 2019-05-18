import React, { Component } from 'react';

export default class PopReview extends Component {
  render() {
    return (
      <div class="card col-4">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            인기글 랭킹
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body">
          {this.props.popReview.map((item, index) => {
            if (index < 10) {
              return (
                <div class="d-flex">
                  <div class="w-75">{item.title}</div>
                  <div class="w-25 text-center">{item.type == 1 ? '음식점' : item.type == 2 ? '병원' : '전자제품'}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
