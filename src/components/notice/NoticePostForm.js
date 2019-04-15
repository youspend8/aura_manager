import React, { Component } from 'react';

const style = {
  header: {
    borderTop: '1px solid white',
    borderBottom: '1px solid white'
  }
}
export default class NoticePostForm extends Component {
  render() {
    return (
      <div>
        <header className="text-center py-4 m-0" style={style.header}>
          <h3 className="m-0">
            {this.props.title}
          </h3>
        </header>
        <section class="container">
          {this.props.writer}
          {this.props.writeDate}
          {this.props.category}
          {this.props.content}
        </section>
      </div>
    );
  }
}