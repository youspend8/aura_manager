import React, { Component } from 'react';
import ReviewPostForm from 'components/review/ReviewPostForm';
import axios from 'axios';
import Circular from '@material-ui/core/CircularProgress';

export default class ReviewPost extends Component {
  state = {
    data : ''
  }

  componentDidMount() {
    const { num, type } = this.props.match.params;
    const url = `/api/review/${num}/${type}`;
    axios.get(url)
      .then(res => this.setState(res))
      .catch(err => console.log(err))
  }

  render() {
    const { data } = this.state
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        {
          data ? 
          <ReviewPostForm
            num={data.num} 
            title={data.TITLE}
            contents={data.CONTENTS}
            addDate={data.addDate}
            type={data.type}
            category={data.category}
            bookmark={data.bookmark}
            comments={data.comments}
            goodCount={data.goods}
            readCount={data.readCount}
          /> : 
          <div class="my-5 text-center">
            <Circular color='secondary' />
          </div>
        }
      </div>
    );
  }
}