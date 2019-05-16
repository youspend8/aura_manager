import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['남성', '여성'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      colors: 'white',
      lineTension: 0.1,
      backgroundColor: ['black', 'white'],
      borderColor: ['black', 'white'],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59]
    }
  ]
};

export default class GenderStats extends Component {
  render() {
    return (
      <div class="card col-4">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            이용자 성비 통계
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body">
          <Pie data={data} style={{height: '100%'}}></Pie>


        </div>
      </div>
    );
  }
}
