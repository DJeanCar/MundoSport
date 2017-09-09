import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getDivisions,
  deleteDivision,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    divisionList: state.inventary.divisionList,
  }),
  dispatch => bindActionCreators({
  	getDivisions,
  	deleteDivision,
  }, dispatch)
)


export default class Division extends Component {

	componentWillMount() {
		this.props.getDivisions();
	}

	handleDelete(divisionId) {
		if (confirm("¿Estas seguro que quieres borrar esta división?")) {
			this.props.deleteDivision(divisionId);
		}
	}

	render() {
		const { divisionList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Divisiones</h2>
					</div>
					<div class="field__body">
					{divisionList.map((division, index) => 
									<div class="field__row" key={division._id}>
										<div>{index + 1}</div>
										<div>{division.name}</div>
										<div><a onClick={() => this.handleDelete(division._id)} class="btn delete">Eliminar</a></div>
									</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

Division.propTypes = {
  divisionList: PropTypes.array,
};