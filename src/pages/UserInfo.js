import React, { Component } from 'react';
import UserInfoTable from 'components/userInfo/UserInfoTable';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const myStyle = {
  select: {
    transition: 'border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out',
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
    borderBottom: '1px solid #ced4da',
    borderRadius: 0,
    boxSizing: 'content-box',
    backgroundColor: 'transparent'
  }
}

export default class UserInfo extends Component {
  state = {
    data : '',
    redirect : false,
    repostType: [
      "무분별한 광고 및 도배 행위",
      "음란물 유포 및 게재",
      "욕설 및 폭언"
    ]
  }
  
  handleWithdraw = e => {
    e.preventDefault();
    confirmAlert({
      title: '회원탈퇴',
      message: `${this.state.data.nickname} 님을 탈퇴시키겠습니까?`,
      closeOnClickOutside: false,
      buttons: [
        {
          label: '삭제',
          onClick: () => {
            const url = '/api/user/' + this.state.data.nickname;
            axios.delete(url)
              .then(res => {
                if (res.data === true) {
                  confirmAlert({
                    title: '완료',
                    message: `${this.state.data.nickname} 님의 탈퇴를 성공적으로 처리했습니다.`,
                    closeOnClickOutside: false,
                    buttons: [
                      {
                        label: '확인',
                        onClick: () => {}
                      }
                    ]
                  })
                  this.setState({redirect : true})
                } else {
                  confirmAlert({
                    title: '실패',
                    message: `${this.state.data.nickname} 님의 탈퇴시키는데 실패했습니다.`,
                    closeOnClickOutside: false,
                    buttons: [
                      {
                        label: '확인',
                        onClick: () => {}
                      }
                    ]
                  })
                }
              })
              .catch(err => console.log(err));
          }
        },
        {
          label: '취소',
          onClick: () => {}
        }
      ]
    });
  }

  componentDidMount() {
    const url = '/api/user/' + this.props.match.params.nickname;
    axios.get(url)
      .then(res => this.setState(res))
      .catch(err => console.log(err))
  }

  render() {
    const { data, redirect } = this.state;
    return (
      <div class="card-body page-body px-5 d-flex justify-content-center" style={{backgroundColor: '#e1e6ed'}}>
        {redirect ? <Redirect to="/user" /> : ''}
        <div class="col-8 text-center">
          {
            data ? 
              <UserInfoTable
                nickname={data.nickname}
                email={data.email}
                address={data.address}
                reg_Location={data.regLocation}
                gender={data.gender}
                reg_Date={data.regDate}
                tel={data.tel}
                profile={data.profile}
              /> :
              <div class="my-5">
                <CircularProgress color="primary" />
              </div>
          }
          <form id="RepostForm" class="form-inline justify-content-center">
            <select class="form-control" style={myStyle.select}>
              <option value="0">{this.state.repostType[0]}</option>
              <option value="1">{this.state.repostType[1]}</option>
              <option value="2">{this.state.repostType[2]}</option>
            </select>
            <input type="submit" class="btn btn-danger" value="회원 제재하기"></input>
            <input type="button" class="btn indigo" value="회원정보수정"></input>
          </form>

          <div class="mt-5">
            <a href="#" class="text-danger" onClick={this.handleWithdraw}>회원탈퇴</a>
          </div>

        </div>
      </div>
    );
  }
}