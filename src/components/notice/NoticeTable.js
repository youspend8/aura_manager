import React, { Component } from 'react';
import NoticeTableBody from './NoticeTableBody';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class NoticeTable extends Component {
  state = {
    checkedB: false,
    data : ''
  }

  handleChange = name => event => {
    this.setState({ [name]: !event.target.checkedB });
  }

  componentDidMount() {
    const url = '/api/notice/list';
    axios.get(url)
      .then(res => {
        console.log(res.data)
        this.setState(res)
      })
      .catch(err => console.log(err));
    console.log(this.state.data ? true : false)
    setTimeout(() => {
    }, 3000);
  }

  render() {
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th class="align-middle" style={{width: '5%', fontWeight: '800', fontSize: '18px'}}>
              <Checkbox
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                style={{color: 'white'}}
              />
            </th>
            <th class="align-middle"  style={{width: '5%', fontWeight: '800', fontSize: '18px'}}>번호</th>
            <th class="align-middle"  style={{width: '10%', fontWeight: '800', fontSize: '18px'}}>구분</th>
            <th class="align-middle"  style={{width: '20%', fontWeight: '800', fontSize: '18px'}}>제목</th>
            <th class="align-middle"  style={{fontWeight: '800', fontSize: '18px'}}>내용</th>
            <th class="align-middle"  style={{width: '15%', fontWeight: '800', fontSize: '18px'}}>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data ? this.state.data.map((item, i) => {
              return (
                <NoticeTableBody 
                  num={item.num}
                  isNotice={item.isNotice}
                  title={item.title}
                  contents={item.contents}
                  writeDate={item.writerDate}
                  files={item.files}
                />
              )
            }) : 
              <tr>
                <td colSpan="9" align="center">
                  <CircularProgress color="secondary" />
                </td>
              </tr>
            }
        </tbody>
      </table>
    );
  }
}