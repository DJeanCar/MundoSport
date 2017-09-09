import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getBrands,
  deleteBrand,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    brandList: state.inventary.brandList,
  }),
  dispatch => bindActionCreators({
  	getBrands,
  	deleteBrand,
  }, dispatch)
)


export default class Brand extends Component {

	componentWillMount() {
		this.props.getBrands();
	}

	handleDelete(brandId) {
		if (confirm("¿Estas seguro que quieres borrar esta marca?")) {
			this.props.deleteBrand(brandId);
		}
	}

	render() {
		const { brandList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Marcas</h2>
					</div>
					<div class="field__body">
					{brandList.map((brand, index) => 
									<div class="field__row" key={brand._id}>
										<div>{index + 1}</div>
										<div>{brand.name}</div>
										<div><a onClick={() => this.handleDelete(brand._id)} class="btn delete">Eliminar</a></div>
									</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

Brand.propTypes = {
  brandList: PropTypes.array,
};