import React, { Component } from 'react';
import NoticeTable from '../components/notice/NoticeTable';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Pagination from 'commons/Pagination';
import axios from 'axios';

export default class Notice extends Component {
  state = {
    type: 0,
    keyword: '',
    currentPage: '',
    data: {},
    labelWidth: 0
  };

  handleSelectChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handlePageChange = e => {

  }
  
  componentDidMount() {
    
  }

  callApi = () => {

  }

  render() {
    return (
      
      <div className="card content-area">
        <div className="card-header dashboard">
          <h5 className="card-title m-0">
            공지사항/이벤트 게시글 관리
          </h5>
        </div>
        <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
          <form id="search" className="form-inline d-flex justify-content-center">
            <Select
              value={this.state.type}
              name='type'
              onChange={this.handleSelectChange}
              style={{color: 'white', borderColor: 'white'}}
            >
              <MenuItem value={0}>
                제목
              </MenuItem>
              <MenuItem value={1}>
                내용
              </MenuItem>
              <MenuItem value={2}>
                제목+내용
              </MenuItem>
              <MenuItem value={3}>
                작성자
              </MenuItem>
            </Select>
            <div class="md-form mx-3">
              <input type="text" className="form-control text-white" id="keyword" style={{borderColor: 'black'}}
                onChange={this.handleFormChange}></input>
              <label htmlFor="searchUser" style={{color: 'white'}}>키워드 입력</label>
            </div>
            <input type="submit" value="검색" className="btn btn-sm indigo ml-3"></input>
          </form>
          <NoticeTable />
          <Pagination />
        </div>
      </div>
    );
  }
}