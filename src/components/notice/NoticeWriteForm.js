import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';

export default class NoticeWriteForm extends Component {
  state = {
    title: '제목없음',
    contents: '내용없음',
    isNotice: false,
    files: [],
    name : ''
  }

//  등록하기 눌렀을 때 
handleFormSubmit = (e) => {
  e.preventDefault();
  const url = '/api/notice/write';

  const config = {
    headers: {
      'content-type': 'multipart/form-data;'
    }
  }

  const formData = new FormData();
  formData.append('title', this.state.title);
  formData.append('contents', this.state.contents);
  formData.append('isNotice', this.state.isNotice ? 1 : 0);
  // formData.append('file',this.state.files);

  for (const file of this.state.files) {
    formData.append('file', file);
  }

  //  컨트롤러에게 데이터 전송
  axios.post(url, formData, config)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  //  폼 안의 내용이 변경될때마다
  handleFormChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state)
  }


  //  체크박스 누를때마다
  handleCheckChange = (e) => {
    this.setState({isNotice : !this.state.isNotice});
  }

  //  파일 내용 변경시
  handleFileChange = (e) => {
    const temp = [];
    const files = e.target.files;
    for (const file of files) {
      temp.push(file);
    }
    this.setState({
      files : temp
    })
  }

  render() {
    return (
      <form id="write_Form" onSubmit={this.handleFormSubmit} class="container">
        <input type="text" class="form-control" placeholder="제목" name="title" onChange={this.handleFormChange}/>
        <textarea class="form-control my-3" rows="20" placeholder="내용" name ="contents" onChange={this.handleFormChange} />

        <input type="file" class="form-control-file my-2 w-100" name="file" onChange={this.handleFileChange} multiple="multiple" /> 
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.isNotice}
              onChange={this.handleCheckChange}
              color="primary"
              style={{borderColor: 'white'}}
              name="isNotice"
            />
          }
          label="공지글로 등록"
        />
        <div class="text-center">
          <button type="submit" class="btn indigo">글쓰기</button>
          <button type="reset" class="btn btn-light">다시작성</button>
        </div>
      </form>
    );
  }
}