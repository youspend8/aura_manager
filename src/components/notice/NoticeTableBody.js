import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

export default class NoticeTableBody extends Component {
  state = {
    checkedB: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <tr>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            color="primary"
            style={{color: 'white'}}
          />
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>1</td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          이벤트
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Link to="/notice/1" class="text-light">
            2019년 4월 1주차 업데이트 사항 안내
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {/* ${this.props.match.params.nickname} */}
          <Link to={`/user/채훈22`} class="text-light" style={{textDecoration: 'underline'}}>
            채훈22
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          2019-04-05
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          84522
        </td>
      </tr>
    );
  }
}