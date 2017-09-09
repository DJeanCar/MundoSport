import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	createModel,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  	createModel,
  }, dispatch)
)

export default class ModelForm extends Component {

	@autobind
	handleCreateModel(e) {
		e.preventDefault();
		const { model } = this.refs;
		this.props.createModel({ name: model.value });
		model.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar Modelo</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateModel}>
					<input class="input" ref="model" type="text" placeholder="Modelo" required={true} />
					<input class="btn add" type="submit" value="Agregar" />
				</form>
			</div>
		);
	}
}
