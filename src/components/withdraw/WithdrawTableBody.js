import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WithdrawTableBody extends Component {
  render() {
    return (
      <tr>
        <td class="align-middle" style={{fontWeight: '800'}}>1</td>
        <td class="align-middle" style={{fontWeight: '800'}}>
            youspend8@gmail.com
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          <Link to="/user/지성쿤" class="text-light" style={{textDecoration: 'underline'}}>
            채훈짱
          </Link>
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>342</td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          2019-04-05 13시 20분
        </td>
      </tr>
    );
  }
}