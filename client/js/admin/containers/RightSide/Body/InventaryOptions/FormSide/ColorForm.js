import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	createColor,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  	createColor,
  }, dispatch)
)

export default class ColorForm extends Component {

	@autobind
	handleCreate(e) {
		e.preventDefault();
		const { color } = this.refs;
		this.props.createColor({ name: color.value });
		color.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar Color</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreate}>
					<input class="input" ref="color" type="text" placeholder="Color" required={true} />
					<input class="btn add" type="submit" value="Agregar" />
				</form>
			</div>
		);
	}
}
