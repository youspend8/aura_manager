import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class ReviewWriteForm extends Component {
  state = {
    type: 0,
    title : '',
    address1 : '',
    address2 : '',
    address3 : '',
    detaile_Addr : '',
    tel1 : '',
    tel2 : '',
    tel3 : '',
    waitingTime : '',
    delivery : false,
    takeOut : false,
    menu : [
      {
        name : '',
        price : ''
      }
    ]
  }

  handleChange = (e, type) => {
    this.setState({type})
  }

  handleCheckChange = (e) => {
    if (e.target.name == 'delivery') {
      this.setState({delivery : !this.state.delivery})
    } else if (e.target.name == 'takeOut') {
      this.setState({takeOut : !this.state.takeOut})
    }
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
    console.log(this.state)
  }

  handleMenuAdd = () => {
    let menu = {
      name : '',
      price : ''
    }
    this.setState({
      menu : this.state.menu.concat(menu)
    })
    console.log(this.state.menu)
  }

  render() {
    return (
      <form class="container d-flex justify-content-center flex-column">
        <input type="text" class="form-control rounded-0 w-100 my-3" name="title" placeholder="제목" onChange={this.handleFormChange} />
        <textarea class="form-control rounded-0 mb-4" name="contents" placeholder="내용" rows="10" onChange={this.handleFormChange}></textarea>
        <div>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={this.state.type} onChange={this.handleChange}>
              <Tab label="음식점" />
              <Tab label="병원" />
              <Tab label="전자제품" />
            </Tabs>
          </AppBar>
          <table class="table text-white my-0 text-center">
            {
              this.state.type == 0 || this.state.type == 1 ?
              <PlaceReviewForm /> : 
              this.state.type == 2 ?
              '' : ''
            }
            <tbody id="menu">
              <tr>
                <td>카테고리</td>
                <td>
                  <select class="form-control" name="category" onChange={this.handleFormChange}>
                    <option>한식</option>
                  </select>
                </td>
                <td class="align-middle" colSpan="3">
                  배달가능여부
                  <Checkbox
                    checked={this.state.delivery}
                    onChange={this.handleCheckChange}
                    color="primary"
                    style={{color: 'white'}}
                    name="delivery"
                  />
                  <span class="col"></span>
                  테이크아웃
                  <Checkbox
                    checked={this.state.takeOut}
                    onChange={this.handleCheckChange}
                    color="primary"
                    style={{color: 'white'}}
                    name="takeOut"
                  />
                </td>
              </tr>
              <tr>
                <td>메뉴</td>
                <td colSpan="2">
                  {
                    this.state.menu.map((item, index) => {
                      return (
                        <div class="form-inline mb-2">
                          <input type="text" class="form-control col-5" name="menu" placeholder="메뉴이름"></input>
                          <input type="text" class="form-control col-5 mx-3" name="menu" placeholder="가격"></input>
                        </div>
                      );
                    })
                  }
                </td>
                <td colSpan="2" class="align-top pt-4 text-left">
                  <a onClick={this.handleMenuAdd}>
                    메뉴추가하기
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <input type="file" class="form-control-file my-2 w-100" />
        <div class="text-center">
          <button type="submit" class="btn indigo">등록하기</button>
        </div>
      </form>
    );
  }
}

class PlaceReviewForm extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td style={{width: '10%'}}>주소</td>
          <td style={{width: '20%'}}>
            <select class="form-control" name="address1" onChange={this.handleFormChange}>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="인천">인천</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="광주">광주</option>
              <option value="울산">울산</option>
              <option value="경기도">경기도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="강원도">강원도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="제주도">제주도</option>
              <option value="울릉도">울릉도</option>
            </select>
          </td>
          <td style={{width: '20%'}}>
            <input type="text" class="form-control" name="address2" onChange={this.handleFormChange} placeholder="구/군/시"></input>
          </td>
          <td style={{width: '20%'}}>
            <input type="text" class="form-control" name="address3" onChange={this.handleFormChange} placeholder="동/읍/리"></input>
          </td>
          <td style={{width: '20%'}}>
            <input type="text" class="form-control" name="detail_Addr" onChange={this.handleFormChange} placeholder="상세주소"></input>
          </td>
        </tr>
        <tr>
          <td>연락처</td>
          <td colSpan="2">
            <input type="text" class="form-control d-inline-block col-3" name="tel1"></input>
            <span>&nbsp;-&nbsp;</span>
            <input type="text" class="form-control d-inline-block col-3" name="tel2"></input>
            <span>&nbsp;-&nbsp;</span>
            <input type="text" class="form-control d-inline-block col-3" name="tel3"></input>
          </td>
          <td>웨이팅시간</td>
          <td>
            <select class="form-control" name="waitingTime" onChange={this.handleFormChange}>
              <option value="5분">5분</option>
              <option value="10분">10분</option>
              <option value="15분">15분</option>
              <option value="20분">20분</option>
              <option value="30분">30분</option>
              <option value="45분">45분</option>
              <option value="1시간">1시간</option>
              <option value="1시간이상">1시간이상</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>영업시간</td>
          <td colSpan="4">
            <input type="text" class="form-control" name="serviceTime" onChange={this.handleFormChange}></input>
          </td>
        </tr>
      </tbody>
    );
  }
}