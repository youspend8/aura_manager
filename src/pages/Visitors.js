import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PageHeader from 'commons/PageHeader';

const data = {
  labels: [
    '3월 31일',
    '4월 1일',
    '4월 2일',
    '4월 3일',
    '4월 4일',
    '4월 5일',
    '4월 6일',
  ],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 110],
      fill: false,
      lineTension: 0.1,
      borderColor: 'black',
      pointBorderColor: 'Green',
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 5,
      backgroundColor: 'blue',
      pointRadius: 1,
      pointHitRadius: 10
    }
  ]
};

const options = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true,
        fontColor: 'black',
        fontSize: 16
      },
    }],
    xAxes: [{
      ticks: {
        fontColor: 'black',
        fontSize: 16
      },
    }]
  },
}

export default class Visitors extends Component {
  render() {
    return (
      <div class="card-body d-flex flex-wrap dashboard px-2 bg-white">
        <Line ref="chart" data={data} options={options} />
      </div>
    );
  }
}