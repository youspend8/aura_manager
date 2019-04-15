import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserTableBody extends Component {
  render() {
    return (
      <tr>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>1</td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
            hjs814@naver.com
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Link to="/user/지성쿤" class="text-light" style={{textDecoration: 'underline'}}>
            지성쿤
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>342</td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>관리자</td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <button type="button" class="btn btn-sm indigo text-white">일반</button>
        </td>
      </tr>
    );
  }
}