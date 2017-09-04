import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createCountry
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	createCountry,
  }, dispatch)
)

export default class CountryForm extends Component {

	@autobind
	handleCreateCountry(e) {
		e.preventDefault();
		const { country, countryCode } = this.refs;
		this.props.createCountry({
			countryName: country.value,
			countryCode: countryCode.value,
		});
		country.value = '';
		countryCode.value = '';
	}

	render() {
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar país</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateCountry}>
					<input class="input" ref="country" type="text" placeholder="Ecuador" required={true} />
					<input class="input" ref="countryCode" type="text" placeholder="ECU" required={true}/>
					<input type="submit" value="Agregar" class="btn add" />
				</form>
			</div>
		);
	}
}
