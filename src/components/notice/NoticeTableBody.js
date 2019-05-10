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
            checked={this.state.checked}
            onChange={this.handleChange('checked')}
            value="checked"
            color="primary"
            style={{color: 'white'}}
          />
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.num}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.isNotice == 1 ? '공지사항' : '이벤트'}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Link to={`/notice/${this.props.num}`} class="text-light">
            {this.props.title}
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
        <Link to={`/notice/${this.props.num}`} class="text-light">
          {
            this.props.contents.length >= 100 ? this.props.contents.substring(0, 100) : this.props.contents
          }
        </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.writeDate.substring(0, 10)}
        </td>
      </tr>
    );
  }
}