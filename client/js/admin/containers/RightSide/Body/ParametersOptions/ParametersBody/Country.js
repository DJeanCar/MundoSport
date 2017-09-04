import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllCountries,
  deleteCountry,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	getAllCountries,
  	deleteCountry,
  }, dispatch)
)


export default class Country extends Component {

	componentWillMount() {
		this.props.getAllCountries();
	}

	handleDelete(countryId) {
		if (confirm("¿Estas seguro que quieres borrar este país?")) {
			this.props.deleteCountry(countryId);
		}
	}

	render() {
		const { countryList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Países</h2>
					</div>
					<div class="field__body">
						{countryList.map(country => 
								<div class="field__row" key={country._id}>
									<div>{country.name}</div>
									<div>{country.code}</div>
									<div><a onClick={() => this.handleDelete(country._id)} class="btn delete">Eliminar</a></div>
								</div>
							)}
					</div>
				</div>
			</div>
		);
	}
}

Country.propTypes = {
  // options: PropTypes.object,
};