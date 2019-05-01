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
            num={data.NUM} 
            title={data.TITLE}
            contents={data.CONTENTS}
            type={data.TYPE}
            category={data.CATEGORY}
            bookmark={data.BOOKMARK}
            comments={data.COMMENTS}
            goodCount={data.GOODS}
            readCount={data.READCOUNT}
            menu={data.MENU}
            files={data.FILES}
          /> : 
          <div class="my-5 text-center">
            <Circular color='secondary' />
          </div>
        }
      </div>
    );
  }
}