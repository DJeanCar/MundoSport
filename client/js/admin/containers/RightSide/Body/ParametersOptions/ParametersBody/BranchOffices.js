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


export default class BranchOffices extends Component {

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
								{ country.branchOffices.map(branchOffice => 
									<div class="field__row" key={branchOffice._id}>
										<div>{branchOffice.name}</div>
										<div>{branchOffice.address}</div>
										<div>{branchOffice.state.name}</div>
										<div>{branchOffice.city.name}</div>
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

BranchOffices.propTypes = {
  countryList: PropTypes.array,
};
