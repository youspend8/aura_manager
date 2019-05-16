import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  state = {
    toggler: true,
    sidebar: {
      width: '240px',
      height: '100vh'
    }
  }

  render() {
    // console.log(window.innerWidth);
    return (
      <nav class="mb-1 navbar navbar-expand-lg navbar-light bg-white flex-column position-fixed" style={this.state.sidebar}>
        
        {/* 로고 */}
        <div class="navbar-brand w-100 mx-0 my-4 d-flex justify-content-center">
          <Link to="/">
            <img src="/img/brand_logo.png"></img>
          </Link>
        </div>
        
        {/* 네비게이션바 항목 */}
        <div class="nav w-100">
          <ul class="navbar-nav flex-column w-100">
          
            {/* 공지글관리 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <a href="#" class="nav-link collapse" data-target="#noname0Collapse" data-toggle="collapse">
              <i class="fas fa-clipboard-list mr-3"></i>
                공지글관리
              </a>
              <i class="fas fa-angle-right"></i>
            </li>
            <div class="collapse" id="noname0Collapse">
              <ul class="navbar-nav flex-column w-100">
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <Link to="/notice" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    공지사항 게시판
                  </Link>
                </li>
              </ul>
            </div>

            {/* 리뷰게시글 관리 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <Link to="/review" class="nav-link">
                <i class="fas fa-clipboard-list mr-3"></i>
                리뷰게시글관리
              </Link>
            </li>
            
            {/* 회원관리 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <a href="#" class="nav-link collapse" data-target="#noname1Collapse" data-toggle="collapse">
                <i class="fas fa-user mr-3"></i>
                회원관리
              </a>
              <i class="fas fa-angle-right"></i>
            </li>
            <div class="collapse" id="noname1Collapse">
              <ul class="navbar-nav flex-column w-100">
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <Link to="/user" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    회원목록
                  </Link>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <Link to="/withdraw" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    탈퇴회원관리
                  </Link>
                </li>
              </ul>
            </div>


            {/* 이용자 통계 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <a href="#" class="nav-link collapse" data-target="#noname2Collapse" data-toggle="collapse">
              <i class="far fa-chart-bar mr-3"></i>
                이용자 통계
              </a>
              <i class="fas fa-angle-right"></i>
            </li>
            <div class="collapse" id="noname2Collapse">
              <ul class="navbar-nav flex-column w-100">
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <Link to="/visitors" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    방문자 통계
                  </Link>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    회원 증감수
                  </a>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    이용자 성비 통계
                  </a>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    일간 회원 추이
                  </a>
                </li>
              </ul>
            </div>


            {/* 서비스 통계 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <a href="#" class="nav-link collapse" data-target="#noname3Collapse" data-toggle="collapse">
              <i class="far fa-chart-bar mr-3"></i>
                서비스 통계
              </a>
              <i class="fas fa-angle-right"></i>
            </li>
            <div class="collapse" id="noname3Collapse">
              <ul class="navbar-nav flex-column w-100">
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    오늘의 리뷰 횟수
                  </a>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    서비스 이용 통계
                  </a>
                </li>
              </ul>
            </div>


            {/* 랭킹 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <a href="#" class="nav-link collapse" data-target="#noname4Collapse" data-toggle="collapse">
              <i class="far fa-chart-bar mr-3"></i>
                랭킹
              </a>
              <i class="fas fa-angle-right"></i>
            </li>
            
            <div class="collapse" id="noname4Collapse">
              <ul class="navbar-nav flex-column w-100">
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    회원 활동 순위
                  </a>
                </li>
                <li class="pl-4 nav-item d-flex justify-content-between align-items-center">
                  <a href="#" class="nav-link">
                    <i class="fas fa-folder mr-3"></i>
                    리뷰글 순위
                  </a>
                </li>
              </ul>
            </div>

            {/* 랭킹 */}
            <li class="nav-item d-flex justify-content-between align-items-center">
              <Link to="/manager" class="nav-link">
                <i class="fas fa-user-secret mr-3"></i>
                관리자 활동 내역
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}