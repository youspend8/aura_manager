import React, { Component } from 'react';
import UserTable from 'components/user/UserTable';
import UserSearchForm from 'components/user/UserSearchForm';
import Pagination from 'commons/Pagination';
import PageHeader from 'commons/PageHeader';

export default class User extends Component {
  render() {
    return (
      <div class="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <UserSearchForm />
        <UserTable />
        <Pagination />
      </div>
    );
  }
}