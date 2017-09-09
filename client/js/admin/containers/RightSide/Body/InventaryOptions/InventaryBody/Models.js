import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getModels,
  deleteModel,
} from '../../../../../actions';
import autobind from 'autobind-decorator';

@connect(
  state => ({
    modelList: state.inventary.modelList,
  }),
  dispatch => bindActionCreators({
  	getModels,
  	deleteModel,
  }, dispatch)
)


export default class Model extends Component {

	componentWillMount() {
		this.props.getModels();
	}

	handleDelete(modelId) {
		if (confirm("¿Estas seguro que quieres borrar este modelo?")) {
			this.props.deleteModel(modelId);
		}
	}

	render() {
		const { modelList } = this.props;
		return (
			<div class="body__left">
				<div class="field">
					<div class="field__header">
						<h2>Modelos</h2>
					</div>
					<div class="field__body">
					{modelList.map((model, index) => 
									<div class="field__row" key={model._id}>
										<div>{index + 1}</div>
										<div>{model.name}</div>
										<div><a onClick={() => this.handleDelete(model._id)} class="btn delete">Eliminar</a></div>
									</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

Model.propTypes = {
  modelList: PropTypes.array,
};