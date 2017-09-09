import React, { Component, PropTypes } from 'react';
import FormSide from '../FormSide/FormSide';
import Division from './Division';
import Brand from './Brand';
import Models from './Models';
import Color from './Color';
import Size from './Size';


export default class InventaryBody extends Component {

	render() {
		const { options } = this.props;
		return (
			<div class="content__body">
				{options.division && <Division />}
				{options.brands && <Brand />}
				{options.models && <Models />}
				{options.colors && <Color />}
				{options.sizes && <Size />}
				<FormSide options={this.props.options}/>
			</div>
		);
	}
}
				// {options.products && <BranchOffices />}
				// {options.inventary && <BranchOffices />}
				// {options.prices && <BranchOffices />}
				// {options.existences && <BranchOffices />}

InventaryBody.propTypes = {
  options: PropTypes.object,
};