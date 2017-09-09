import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	createBrand,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
  	createBrand,
  }, dispatch)
)

export default class BrandForm extends Component {

	@autobind
	handleCreateDivision(e) {
		e.preventDefault();
		const { brand } = this.refs;
		this.props.createBrand({ name: brand.value });
		brand.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar Marca</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateDivision}>
					<input class="input" ref="brand" type="text" placeholder="Marca" required={true} />
					<input class="btn add" type="submit" value="Agregar" />
				</form>
			</div>
		);
	}
}
