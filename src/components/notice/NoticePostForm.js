import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Redirect } from 'react-router';
import axios from 'axios';

const style = {
  header: {
    borderTop: '1px solid white',
    borderBottom: '1px solid white'
  },
  headerOne: {
    borderBottom: '1px solid white'
  }
}
export default class NoticePostForm extends Component {
  state = {
    redirect: false
  }
  //삭제
  submit = e => {
    e.preventDefault();
    const url = '/api/notice/' + this.props.num;
    axios.delete(url)
      .then(res => {
        console.log(this.props.num); // 이거 게시물 num 숫자 잘나온다.
        console.dir(res);
        if(res.data == true){
          this.handleRedirect();
        }
      })
      .catch(err => {
        console.log(err)
    });
  };

  handleRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to="/notice" /> : ''}
        <header className="text-center py-4 m-0" style={style.header}>
          <h3 className="m-0">
            {this.props.title}
          </h3>
        </header>
        
        <div className="text-left my-2 d-flex col-12" style={style.headerOne}>
          <div className="text-center col-12">
            {this.props.isNotice}
          </div>
        </div>

        <div className="text-left my-2 d-flex col-12" style={style.headerOne}>
          <div className="col-6">
            작성 일자 :  {this.props.writeDate}
          </div>

          <div className="text-right col-6">
            게시물 번호 : {this.props.num}
          </div>
        </div>
        
        <section class="container">
          <div className="text-center my-5">
            {this.props.content}
          </div>
        </section>

        <div class="d-flex flex-wrap">
          {
            this.props.files.map((item, index) => {
              return (
                <img src={item} className="col-2 h-100" />
              );
            })
          }
        </div>

        <div className="text-right">
          <input type="button" className="text-right btn btn-outline-default waves-effect" value="목록" onClick={this.handleRedirect}></input>
          {/* <input type="button" className="btn indigo" value="수정하기"></input> */}
        </div>
        <div className="text-center">
        
          <div class="mt-5">
            <a href="#" class="text-danger" onClick={this.submit}>공지사항 삭제</a>
          </div>

        </div>
      </div> 
    );
  }
}