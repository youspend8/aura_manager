import React, { Component } from 'react';
import NoticePostForm from 'components/notice/NoticePostForm';
import axios from 'axios';

export default class NoticePost extends Component {
  state = {
    data : ''
  }
  
  componentDidMount() {
    const url = '/notice/' + this.props.match.params.num;
    axios.get(url)
      .then(res => this.setState(res))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        {
          data ? data.map((item, index) => {
            return (
              <NoticePostForm
                num={this.state.num} 
                title={this.state.title}
                content={this.state.content}
                writeDate={this.state.writeDate} 
                writer={this.state.writer}
                category={this.state.category}
              />
            )
          }) : ''
        }
      </div>
    );
  }
}