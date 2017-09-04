import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createState,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	createState,
  }, dispatch)
)

export default class StateForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			formDisabled: true,
		};
	}

	@autobind
	handleCreateState(e) {
		e.preventDefault();
		const { state, capital, country } = this.refs;
		this.props.createState({
			stateName: state.value,
			capitalName: capital.value,
			countryId: country.value, 
		});
		state.value = '';
		capital.value = '';
		country.value = '0';
		this.setState({
			formDisabled: true,
		});
	}

	@autobind
	handleChange() {
		const { country } = this.refs;
		if (country.value === '0') {
			this.setState({
				formDisabled: true,
			});
		} else {
			this.setState({
				formDisabled: false,
			});
		}
	}

	render() {
		const { countryList } = this.props;
		return (
			<div class="field">
				<div class="field__header">
					<h2>Agregar estado</h2>
				</div>
				<form class="field__body" onSubmit={this.handleCreateState}>
					<select ref="country" onChange={this.handleChange}>
						<option value='0'>Seleccionar país</option>
						{countryList.map(country => <option key={country._id} value={country._id}>{country.name}</option>)}
					</select>
					<input class="input" ref="state" type="text" placeholder="Nombre del estado" required={true} />
					<input class="input" ref="capital" type="text" placeholder="Nombre de la capital" required={true} />
					<input class="btn add" type="submit" value="Agregar" disabled={this.state.formDisabled} />
				</form>
			</div>
		);
	}
}
