import React, { Component } from 'react';

export default class WithdrawSearchForm extends Component {
  render() {
		return (
			<form id="search" class="form-inline d-flex justify-content-center">
				<div class="md-form">
					<input type="text" class="form-control text-white" id="searchUser"></input>
					<label for="searchUser">닉네임</label>
				</div>
				<input type="submit" value="검색" class="btn btn-sm indigo ml-3"></input>
			</form>
		);
	}
}