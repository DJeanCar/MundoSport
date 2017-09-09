import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	createSize,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  	createSize,
  }, dispatch)
)

export default class SizeForm extends Component {

	@autobind
	handleCreate(e) {
		e.preventDefault();
		const { size } = this.refs;
		this.props.createSize({ name: size.value });
		size.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar Talla</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreate}>
					<input class="input" ref="size" type="text" placeholder="Talla" required={true} />
					<input class="btn add" type="submit" value="Agregar" />
				</form>
			</div>
		);
	}
}