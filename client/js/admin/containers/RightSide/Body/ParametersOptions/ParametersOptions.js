import React, { Component } from 'react';
import ParametersBody from './ParametersBody/ParametersBody';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

export default class ParametersOptions extends Component {

	constructor(props) {
		super(props);
		this.state = {
			country: true,
			state: false,
			city: false,
			branchOffices: false, // sucursales
			controller: false,
		};
	}

	@autobind
	handleClick(country, state, city, branchOffices, controller) {
		this.setState({
			country,
			state,
			city,
			branchOffices,
			controller,
		});
	}

	render() {
		const countryActive = classNames({
			'option-item': true,
			active: this.state.country,
		});
		const stateActive = classNames({
			'option-item': true,
			active: this.state.state,
		});
		const cityActive = classNames({
			'option-item': true,
			active: this.state.city,
		});
		const branchOfficesActive = classNames({
			'option-item': true,
			active: this.state.branchOffices,
		});
		const controllerActive = classNames({
			'option-item': true,
			active: this.state.controller,
		});

		return (
			<div class="content">
				<div class="option-list">
					<div onClick={ () => this.handleClick(true, false, false, false, false) } class={ countryActive }>País</div>
					<div onClick={ () => this.handleClick(false, true, false, false, false) } class={ stateActive }>Estado</div>
					<div onClick={ () => this.handleClick(false, false, true, false, false) } class={ cityActive }>Ciudad</div>
					<div onClick={ () => this.handleClick(false, false, false, true, false) } class={ branchOfficesActive }>Sucursales</div>
					<div onClick={ () => this.handleClick(false, false, false, false, true) } class={ controllerActive }>Controlador</div>
				</div>
				<ParametersBody
					options={ this.state } />	
			</div>
		);
	}
}