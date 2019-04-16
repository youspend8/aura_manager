import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

export default class ReviewTableBody extends Component {
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
          맛집
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          <Link to="/review/1" class="text-light">
            비트캠프 서초본점
          </Link>
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          2019-04-05
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          6,451
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          900,541
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          4,422
        </td>
        <td class="align-middle p-1" style={{fontWeight: '800'}}>
          84,522
        </td>
      </tr>
    );
  }
}