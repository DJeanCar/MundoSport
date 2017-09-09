import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getColors,
  deleteColor,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    colorList: state.inventary.colorList,
  }),
  dispatch => bindActionCreators({
  	getColors,
  	deleteColor,
  }, dispatch)
)


export default class Color extends Component {

	componentWillMount() {
		this.props.getColors();
	}

	handleDelete(colorId) {
		if (confirm("¿Estas seguro que quieres borrar este color?")) {
			this.props.deleteColor(colorId);
		}
	}

	render() {
		const { colorList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Colores</h2>
					</div>
					<div class="field__body">
					{colorList.map((color, index) => 
									<div class="field__row" key={color._id}>
										<div>{index + 1}</div>
										<div>{color.name}</div>
										<div><a onClick={() => this.handleDelete(color._id)} class="btn delete">Eliminar</a></div>
									</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

Color.propTypes = {
  colorList: PropTypes.array,
};