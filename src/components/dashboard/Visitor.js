import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      colors: 'white',
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: 'blue',
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class Visitor extends Component {
  
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
  } 

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

        <div class="card-body">
          <Line ref="chart" data={data} style={{height: '100%'}}/>
        </div>
      </div>
    );
  }
}
