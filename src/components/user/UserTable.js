import React, { Component } from 'react';
import UserTableBody from 'components/user/UserTableBody';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class UserTable extends Component {
  state = {
    data : ''
  }

  componentDidMount() {
    const url = '/api/user/list';
    axios.get(url)
      .then(res => {console.log(res); this.setState(res)})
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th style={{fontWeight: '800', fontSize: '18px'}}>아이디</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>닉네임</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>성별</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>연령대</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>가입방식</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>인증여부</th>
            <th style={{fontWeight: '800', fontSize: '18px'}}>상태</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.data ? this.state.data.map((item, index) => {
              return (
                <UserTableBody 
                  key={index}
                  email={item.email}
                  nickname={item.nickname}
                  gender={item.gender}
                  age_Range={item.ageRange}
                  reg_Location={item.regLocation}
                  author_Type={item.authorType}
                  del_Date={item.delDate}
                />
              );
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