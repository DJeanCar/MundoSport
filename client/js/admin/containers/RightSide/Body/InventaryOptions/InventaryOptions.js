import React, { Component } from 'react';
import InventaryBody from './InventaryBody/InventaryBody';
import autobind from 'autobind-decorator';
import classNames from 'classnames';

export default class InventaryOptions extends Component {

	constructor(props) {
		super(props);
		this.state = {
			division: true,
			brands: false, // marca
			models: false,
			colors: false, // sucursales
			sizes: false, // talla
			products: false,
			inventary: false,
			prices: false,
			existences: false,
		};
	}

	@autobind
	handleClick(division, brands, models, colors, sizes, products, inventary, prices, existences) {
		this.setState({
			division,
			brands,
			models,
			colors,
			sizes,
			products,
			inventary,
			prices,
			existences,
		});
	}

	render() {
		const divisionActive = classNames({
			'option-item': true,
			active: this.state.division,
		});
		const brandsActive = classNames({
			'option-item': true,
			active: this.state.brands,
		});
		const modelsActive = classNames({
			'option-item': true,
			active: this.state.models,
		});
		const colorsActive = classNames({
			'option-item': true,
			active: this.state.colors,
		});
		const sizesActive = classNames({
			'option-item': true,
			active: this.state.sizes,
		});
		const productsActive = classNames({
			'option-item': true,
			active: this.state.products,
		});
		const inventaryActive = classNames({
			'option-item': true,
			active: this.state.inventary,
		});
		const pricesActive = classNames({
			'option-item': true,
			active: this.state.prices,
		});
		const existencesActive = classNames({
			'option-item': true,
			active: this.state.existences,
		});

		return (
			<div class="content">
				<div class="option-list">
					<div onClick={ () => this.handleClick(true, false, false, false, false, false, false, false, false) } class={ divisionActive }>Divisiones</div>
					<div onClick={ () => this.handleClick(false, true, false, false, false, false, false, false, false) } class={ brandsActive }>Marcas</div>
					<div onClick={ () => this.handleClick(false, false, true, false, false, false, false, false, false) } class={ modelsActive }>Modelos</div>
					<div onClick={ () => this.handleClick(false, false, false, true, false, false, false, false, false) } class={ colorsActive }>Colores</div>
					<div onClick={ () => this.handleClick(false, false, false, false, true, false, false, false, false) } class={ sizesActive }>Tallas</div>
					<div onClick={ () => this.handleClick(false, false, false, false, false, true, false, false, false) } class={ productsActive }>Productos</div>
					<div onClick={ () => this.handleClick(false, false, false, false, false, false, true, false, false) } class={ inventaryActive }>Inventario</div>
					<div onClick={ () => this.handleClick(false, false, false, false, false, false, false, true, false) } class={ pricesActive }>Precios</div>
					<div onClick={ () => this.handleClick(false, false, false, false, false, false, false, false, true) } class={ existencesActive }>Existencias</div>
				</div>
				<InventaryBody
					options={ this.state } />	
			</div>
		);
	}
}