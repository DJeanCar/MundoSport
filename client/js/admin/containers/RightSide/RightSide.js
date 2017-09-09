import React, { Component } from 'react';
import Header from './Header/Header';
import Home from './Body/Home/Home';
import ParametersOptions from './Body/ParametersOptions/ParametersOptions';
import InventaryOptions from './Body/InventaryOptions/InventaryOptions';
import { Route } from 'react-router-dom';

export default class LeftSide extends Component {
	render() {
		return (
			<section class="main-side">
				<div class="container">
					<Header />
			  	<Route exact={true} path="/admin" component={Home}/>
			  	<Route path="/admin/parametros" component={ParametersOptions}/>
			  	<Route path="/admin/inventario" component={InventaryOptions}/>
				</div>
			</section>
		);
	}
}
