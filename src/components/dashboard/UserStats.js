import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const currDate = new Date();
const dateList = [];

for (var i = 6; i >= 0; i--) {
  dateList.push((currDate.getMonth() + 1) + '/' + (currDate.getDate() - i));
}

export default class UserStats extends Component {
  state = {
   data : {
      labels: dateList,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          colors: 'white',
          lineTension: 0.1,
          backgroundColor: ['red', 'orange', 'yellow', 'skyblue', 'blue', 'purple', 'gray'],
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
          data: [65, 59, 55, 23, 44, 76, 41]
        }
      ]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            fontColor: 'white',
            fontSize: 16
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: 'white',
            fontSize: 16
          },
        }]
      },
    }
  }

  render() {
    return (
      <div class="card col-4">
        <div class="card-header d-flex justify-content-between">
          <h5 class="card-title m-0">
            회원 증감수
          </h5>
          <a href="#" class="text-light">
            <i class="fas fa-ellipsis-v"></i>
          </a>
        </div>

        <div class="card-body">
          <Bar data={this.state.data} options={this.state.options}></Bar>

        </div>
      </div>
    );
  }
}
