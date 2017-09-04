import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default class OptionList extends Component {

	@autobind
	handleClick(e) {
		console.log('click');
	}


	render() {
		return (
			<div class="option-list">
				<div class="option-item active">División</div>
				<div class="option-item">Marcas</div>
				<div class="option-item">Modelos</div>
				<div class="option-item">Colores</div>
				<div class="option-item">Tallas</div>
				<div class="option-item">Productos</div>
				<div class="option-item">Inventario</div>
				<div class="option-item">Precios</div>
				<div class="option-item">Existencias</div>
			</div>
		);
	}
}
