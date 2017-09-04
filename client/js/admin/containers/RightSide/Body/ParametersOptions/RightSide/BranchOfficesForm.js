import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createBranchOffices,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	createBranchOffices,
  }, dispatch)
)

export default class BranchOfficesFrom extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formDisabled: true,
			selectStateDisabled: true,
			selectCityDisabled: true,
			states: [],
			cities: [],
		};
	}

	@autobind
	handleCreateCity(e) {
		e.preventDefault();
		const { country, countryState, city, cityBranchOffices, address } = this.refs;
		this.props.createBranchOffices({
			countryId: country.value,
			stateId: countryState.value,
			cityId: city.value,
			name: cityBranchOffices.value,
			address: address.value,
		});
		cityBranchOffices.value = '';
		address.value = '';
		country.value = '0';
		countryState.value = '0';
		city.value = '0';
		this.setState({
			formDisabled: true,
			selectStateDisabled: true,
			selectCityDisabled: true,
		});
	}

	@autobind
	handleCityChange() {
		const { city } = this.refs;
		if (city.value === '0') {
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
	handleStateChange() {
		const { countryState, country } = this.refs;
		const countryIdForm = country.value;
		if (countryState.value === '0') {
			this.setState({
				selectCityDisabled: true,
			});
		} else {
			const countryFound = this.props.countryList.find(country => country._id === countryIdForm);
			const cities = countryFound.cities.filter(city => city.state._id === countryState.value);
			this.setState({
				selectCityDisabled: false,
				cities,
			});
		}
	}

	@autobind
	handleCountryChange() {
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
					<h2>Agregar Sucursal</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateCity}>
					<select ref="country" onChange={this.handleCountryChange}>
						<option value='0'>Seleccionar país</option>
						{countryList.map(country => <option key={country._id} value={country._id}>{country.name}</option>)}
					</select>
					<select ref="countryState" onChange={this.handleStateChange} disabled={this.state.selectStateDisabled}>
						<option value='0'>Seleccionar estado</option>
						{this.state.states.map(state => <option key={state._id} value={state._id}>{state.name}</option>)}
					</select>
					<select ref="city" onChange={this.handleCityChange} disabled={this.state.selectCityDisabled}>
						<option value='0'>Seleccionar estado</option>
						{this.state.cities.map(state => <option key={state._id} value={state._id}>{state.name}</option>)}
					</select>
					<input class="input" ref="cityBranchOffices" type="text" placeholder="Nombre del sucursal" required={true} />
					<input class="input" ref="address" type="text" placeholder="Dirección del sucursal" required={true} />
					<input class="btn add" type="submit" value="Agregar" disabled={this.state.formDisabled} />
				</form>
			</div>
		);
	}
}