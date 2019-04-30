import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

export default class ReviewTableBody extends Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState({checked : !this.state.checked});
  };

  render() {
    return (
      <tr>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
            color="primary"
            style={{color: 'white'}}
          />
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.num}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.category == 1 ? '음식점' : this.props.category == 2 ? '병원' : '전자제품'}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Link to="/review/1" class="text-light">
            {this.props.title}
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.addDate}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.goods}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.bookmark}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.comments}
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          {this.props.readCount}
        </td>
      </tr>
    );
  }
}