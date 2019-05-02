import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WithdrawTableBody extends Component {
  render() {
    return (
      <tr>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.num}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.email}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          <Link to={`/user/${this.props.nickname}`} class="text-light" style={{textDecoration: 'underline'}}>
            {this.props.nickname}
          </Link>
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.del_Date}
        </td>
        <td class="align-middle py-2" style={{fontWeight: '800'}}>
          <button type="button" class="btn btn-sm indigo px-3" onClick={this.props.handleDeleteRollback(this.props.nickname)}>탈퇴복구</button>
          <button type="button" class="btn btn-sm btn-danger px-3" onClick={this.props.handleDeleteCommit(this.props.nickname)}>탈퇴처리</button>
        </td>
      </tr>
    );
  }
}