import React, { Component } from 'react';
import ReviewTableBody from 'components/review/ReviewTableBody';
import Checkbox from '@material-ui/core/Checkbox';

export default class ReviewTable extends Component {
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
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>카테고리</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>이름</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>등록일자</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>좋아요 수</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>즐겨찾기 수</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>댓글 수</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>조회수</th>
          </tr>
        </thead>
        <tbody>
          <ReviewTableBody />
        </tbody>
      </table>
    );
  }
}