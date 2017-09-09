import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllCountries,
  deleteState,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	getAllCountries,
  	deleteState,
  }, dispatch)
)


export default class Country extends Component {

	componentWillMount() {
		this.props.getAllCountries();
	}

	@autobind
	handleDeleteState(stateId) {
		if (confirm("¿Estas seguro que quieres borrar este estado?")) {
			this.props.deleteState(stateId);
		}
	}

	render() {
		const { countryList } = this.props;
		return (
			<div class="body__left">
				{countryList.map(country => 
						<div class="field" key={country._id}>
							<div class="field__header">
								<h2>{country.name}</h2>
							</div>
							<div class="field__body">
								{ country.states.map(state => 
									<div class="field__row" key={state._id}>
										<div>{state.name}</div>
										<div>{state.capital}</div>
										<div><a onClick={() => this.handleDeleteState(state._id)} class="btn delete">Eliminar</a></div>
									</div>
								)}
							</div>
						</div>
					)}
			</div>
		);
	}
}

Country.propTypes = {
  // options: PropTypes.object,
};