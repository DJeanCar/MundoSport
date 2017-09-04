import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllCountries
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    countryList: state.parameters.countryList,
  }),
  dispatch => bindActionCreators({
  	getAllCountries,
  }, dispatch)
)


export default class City extends Component {

	componentWillMount() {
		this.props.getAllCountries();
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
								{ country.cities.map(city => 
									<div class="field__row" key={city._id}>
										<div>{city.name}</div>
										<div>{city.zipCode}</div>
										<div>{city.state.name}</div>
										<div><a class="btn delete">Eliminar</a></div>
									</div>
								)}
							</div>
						</div>
					)}
			</div>
		);
	}
}

City.propTypes = {
  // options: PropTypes.object,
};