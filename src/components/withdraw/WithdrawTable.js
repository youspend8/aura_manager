import React, { Component } from 'react';
import WithdrawTableBody from './WithdrawTableBody';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { confirmAlert } from 'react-confirm-alert';

export default class UserTable extends Component {
  state = {
    dataStatus : true,
    data : ''
  }

  componentDidMount() {
    this.__getWithdrawList();
  }

  __getWithdrawList = () => {
    const url = '/api/user/withdraw';
    axios.get(url)
      .then(res => res.data.length != 0 ? this.setState(res) : this.setState({dataStatus : false}))
      .catch(err => console.log(err))
  }

  handleDeleteCommit = (nickname) => (e) => {
    e.preventDefault();
    confirmAlert({
      title: '회원탈퇴',
      message: `${nickname} 님을 탈퇴시키겠습니까?`,
      closeOnClickOutside: false,
      buttons: [
        {
          label: '삭제',
          onClick: () => {
            const url = '/api/user/' + nickname;
            axios.delete(url)
              .then(res => {
                if (res.data === true) {
                  confirmAlert({
                    title: '완료',
                    message: `${nickname} 님의 탈퇴를 성공적으로 처리했습니다.`,
                    closeOnClickOutside: false,
                    buttons: [
                      {
                        label: '확인',
                        onClick: () => {}
                      }
                    ]
                  })
                  this.__getWithdrawList();
                } else {
                  confirmAlert({
                    title: '실패',
                    message: `${nickname} 님의 탈퇴시키는데 실패했습니다.`,
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
  
  handleDeleteRollback = (nickname) => (e) => {
    e.preventDefault();
    confirmAlert({
      title: '탈퇴복구',
      message: `${nickname} 님을 임시탈퇴복구하시겠습니까?`,
      closeOnClickOutside: false,
      buttons: [
        {
          label: '삭제',
          onClick: () => {
            const url = '/api/user/withdraw/rollback/' + nickname;
            axios.get(url)
              .then(res => {
                if (res.data === true) {
                  confirmAlert({
                    title: '완료',
                    message: `${nickname} 님의 임시탈퇴복구를 성공적으로 처리했습니다.`,
                    closeOnClickOutside: false,
                    buttons: [
                      {
                        label: '확인',
                        onClick: () => {}
                      }
                    ]
                  })
                  this.__getWithdrawList();
                } else {
                  confirmAlert({
                    title: '실패',
                    message: `${nickname} 님의 임시탈퇴복구에 실패했습니다.`,
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

  render() {
    const { data, dataStatus } = this.state;
    return (
      <table class="table text-center w-100" style={{backgroundColor: 'RGB(48,61,71)', color: 'white'}}>
        <thead>
          <tr>
            <th style={{fontWeight: '800', fontSize: '18px', width: '10%'}}>#</th>
            <th style={{fontWeight: '800', fontSize: '18px', width: '25%'}}>아이디</th>
            <th style={{fontWeight: '800', fontSize: '18px', width: '20%'}}>닉네임</th>
            <th style={{fontWeight: '800', fontSize: '18px', width: '20%'}}>탈퇴일</th>
            <th style={{fontWeight: '800', fontSize: '18px', width: '20%'}}>관리항목</th>
          </tr>
        </thead>
        <tbody>
          {
            data ? data.map((item, index) => {
              return (
                <WithdrawTableBody
                  key={index}
                  num={index + 1}
                  nickname={item.nickname}
                  email={item.email}
                  del_Date={item.delDate}
                  handleDeleteCommit={this.handleDeleteCommit}
                  handleDeleteRollback={this.handleDeleteRollback}
                />
              );
            }) :
            <tr>
              <td colSpan="5" class="text-center my-5">
                {
                  dataStatus ? <CircularProgress color="primary" /> : '임시탈퇴처리된 회원이 없습니다.'
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    );
  }
}