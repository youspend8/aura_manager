import React, { Component } from 'react';
import NoticePostForm from 'components/notice/NoticePostForm';
import axios from 'axios';

export default class NoticePost extends Component {
  state = {
    num: '',
    title: '',
    content: '',
    writeDate: '',
    writer: '',
    category: ''
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    const url = '/getList/' + this.props.match.params.num;
    return axios.get(url)
      .then(res => console.log(this.setState(res.data)))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card content-area">
        <div className="card-header dashboard">
          <h5 className="card-title m-0">
            게시글 내용
          </h5>
        </div>
        <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
          {
            this.state.title ? 
            <NoticePostForm
              num={this.state.num} 
              title={this.state.title}
              content={this.state.content}
              writeDate={this.state.writeDate} 
              writer={this.state.writer}
              category={this.state.category}
            /> : ''
          }
        </div>
      </div>
    );
  }
}