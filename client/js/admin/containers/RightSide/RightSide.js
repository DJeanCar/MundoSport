import React, { Component } from 'react';
import Header from './Header/Header';
import Home from './Body/Home/Home';
import ParametersOptions from './Body/ParametersOptions/ParametersOptions';
import Inventary from './Body/Inventary/Inventary';
import { Route } from 'react-router-dom';

export default class LeftSide extends Component {
	render() {
		return (
			<section class="main-side">
				<div class="container">
					<Header />
			  	<Route exact={true} path="/admin" component={Home}/>
			  	<Route path="/admin/parametros" component={ParametersOptions}/>
			  	<Route path="/admin/inventario" component={Inventary}/>
				</div>
			</section>
		);
	}
}
