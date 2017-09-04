import React, { Component, PropTypes } from 'react';
import RightSide from '../RightSide/RightSide';
import Country from './Country';
import State from './State';
import City from './City';
import BranchOffices from './BranchOffices';


export default class ParametersBody extends Component {

	render() {
		const { options } = this.props;
		return (
			<div class="content__body">
				{options.country && <Country />}
				{options.state && <State />}
				{options.city && <City />}
				{options.branchOffices && <BranchOffices />}
				<RightSide options={this.props.options}/>
			</div>
		);
	}
}

ParametersBody.propTypes = {
  options: PropTypes.object,
  countryList: PropTypes.array,
};
