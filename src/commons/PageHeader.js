import React, { Component } from 'react';

export default class PageHeader extends Component {
	
	handleSideEvent = () => {
		this.props.handleSidebar();
		this.props.handleContent();
	}

  render() {
		console.log(this.props)
		return (
			<div class="card-header d-flex dashboard align-items-center">
				<h5 class="card-title m-0">
					<button class="navbar-toggler mr-2" type="button" onClick={this.handleSideEvent}>
						<i class="fas fa-bars text-white align-middle"></i>
					</button>
					{this.props.page}
				</h5>
			</div>
		);
	}
}