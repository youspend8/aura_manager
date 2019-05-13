import React, { Component } from 'react';
import NoticePostForm from 'components/notice/NoticePostForm';
import axios from 'axios';

export default class NoticePost extends Component {
  state = {
    data : ''
  }
  
  componentDidMount() {
    const url = '/api/notice/' + this.props.match.params.num;
    axios.get(url)
      .then(res => {
        this.setState(res)
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        {
          data ?
              <NoticePostForm
                num={data.NUM} 
                isNotice={data.ISNOTICE == 1 ? "공지사항" : "이벤트"}
                title={data.TITLE }
                content={data.CONTENTS}
                writeDate={data.WRITERDATE.substring(0,12)}
                files={data.FILES}
              />
         : ''
        }
      </div>
    );
  }
}