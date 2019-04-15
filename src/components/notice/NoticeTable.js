import React, { Component } from 'react';
import NoticeTableBody from './NoticeTableBody';
import Checkbox from '@material-ui/core/Checkbox';

export default class NoticeTable extends Component {
  state = {
    checkedB: false
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  }

  render() {
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th class="align-middle" style={{fontWeight: '800', fontSize: '18px'}}>
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                style={{color: 'white'}}
              />
            </th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>번호</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>구분</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>제목</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>작성자</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>작성일자</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>조회수</th>
          </tr>
        </thead>
        <tbody>
          <NoticeTableBody />
        </tbody>
      </table>
    );
  }
}