import React, { Component } from 'react';
import ReviewTable from 'components/review/ReviewTable';
import ReviewSearchForm from 'components/review/ReviewSearchForm';
import Pagination from 'commons/Pagination';
import { Link } from 'react-router-dom';

export default class Review extends Component {
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
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <ReviewSearchForm />
        <ReviewTable />
        <Pagination />
        <div class="text-center">
          <Link to='/review/write'>
            <button type="button" class="btn indigo text-white">리뷰글 등록</button>
          </Link>
        </div>
      </div>
    );
  }
}