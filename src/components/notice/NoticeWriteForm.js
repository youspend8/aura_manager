import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class NoticeWriteForm extends Component {
  state = {
    checked: false
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  //내가 지금부터 추가하는것들 주석입니다.
  handleFormChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state)
  }
  //내가 지금부터 추가하는것들 주석입니다.
  handleFileChange = (e) => {
    const temp = [];
    const files = e.target.files;
    for (const file of files) {
      temp.push(file);
    }
    this.setState({
      fileList : temp
    })
  }

  render() {
    return (
      <form id="write_Form" class="container">
        <input type="text" class="form-control" placeholder="제목" onChange={this.handleFormChange}/>
        <textarea class="form-control my-3" rows="20" placeholder="내용"onChange={this.handleFormChange} />

        <input type="file" class="form-control-file my-2 w-100" />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              color="primary"
              style={{borderColor: 'white'}}
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