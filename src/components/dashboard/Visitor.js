import React, { Component } from 'react';

export default class Visitor extends Component {
  render() {
    return (
      <div class="card col-lg-3 col-md-6">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            오늘의 방문자 수
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body d-flex justify-content-center align-items-center">
          <span style={{fontSize: '50px', fontWeight: 'bold'}}>145,222</span>
          <span style={{fontSize: '20px', marginLeft: '5px'}}> 명</span>
        </div>
      </div>
    );
  }
}
