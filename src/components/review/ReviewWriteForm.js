import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';

export default class ReviewWriteForm extends Component {
  state = {
    type: 3,
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
    hospital_Category : '',
    medical_Category : '',
    sub_Medical_Category : [
      '123'
    ],
    menu : [
      {
        name : '',
        price : ''
      }
    ],
    price : '',
    sub_Category1 : '',
    sub_Category2 : '',
    sub_Category3 : '',
    fileList : []
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  handleTypeChange = (e, type) => {
    this.setState({type : type + 1});
  }

  handleCheckChange = (e) => {
    if (e.target.name == 'delivery') {
      this.setState({delivery : !this.state.delivery});
    } else if (e.target.name == 'takeOut') {
      this.setState({takeOut : !this.state.takeOut});
    }
  }

  handleMenuAdd = () => {
    this.setState({
      menu : this.state.menu.concat({
        name : '',
        price : ''
      })
    });
  }
  
  handleMenuChange = (index) => (e) => {
    const temp = [...this.state.menu];
    temp.map((item, i) => {
      if (i === index) {
        item[e.target.name] = e.target.value;
      }
    });
    this.setState({
      menu : temp
    });
  }

  handleMedicalCategoryAdd = () => {
    this.setState({
      sub_Medical_Category : this.state.sub_Medical_Category.concat('')
    });
  }

  handleMedicalCategoryChange = (index) => (e) => {
    const temp = [...this.state.sub_Medical_Category];
    temp[index] = e.target.value;
    this.setState({
      sub_Medical_Category : temp
    });
  }

  handleFileChange = (e) => {
    const temp = [];
    const files = e.target.files;
    for (const file of files) {
      temp.push(file.name);
    }
    this.setState({
      fileList : temp
    })
  }

  render() {
    return (
      <form class="container d-flex justify-content-center flex-column" encType="multipart/form-data" onSubmit={this.handleFormSubmit}>
        <input type="text" class="form-control rounded-0 w-100 my-3" name="title" placeholder="제목" onChange={this.handleFormChange} />
        <textarea class="form-control rounded-0 mb-4" name="contents" placeholder="내용" rows="10" onChange={this.handleFormChange}></textarea>
        <div>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={this.state.type - 1} onChange={this.handleTypeChange}>
              <Tab label="음식점" />
              <Tab label="병원" />
              <Tab label="전자제품" />
            </Tabs>
          </AppBar>
          <table class="table text-white my-0 text-center">
            {
              this.state.type == 1 || this.state.type == 2 ?
              <PlaceReviewForm 
                handleFormChange={this.handleFormChange}
              /> : 
              this.state.type == 3 ?
              <ProductorReviewForm /> : ''
            }
            {
              this.state.type == 1 ? 
              <RestaurantReviewForm 
                delivery={this.state.delivery}
                takeOut={this.state.takeOut}
                menu={this.state.menu}
                handleCheckChange={this.handleCheckChange}  
                handleFormChange={this.handleFormChange}
                handleMenuChange={this.handleMenuChange}
                handleMenuAdd={this.handleMenuAdd}
              /> :  
              this.state.type == 2 ?
              <HospitalReviewForm 
                handleFormChange={this.handleFormChange}
                handleMedicalCategoryAdd={this.handleMedicalCategoryAdd}
                handleMedicalCategoryChange={this.handleMedicalCategoryChange}
                sub_Medical_Category={this.state.sub_Medical_Category}
              /> :  
              this.state.type == 3 ?
              <DigitalReviewForm 
                handleFormChange={this.handleFormChange}
              /> : ''
            }
          </table>
        </div>
        <input type="file" multiple="multiple" name="fileList" class="form-control-file my-2 w-100" onChange={this.handleFileChange} />
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
            <select class="form-control" name="address1" onChange={this.props.handleFormChange}>
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
            <input type="text" class="form-control" name="address2" onChange={this.props.handleFormChange} placeholder="구/군/시"></input>
          </td>
          <td style={{width: '20%'}}>
            <input type="text" class="form-control" name="address3" onChange={this.props.handleFormChange} placeholder="동/읍/리"></input>
          </td>
          <td style={{width: '20%'}}>
            <input type="text" class="form-control" name="detail_Addr" onChange={this.props.handleFormChange} placeholder="상세주소"></input>
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
            <select class="form-control" name="waitingTime" onChange={this.props.handleFormChange}>
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
            <input type="text" class="form-control" name="serviceTime" onChange={this.props.handleFormChange}></input>
          </td>
        </tr>
      </tbody>
    );
  }
}

class RestaurantReviewForm extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>카테고리</td>
          <td>
            <select class="form-control" name="category" onChange={this.props.handleFormChange}>
              <option>한식</option>
            </select>
          </td>
          <td class="align-middle py-0" colSpan="3">
            배달가능여부
            <Checkbox
              checked={this.props.delivery}
              onChange={this.props.handleCheckChange}
              color="primary"
              style={{color: 'white'}}
              name="delivery"
            />
            <span class="col"></span>
            테이크아웃
            <Checkbox
              checked={this.props.takeOut}
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
              this.props.menu.map((item, index) => {
                return (
                  <div class="form-inline mb-2">
                    <input type="text" class="form-control col-5" name="name" placeholder="메뉴이름" onChange={this.props.handleMenuChange(index)}></input>
                    <input type="text" class="form-control col-5 mx-3" name="price" placeholder="가격" onChange={this.props.handleMenuChange(index)}></input>
                  </div>
                );
              })
            }
          </td>
          <td colSpan="2" class="align-top pt-4 text-left">
            <a onClick={this.props.handleMenuAdd}>
              메뉴추가하기
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

class HospitalReviewForm extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>병원분류</td>
          <td>
            <select class="form-control" name="hospital_Category" onChange={this.props.handleFormChange}>
              <option value="종합병원">종합병원</option>
            </select>
          </td>
          <td>주요진료과목</td>
          <td>
            <select class="form-control" name="medical_Category" onChange={this.props.handleFormChange}>
              <option value="외과">외과</option>
              <option value="내과">내과</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>보조진료과목</td>
          <td colSpan="1">
            {
              this.props.sub_Medical_Category.map((item, index) => {
                return (
                  <select class="form-control mb-2" name="sub_Medical_Category" onChange={this.props.handleMedicalCategoryChange(index)}>
                    <option value="외과">외과</option>
                    <option value="내과">내과</option>
                  </select>
                );
              })
            }
          </td>
          <td colSpan="3" class="align-top pt-4 text-left">
            <a onClick={this.props.handleMedicalCategoryAdd}>
              진료과목 추가하기
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

class ProductorReviewForm extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>출시일</td>
          <td>
            <input type="date" class="form-control" name="price" onChange={this.props.handleFormChange}></input>
          </td>
          <td>가격</td>
          <td>
            <input type="text" class="form-control" name="price" onChange={this.props.handleFormChange}></input>
          </td>
        </tr>
      </tbody>
    );
  }
}

class DigitalReviewForm extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>모델명</td>
          <td>
            <input type="text" class="form-control" name="model"></input>
          </td>
        </tr>
        <tr>
          <td>카테고리</td>
          <td colSpan="3">
            <div class="form-inline">
              <select class="form-control w-25" name="sub_Category1" onChange={this.props.handleFormChange}>
                <option value="카테고리1">카테고리1</option>
                <option value="카테고리2">카테고리2</option>
              </select>
              <select class="form-control w-25 mx-3" name="sub_Category2" onChange={this.props.handleFormChange}>
                <option value="카테고리1">카테고리1</option>
                <option value="카테고리2">카테고리2</option>
              </select>
              <select class="form-control w-25" name="sub_Category3" onChange={this.props.handleFormChange}>
                <option value="카테고리1">카테고리1</option>
                <option value="카테고리2">카테고리2</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}