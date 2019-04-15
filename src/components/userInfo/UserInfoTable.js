import React, { Component } from 'react';

export default class UserInfoTable extends Component {
  render() {
    return (
      <table class="table table-bordered text-center">
        <tbody>
          <tr>
            <td>프로필사진</td>
            <td>
              <img src="/img/profile.png"></img>
            </td>
          </tr>
          <tr>
            <td>닉네임</td>
            <td>지성쿤</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>hjs814@naver.com</td>
          </tr>
          <tr>
            <td>주소</td>
            <td>서울특별시 관악구 서울대입구역</td>
          </tr>
          <tr>
            <td>성별</td>
            <td>남</td>
          </tr>
          <tr>
            <td>가입일</td>
            <td>2019-04-04</td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>010-7768-7922</td>
          </tr>
          <tr>
            <td colSpan="2">
              최근 활동기록
            </td>
          </tr>
          <tr>
            <td colSpan="2">
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