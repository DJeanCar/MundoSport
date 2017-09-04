import React, { Component } from 'react';
import OptionList from './OptionList';

export default class Inventary extends Component {
	render() {
		console.log('render inventary');
		return (
			<div class="content">
				<OptionList />
				<div class="content__body">
					<div class="body__left">
						<div class="field">
							<div class="field__header">
								<h2>Países</h2>
							</div>
							<div class="field__body">
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
							</div>
						</div>
						<div class="field">
							<div class="field__header">
								<h2>Países</h2>
							</div>
							<div class="field__body">
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
								<div class="field__row">
									<div>Estado</div>
									<div>Capital</div>
									<div><a href="" class="btn delete">Eliminar</a></div>
								</div>
							</div>
						</div>
					</div>
					<div class="body__right">
						<div class="field">
							<div class="field__header">
								<h2>Agregar país</h2>
							</div>
							<div class="field__body">
								<input class="input" type="text" placeholder="Seleccionar país" />
								<input class="input" type="text" placeholder="Nombre del estado" />
								<input class="input" type="text" placeholder="Capital" />
								<input class="input" type="text" placeholder="Capital" />
								<a href="" class="btn add">Agregar</a>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}