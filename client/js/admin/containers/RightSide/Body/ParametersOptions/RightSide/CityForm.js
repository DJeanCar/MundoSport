import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createCity,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	createCity,
  }, dispatch)
)

export default class CityForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formDisabled: true,
			selectStateDisabled: true,
			states: [],
		};
	}

	@autobind
	handleCreateCity(e) {
		e.preventDefault();
		const { country, countryState, cityName, zipCode } = this.refs;
		this.props.createCity({
			countryId: country.value,
			stateId: countryState.value,
			name: cityName.value,
			zipCode: zipCode.value,
		});
		cityName.value = '';
		zipCode.value = '';
		countryState.value = '0';
		country.value = '0';
		this.setState({
			formDisabled: true,
			selectStateDisabled: true,
		});
	}

	@autobind
	handleStateChange() {
		const { countryState } = this.refs;
		if (countryState.value === '0') {
			this.setState({
				formDisabled: true,
			});
		} else {
			this.setState({
				formDisabled: false,
			});
		}
	}

	@autobind
	handleChange() {
		const { country } = this.refs;
		const countryIdForm = country.value;
		if (countryIdForm === '0') {
			this.setState({
				selectStateDisabled: true,
				states: [],
			});
		} else {
			const countryFound = this.props.countryList.find(country => country._id === countryIdForm);
			this.setState({
				selectStateDisabled: false,
				states: countryFound.states,
			});
		}
	}

	render() {
		const { countryList } = this.props;
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar ciudad</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateCity}>
					<select ref="country" onChange={this.handleChange}>
						<option value='0'>Seleccionar país</option>
						{countryList.map(country => <option key={country._id} value={country._id}>{country.name}</option>)}
					</select>
					<select ref="countryState" onChange={this.handleStateChange} disabled={this.state.selectStateDisabled}>
						<option value='0'>Seleccionar estado</option>
						{this.state.states.map(state => <option key={state._id} value={state._id}>{state.name}</option>)}
					</select>
					<input class="input" ref="cityName" type="text" placeholder="Nombre de la ciudad" required={true} />
					<input class="input" ref="zipCode" type="text" placeholder="Código postal" required={true} />
					<input class="btn add" type="submit" value="Agregar" disabled={this.state.formDisabled} />
				</form>
			</div>
		);
	}
}