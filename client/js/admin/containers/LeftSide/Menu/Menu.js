import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Profile from '../Profile/Profile';

export default class Menu extends Component {
	render() {
		return (
			<div class="menu-list">
				<div class="menu-item active">
					<Link to="/admin">
						<img src="/img/home.png" alt="" />
						<span>Inicio</span>
					</Link>
				</div>
				<div class="menu-item">
					<Link to="/admin/parametros">
						<img src="/img/home.png" alt="" />
						<span>Parámetros</span>
					</Link>
				</div>
				<div class="menu-item">
					<Link to="/admin/inventario">
						<img src="/img/home.png" alt="" />
						<span>Inventario</span>
					</Link>
				</div>
				<div class="menu-item">
					<Link to="/admin/comercial">
						<img src="/img/home.png" alt="" />
						<span>Comercial</span>
					</Link>
				</div>
				<div class="menu-item">
					<Link to="/admin/finanzas">
						<img src="/img/home.png" alt="" />
						<span>Finanzas</span>
					</Link>
				</div>
				<div class="menu-item">
					<Link to="/admin/reportes">
						<img src="/img/home.png" alt="" />
						<span>Reportes</span>
					</Link>
				</div>
			</div>
		);
	}
}
