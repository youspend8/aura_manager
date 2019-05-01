import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const reg_Location = [
  'AR',
  '페이스북',
  '네이버',
  '카카오',
  '구글'
];

const author_Type = [
  '해당없음',
  '이메일',
  '휴대폰'
];

export default class UserTableBody extends Component {
  render() {
    return (
      <tr>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.email}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          <Link to={`/user/${this.props.nickname}`} class="text-light" style={{textDecoration: 'underline'}}>
            {this.props.nickname}
          </Link>
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.gender ? '남' : '여'}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.age_Range == 0 ? '' : this.props.age_Range}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {reg_Location[this.props.reg_Location - 1]}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {author_Type[this.props.author_Type]}
        </td>
        <td class="align-middle" style={{fontWeight: '800'}}>
          {this.props.del_Date ? '탈퇴' : '일반'}
        </td>
      </tr>
    );
  }
}