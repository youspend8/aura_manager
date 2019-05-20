import React, { Component } from 'react';
import ReviewTable from 'components/review/ReviewTable';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class Review extends Component {
  state = {
    type: 1,
    keyword: '',
    currentPage: 1,
    labelWidth: 0,
    data: '',
    total: []
  };

  handleSelectChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this._getList();
  }

  componentDidMount() {
    this._getList();
  }

  handlePageChange = page => async e => {
    await this.setState({currentPage: page})
    await this._getList();
  }

  _getList = e => {
    let start = ((this.state.currentPage * 10) - 9);
    let end = (start + 9);
    const url = `/api/review/list?start=${start}&end=${end}&keyword=${this.state.keyword}`;
    axios.get(url)
      .then(res => {
        let temp = [];
        for (let i = 1; i < res.data.total; i+=10) {
          temp.push((i - 1) / 10 + 1);
        }
        console.log(res.data)
        this.setState({total: temp});
        this.setState({data: res.data.result})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <form onSubmit={this.handleFormSubmit} className="form-inline d-flex justify-content-center">
          <Select
            value={this.state.type}
            name='type'
            onChange={this.handleSelectChange}
            style={{color: 'white', borderColor: 'white'}}
          >
            <MenuItem value={1}>
              이름
            </MenuItem>
          </Select>
          <div class="md-form mx-3">
            <input type="text" className="form-control text-white" id="keyword" style={{borderColor: 'black'}}
              onChange={this.handleFormChange}></input>
            <label htmlFor="searchUser" style={{color: 'white'}}>키워드 입력</label>
          </div>
          <input type="submit" value="검색" className="btn btn-sm indigo ml-3"></input>
        </form>

        <ReviewTable 
          data={this.state.data}
        />

        <nav class="mt-5">
          <ul class="pagination pagination-circle pg-purple d-flex justify-content-center">
            {
              this.state.total.map((item, index) => {
                return (
                  <li class={`page-item ${item == this.state.currentPage ? 'active' : ''}`}>
                    <a class="page-link text-white" onClick={this.handlePageChange(item)}>{item}</a>
                  </li>
                );
              })
            }
          </ul>
        </nav>
        <div class="text-center">
          <Link to='/review/write'>
            <button type="button" class="btn indigo text-white">리뷰글 등록</button>
          </Link>
        </div>
      </div>
    );
  }
}