import React, { Component, PropTypes } from 'react';
import CountryForm from './CountryForm';
import StateForm from './StateForm';
import CityForm from './CityForm';
import BranchOfficesForm from './BranchOfficesForm';

export default class RightSide extends Component {
	render() {
		const { options } = this.props;
		return (
			<div class="body__right">
				{options.country && <CountryForm />}
				{options.state && <StateForm />}
				{options.city && <CityForm />}
				{options.branchOffices && <BranchOfficesForm />}
			</div>
		);
	}
}

RightSide.propTypes = {
  options: PropTypes.object,
};
