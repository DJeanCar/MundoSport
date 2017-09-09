import React, { Component, PropTypes } from 'react';
import DivisionForm from './DivisionForm';
import BrandForm from './BrandForm';
import ModelForm from './ModelForm';
import ColorForm from './ColorForm';
import SizeForm from './SizeForm';

export default class FormSide extends Component {
	render() {
		const { options } = this.props;
		return (
			<div class="body__right">
				{options.division && <DivisionForm />}
				{options.brands && <BrandForm />}
				{options.models && <ModelForm />}
				{options.colors && <ColorForm />}
				{options.sizes && <SizeForm />}
			</div>
		);
	}
}

FormSide.propTypes = {
  options: PropTypes.object,
};
