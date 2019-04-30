import React, { Component } from 'react';
import ReviewPostForm from 'components/review/ReviewPostForm';
import axios from 'axios';

export default class ReviewPost extends Component {
  state = {
    num: '',
    name: '',
    content: '',
    category: '',
    addDate: '',
    bookmark: '',
    commentCount: '',
    goodCount: '',
    readCount: ''
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    const url = '/review/' + this.props.match.params.num;
    return axios.get(url)
      .then(res => this.setState(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        {
          this.state.title ? 
          <ReviewPostForm
            num={this.state.num} 
            name={this.state.name}
            content={this.state.content}
            addDate={this.state.addDate} 
            category={this.state.category}
            bookmark={this.state.bookmark}
            commentCount={this.state.commentCount}
            goodCount={this.state.goodCount}
            readCount={this.state.readCount}
          /> : ''
        }
      </div>
    );
  }
}