import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	createDivision,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  	createDivision,
  }, dispatch)
)

export default class DivisionForm extends Component {

	@autobind
	handleCreateDivision(e) {
		e.preventDefault();
		const { division } = this.refs;
		this.props.createDivision({ name: division.value });
		division.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar división</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateDivision}>
					<input class="input" ref="division" type="text" placeholder="Division" required={true} />
					<input class="btn add" type="submit" value="Agregar" />
				</form>
			</div>
		);
	}
}