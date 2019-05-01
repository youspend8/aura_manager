import React, { Component } from 'react';

const reg_Location = [
  'AR',
  '페이스북',
  '네이버',
  '카카오',
  '구글'
]

export default class UserInfoTable extends Component {
  render() {
    return (
      <table class="table table-bordered text-center">
        <tbody>
          <tr>
            <td class="font-weight-bold">프로필사진</td>
            <td colSpan="3">
              <img src={
                this.props.profile ? this.props.profile : '/img/profile.png'
              }></img>
            </td>
          </tr>
          <tr>
            <td class="font-weight-bold">닉네임</td>
            <td>{this.props.nickname}</td>
            <td class="font-weight-bold">이메일</td>
            <td>{this.props.email}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">가입경로</td>
            <td>{reg_Location[this.props.reg_Location - 1]}</td>
            <td class="font-weight-bold">가입일</td>
            <td>{this.props.reg_Date}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">성별</td>
            <td>{this.props.gender ? '남자' : '여자'}</td>
            <td class="font-weight-bold">연락처</td>
            <td>{this.props.tel}</td>
          </tr>
          <tr>
            <td class="font-weight-bold">주소</td>
            <td colSpan="3">{this.props.address}</td>
          </tr>
          <tr>
            <td colSpan="4" class="font-weight-bold">
              최근 활동기록
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <p>
                2019-04-05 18:00 댓글리뷰 작성
              </p>
              <p>
                2019-04-05 18:05 댓글리뷰 작성
              </p>
              <p>
                2019-04-05 18:10 댓글리뷰 작성
              </p>
              <p>
                2019-04-05 18:15 댓글리뷰 작성
              </p>
              <p>
                2019-04-05 18:15 회원정보 수정
              </p>
              <p>
                2019-04-05 18:16 댓글에 좋아요
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}