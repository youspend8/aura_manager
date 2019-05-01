import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const style = {
  header: {
    borderTop: '1px solid white',
    borderBottom: '1px solid white'
  }
}

export default class ReviewPostForm extends Component {
  submit = e => {
    e.preventDefault();
    confirmAlert({
      title: '게시글 삭제',
      message: '게시글을 삭제하시겠습니까?',
      closeOnClickOutside: false,
      buttons: [
        {
          label: '삭제',
          onClick: () => {}
        },
        {
          label: '취소',
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    return (
      <div className="text-center">
        <header className="text-center py-4 m-0" style={style.header}>
          <h3 className="d-flex align-items-center justify-content-center m-0">
            {this.props.title}
            <span className="badge badge-pill badge-danger ml-2">{this.props.category}</span>
          </h3>
          {this.props.addDate}
        </header>
        <div className="text-right my-3">
          조회수 : {this.props.readCount}회
        </div>
        <section class="container text-center">
          {this.props.contents}
          {this.props.bookmark}
          {this.props.comments}
          {this.props.goods}

          <div className="my-3">
            <img src="https://loremflickr.com/320/240" className="w-50" />
          </div>
        </section>
        <button type="button" className="btn btn-danger">목록</button>
        <button type="button" className="btn indigo">수정하기</button>
        
        <div class="mt-5">
          <a href="#" class="text-danger" onClick={this.submit}>게시글 삭제</a>
        </div>
      </div>
    );
  }
}