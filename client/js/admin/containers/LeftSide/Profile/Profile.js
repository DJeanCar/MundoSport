import React, { Component } from 'react';

export default class Profile extends Component {
	render() {
		return (
			<div class="profile">
				<img src="/img/profile.png" alt="" />
				<div class="profile__info">
					<span class="full-name">Jean Mariños</span>
					<span class="user-type">Administrador</span>
				</div>
			</div>
		);
	}
}
