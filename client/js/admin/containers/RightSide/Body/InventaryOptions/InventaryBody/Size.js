import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSizes,
  deleteSize,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    sizeList: state.inventary.sizeList,
  }),
  dispatch => bindActionCreators({
  	getSizes,
  	deleteSize,
  }, dispatch)
)


export default class Size extends Component {

	componentWillMount() {
		this.props.getSizes();
	}

	handleDelete(sizeId) {
		if (confirm("¿Estas seguro que quieres borrar esta talla?")) {
			this.props.deleteSize(sizeId);
		}
	}

	render() {
		const { sizeList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Tallas</h2>
					</div>
					<div class="field__body">
					{sizeList.map((size, index) => 
									<div class="field__row" key={size._id}>
										<div>{index + 1}</div>
										<div>{size.name}</div>
										<div><a onClick={() => this.handleDelete(size._id)} class="btn delete">Eliminar</a></div>
									</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
