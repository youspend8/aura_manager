import React, { Component } from 'react';
import WithdrawTable from 'components/withdraw/WithdrawTable';
import WithdrawSearchForm from 'components/withdraw/WithdrawSearchForm';
import Pagination from 'commons/Pagination';
import PageHeader from 'commons/PageHeader';

export default class User extends Component {
  render() {
    return (
      <div class="card-body page-body px-5" style={{backgroundColor: 'RGB(48,61,71)'}}>
        <WithdrawSearchForm />
        <WithdrawTable />
        <Pagination />
      </div>
    );
  }
}